from urllib.request import urlopen
from plotly.subplots import make_subplots
import plotly
import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
import json
import os
import fnmatch
from selenium import webdriver
import time
from pmdarima.arima import auto_arima
import datetime
import warnings
import numpy as np
import chardet
warnings.filterwarnings("ignore")



def find(pattern, path):
    result = []
    for root, dirs, files in os.walk(path):
        for name in files:
            if fnmatch.fnmatch(name, pattern):
                result.append(os.path.join(root, name))
    return result

# # # Getting the update file and update text from the saude.gov
def file_to_df():
    ''' Using selenium to get the file of the Ministerio da Saude website and transforming into a dataframe'''    
    driver = webdriver.Chrome('/home/paulinho/Downloads/chromedriver_linux64/chromedriver')
    print("opening the browser...")
    time.sleep(5)
    driver.get('https://covid.saude.gov.br/')
    print("opening the saude.gov.br website...")
    time.sleep(5)

    print("getting the last update...")
    div_updated = driver.find_element_by_xpath("//div[contains(text(),' Atualizado em: ')]")
    span_updated = div_updated.text.split("\n")
    time.sleep(3)

    print("downloading the updated file...")
    button_csv = driver.find_element_by_xpath("//ion-button[contains(text(),' Arquivo CSV ')]")
    button_csv.click()
    time.sleep(5)

    print("searching for the updated file in Downloads...")
    matching = []
    while matching == []:
        all_files = find('*.xlsx', '/home/paulinho/Downloads/')
        matching = [s for s in all_files if "HIST" in s or "PAINEL" in s]
        print("no file yet...")
        time.sleep(2)
    df = pd.read_excel(matching[0], sheet_name="Sheet 1")
    time.sleep(3)

    print("closing the browser and deleting the updated files from Downloads...\n")
    driver.quit()
    os.remove(matching[0])

    return df, span_updated


# # # ------------------------------------------------------------------------------------------------


df, span_updated = file_to_df()
df['data'] = pd.to_datetime(df['data'], dayfirst=True)


# # # ---------------------------- BAR CHART RACE ----------------------------------------------------------------------
print("preprocessing data bar chart race...")

df_aux = df.copy()
df_aux['data'] = pd.to_datetime(df_aux['data'], dayfirst=True)
df_aux2 = df_aux.groupby(['data','estado']).sum()


rows = df_aux['data'].unique()
columns = df_aux['estado'].unique()
columns = columns[1:]


def preprocess_df(column):
    global rows
    global columns

    df = pd.DataFrame(0, index=rows, columns=columns)

    for i in df.index:
        df.loc[i] = pd.Series(df_aux2[column][i])

    df.fillna(value=0, inplace=True)
    df = df.astype(int)

    return df

def get_rgb_vals():
    r = np.random.randint(1,255)
    g = np.random.randint(1,255)
    b = np.random.randint(1,255)
    return [r,g,b]

def get_top_10(d):
    
    data = d.sort_values()
    color_aux = []
    
    for i in data.iloc[-10:,].index:
        color_aux.append(dcolors[i])
    return data.iloc[-10:,], color_aux


print("Generating frames bar chart race...")

def bar_chart_race(df, title, start_date):

    df = df[df.index >= start_date]
    limit_range = max(df.max())
    listOfFrames = []

    for i in df.index:
        d = df.loc[i]
        pdata, color_aux = get_top_10(d)
        data = str(i).split(" ")
        listOfFrames.append(go.Frame(data = [go.Bar(x = pdata, y = pdata.index,
                                                    marker_color = color_aux, text = pdata.index,
                                                    textposition = "outside",
                                                    texttemplate = "%{y}<br>%{x:s}",cliponaxis = False,orientation='h')],
                                    layout = go.Layout(
                                        font = {"size":20},
                                        height = 700,
                                        xaxis = {"showline":False,"tickangle":-90, "visible":False, "range":[0,limit_range]},
                                        yaxis = {"showline":False, "visible":False},
                                        title = title + " no dia: " + data[0])))
        
    fdata, color_aux = get_top_10(df.loc[start_date])


    fig = go.Figure(
    data = [go.Bar(x = fdata, y = fdata.index,
                marker_color = color_aux, text = fdata.index,
                textposition = "outside",
                texttemplate = "%{y}<br>%{x:s}",cliponaxis = False,orientation='h')],
    layout=go.Layout(
        title= title + " no dia: " + start_date,
        font = {"size":20},
        height = 700,
        xaxis = {"showline":False,"tickangle":-90, "visible":False,"range":[0,limit_range]},
        yaxis = {"showline":False, "visible":False},
        updatemenus=[dict(
            type="buttons",
            buttons=[dict(label="Play",
                        method="animate",
                        args=[None])])]
    ),
    frames=list(listOfFrames)
    )

    return fig




# # # -------------------------------------------------------------------------------------------------



# # # ------------------------------------------- MAPS ------------------------------------------------------
with urlopen('https://raw.githubusercontent.com/datalivre/Conjunto-de-Dados/master/br_states.json') as response:
    states = json.load(response)


def maps_fig(df, labels, color, scale):

    global states
    
    df.rename(columns={'casosAcumulado':'Casos','obitosAcumulado':'Obitos','estado':'Estado'}, inplace=True)

    fig = px.choropleth_mapbox(df, geojson=states, locations="Estado", color=color,
                            color_continuous_scale=scale,
                            range_color=(0, int(max(df[color]))),
                            mapbox_style="carto-positron",
                            zoom=3, center = {"lat": -15.77972, "lon": -47.92972},
                            opacity=0.5,
                            labels=labels
                            )
    fig.update_layout(margin={"r":0,"t":0,"l":0,"b":0})

    return fig

# # # -------------------------------------------------------------------------------------------------



# # # ------------------------------------------- LINE CHART N-TRACES ----------------------------------------------

def fig_n_trace(df, column, name):

    fig = go.Figure()

    if isinstance(column, list):
        for i in range(len(name)):
            fig.add_trace(go.Scatter(x=df.index, y=df[column[i]].values,
                            mode='lines+markers',
                            name=name[i],
                            fill='tozeroy'))

    elif isinstance(column, str):
        fig.add_trace(go.Scatter(x=df.index, y=df[column].values,
                        mode='lines+markers',
                        name=name,
                        fill='tozeroy'))

    fig.update_layout(legend=dict(x=0, y=1), margin={"r":0,"t":10,"l":0,"b":0})
    return fig         

# # # -------------------------------------------------------------------------------------------------

# # # --------------------------------- LINE CHART NO INDEX DATAFRAME ------------------------

def fig_noindex_df(df, column, name):

    fig = go.Figure()
    if isinstance(column, list):
        for i in range(len(name)):
            fig.add_trace(go.Scatter(x=df[(df['regiao'] == name[i])]['data'], y=df[df['regiao'] == name[i]][column[i]],
                            mode='lines+markers',
                            name=name[i]))

    elif isinstance(column, str):
        for i in range(len(name)):
            fig.add_trace(go.Scatter(x=df[(df['regiao'] == name[i])]['data'], y=df[df['regiao'] == name[i]][column],
                            mode='lines+markers',
                            name=name[i]))

    fig.update_layout(legend=dict(x=0, y=1), margin={"r":0,"t":10,"l":0,"b":0})
    return fig       


# # # -------------------------------------------------------------------------------------------------------------------


###---------------------------------------------- bar chart cases/deaths region ----------------------------------------------------

def bar_fig(df, name):
    fig = go.Figure(data=[
        go.Bar(name=name[0], x=df['regiao'].unique(), y=df['obitosAcumulado'], marker_color='red'),
        go.Bar(name=name[1], x=df['regiao'].unique(), y=df['casosAcumulado'], marker_color='blue')
    ])
    # Change the bar mode
    fig.update_layout(barmode='stack',legend=dict(x=0, y=1),margin={"r":0,"t":10,"l":0,"b":0})
    return fig

###-------------------------------------------------------------------------------------------------------------------------

###------------------------------------------- PIE CHART -------------------------------------------------------------
def fig_pie(df, column, name):

    df_cases_region = df.groupby(['regiao']).sum()

    labels = df_cases_region.index
    fig = go.Figure(data=[go.Pie(labels=labels, values=df_cases_region[column], name=name,hole=.5)])

    return fig


###----------------------------------------------------------------------------------------------------------------------



###------------------------------------------- ADDING DIV -------------------------------------------------------------

def add_div(fig, column, title):
    
    if column == 1:
        div = '''
                        <div class="row row-cols-1 row-cols-md-1">
                            <div class="col mb-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">''' + title + '''</h5>
                                    <p class="card-text">''' + plotly.offline.plot(fig, include_plotlyjs=False, output_type='div') + '''</p>
                                </div>
                                </div>
                            </div> 
                        </div>
                        '''
    elif column == 2:
        div = '''
                        <div class="row row-cols-1 row-cols-md-2">
                            <div class="col mb-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">''' + title[0] + '''</h5>
                                    <p class="card-text">''' + plotly.offline.plot(fig[0], include_plotlyjs=False, output_type='div') + '''</p>
                                </div>
                                </div>
                            </div> 

                            <div class="col mb-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">''' + title[1] + '''</h5>
                                    <p class="card-text">''' + plotly.offline.plot(fig[1], include_plotlyjs=False, output_type='div') + '''</p>
                                </div>
                                </div>
                            </div> 
                        </div>
                        '''

    return div




# # # ---------------------------------- FIGURES ------------------------------------------------

df_deaths = preprocess_df('obitosAcumulado')
df_cases = preprocess_df('casosAcumulado')

colors = []
for i in range(len(df_deaths.columns)):
    c = get_rgb_vals()
    colors.append("rgb(" + str(c[0]) + ","+ str(c[1]) + ","+ str(c[2]) + ")")

dcolors = dict(zip(columns, colors))
bar_race_deaths = bar_chart_race(df_deaths, "Óbitos", "2020-03-15")
bar_race_cases = bar_chart_race(df_cases, "Casos","2020-02-26")



df_aux = df[df['regiao'] != 'Brasil'].groupby(['estado'])['casosAcumulado','obitosAcumulado'].max()
df_aux = df_aux.reset_index()
fig_map_deaths = maps_fig(df_aux, {'Obitos':'Óbitos'}, 'Obitos', "OrRd")
fig_map_cases = maps_fig(df_aux, {'Casos':'Casos'}, 'Casos', "Blues")


fig_cases_region_pie = fig_pie(df, "casosNovos", 'Casos')
fig_deaths_region_pie = fig_pie(df, 'obitosNovos', "Obitos")

df_aux = df.groupby(['data']).sum()
fig_cases_total = fig_n_trace(df_aux, ['casosAcumulado', 'obitosAcumulado'], ['Casos', 'Óbitos'])
fig_new_cases = fig_n_trace(df_aux, ['casosNovos', 'obitosNovos'], ['Casos', 'Óbitos'])




df_aux = df.groupby(['data','regiao'])['casosAcumulado'].sum()
df_aux = df_aux.reset_index()
fig_cases_region_line = fig_noindex_df(df_aux, 'casosAcumulado',['Norte','Nordeste','Centro-Oeste','Sudeste','Sul'])




df_aux = df.groupby(['data','regiao'])['casosAcumulado','obitosAcumulado'].sum()
df_aux = df_aux.reset_index()

#Norte
df_aux['LetalidadeNorte'] = 100*(df_aux[(df_aux['regiao'] == 'Norte')]['obitosAcumulado']/df_aux[(df_aux['regiao'] == 'Norte')]['casosAcumulado'])
where_are_NaNs = np.isnan(df_aux['LetalidadeNorte'])
df_aux['LetalidadeNorte'][where_are_NaNs] = 0

#Nordeste
df_aux['LetalidadeNordeste'] = 100*(df_aux[(df_aux['regiao'] == 'Nordeste')]['obitosAcumulado']/df_aux[(df_aux['regiao'] == 'Nordeste')]['casosAcumulado'])
where_are_NaNs = np.isnan(df_aux['LetalidadeNordeste'])
df_aux['LetalidadeNordeste'][where_are_NaNs] = 0

#Centro-Oeste
df_aux['LetalidadeCentro'] = 100*(df_aux[(df_aux['regiao'] == 'Centro-Oeste')]['obitosAcumulado']/df_aux[(df_aux['regiao'] == 'Centro-Oeste')]['casosAcumulado'])
where_are_NaNs = np.isnan(df_aux['LetalidadeCentro'])
df_aux['LetalidadeCentro'][where_are_NaNs] = 0

#Sudeste
df_aux['LetalidadeSudeste'] = 100*(df_aux[(df_aux['regiao'] == 'Sudeste')]['obitosAcumulado']/df_aux[(df_aux['regiao'] == 'Sudeste')]['casosAcumulado'])
where_are_NaNs = np.isnan(df_aux['LetalidadeSudeste'])
df_aux['LetalidadeSudeste'][where_are_NaNs] = 0

#Sul
df_aux['LetalidadeSul'] = 100*(df_aux[(df_aux['regiao'] == 'Sul')]['obitosAcumulado']/df_aux[(df_aux['regiao'] == 'Sul')]['casosAcumulado'])
where_are_NaNs = np.isnan(df_aux['LetalidadeSul'])
df_aux['LetalidadeSul'][where_are_NaNs] = 0

fig_lethality_region_line = fig_noindex_df(df_aux,['LetalidadeNorte','LetalidadeNordeste','LetalidadeCentro','LetalidadeSudeste','LetalidadeSul'], ['Norte','Nordeste','Centro-Oeste','Sudeste','Sul'])


#Brasil
df_aux = df.groupby(['data','regiao'])['casosAcumulado','obitosAcumulado'].sum()
df_aux = df_aux.reset_index()


df_aux['LetalidadeBrasil'] = 100*(df_aux[(df_aux['regiao'] == 'Brasil')]['obitosAcumulado']/df_aux[(df_aux['regiao'] == 'Brasil')]['casosAcumulado'])
where_are_NaNs = np.isnan(df_aux['LetalidadeBrasil'])
df_aux['LetalidadeBrasil'][where_are_NaNs] = 0

fig_lethality_brasil_line = fig_noindex_df(df_aux, 'LetalidadeBrasil',['Brasil'])



df_aux = df.groupby(['regiao'])['casosAcumulado','obitosAcumulado'].max()
df_aux = df_aux.reset_index()
df_aux = df_aux[1:]
fig_bar_cases_region = bar_fig(df_aux, ['Óbitos', 'Casos'])




#dataframe to table
df_state_cases = df.copy()
df_state_cases = df_state_cases.groupby(['estado']).sum()
df_lethality = df_state_cases.loc[:,['casosNovos','obitosNovos']]
df_lethality['Letalidade'] =  round(df_lethality['obitosNovos']/df_lethality['casosNovos']*100,2)
df_lethality['Letalidade'] = df_lethality['Letalidade'].astype(str) + '%'
df_lethality['Letalidade'] = [x.replace('.', ',') for x in df_lethality['Letalidade']]
df_lethality.rename(columns={'casosNovo':'Confirmados',
                          'obitosNovo':'Óbitos',
                          'estado':'Estado',
                          'Letalidade':'Letalidade'}, 
                 inplace=True)
df_lethality.index.name = None
df_lethality
###--------------------------------------------------------------------------------------------------------------------------------






print("Generating index.html...")

with open("index.html", "w") as f:
    f.write(
        '''<!DOCTYPE html>
            <html>
                <head>
                    <title>Covid Painel</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="icon" type="image/png" href="https://covid.saude.gov.br/assets/imgs/Favicon.png">
                    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                    <link rel="stylesheet" href="dashboard_covid.css">
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                </head>
                <body>
                    <div class="container-fluid">
        '''
    )


    #header
    f.write(
        '''
            <div id='header_panel'>
                <h2>Painel COVID-19 no Brasil</h2>
                <p class="update_p">Atualizado em: ''' + span_updated[1] + '''</p>
                <p class="update_p">Fonte dos dados: <a href="https://covid.saude.gov.br/" target="_blank">Ministério da Saúde do Brasil</a></p>''' + 
        '''</div>'''
    )

    #cards
    f.write(



    '''<div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 id="card_case" class="card-title">''' + str(df[df['regiao'] == 'Brasil']['casosAcumulado'].max()) + '''</h5>
                        <p class="card-text card_sub_text">Casos Confirmados</p>
                    </div>
                    </div>
                </div> ''' +


                '''<div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 id="card_death" class="card-title">''' + str(df[df['regiao'] == 'Brasil']['obitosAcumulado'].max()) + '''</h5>
                        <p class="card-text card_sub_text">Óbitos</p>
                    </div>
                    </div>
                </div> ''' +

                '''<div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 id="card_lethality" class="card-title">''' + str(round(100*(float(df['obitosAcumulado'].max())/float(df['casosAcumulado'].max())),2)).replace('.',',') + '''%</h5>
                        <p class="card-text card_sub_text">Letalidade</p>
                    </div>
                    </div>
                </div>
    </div> '''



    )



    f.write(add_div(bar_race_deaths, 1, "Óbitos por estado (Bar chart race)"))
    f.write(add_div(bar_race_cases, 1, "Casos por estado (Bar chart race)"))


    f.write(add_div([fig_map_cases,fig_map_deaths], 2, ["Casos no Brasil",'Óbitos no Brasil']))

    f.write(add_div([fig_new_cases,fig_cases_total], 2, ["Novos casos por dia no Brasil",'Casos totais no Brasil']))

    f.write(add_div([fig_cases_region_pie,fig_deaths_region_pie], 2, ["Casos por região",'Óbitos por região']))

    f.write(add_div([fig_bar_cases_region,fig_cases_region_line], 2, ["Casos totais em barra por região",'Casos por região']))

    f.write(add_div([fig_lethality_brasil_line,fig_cases_region_line], 2, ["Letalidade no Brasil",'Casos por região']))


    f.write( '''<div class="row row-cols-1 row-cols-md-2">
                <div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Letalidade por região</h5>
                        <div id="div_table" class="table-responsive card-text">''' + df_lethality.to_html(classes="table table-1 table-fixed table_lethality") + '''</div>
                    </div>
                    </div>
                </div>
                
                
                <div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Letalidade por região</h5>
                        <div class="table-responsive card-text">''' + plotly.offline.plot(fig_lethality_region_line, include_plotlyjs=False, output_type='div') + '''</div>
                    </div>
                    </div>
                </div>

            </div> ''' )




    # end html file
    f.write(
        '''     </div> <!-- end div container -->
            </body>
        </html>
        '''    
    )


# # # ----------------------------------------------------------------
# # commiting the new code on github pages
print("\ncommiting and pushing the new index.html update to github...")
# # adding
cmd = 'git add .'
os.system(cmd)
# # commiting
cmd = 'git commit -m "commited at:' + span_updated[1] + '"'
os.system(cmd)
# # pushing
cmd = 'git push'
os.system(cmd)

print("DONE!")
