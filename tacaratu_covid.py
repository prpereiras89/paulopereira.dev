import plotly
import plotly.graph_objects as go
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

mapbox_access_token = open("mapbox_token").read()
fig_map = go.Figure(go.Scattermapbox(
        lat=['-9.104341','-9.104137','-9.104897',
        '-9.104659','-9.105555','-9.107164',
        '-9.106868','-9.105588','-9.105585',
        '-9.103849','-9.103147','-9.103696',
        '-9.101999','-9.103953'],
        lon=['-38.150237','-38.151239','-38.150174',
        '-38.149187','-38.149351','-38.151831',
        '-38.150423','-38.150072','-38.148240',
        '-38.149231','-38.148732','-38.146406',
        '-38.146398','-38.072160'],
        mode='markers',
        marker=go.scattermapbox.Marker(
            size=12,
            color='red'
        ),
        text=["Av. Bento Rodrigues Noia", "Rua Getúlio Vargas", 'Rua da Sudade',
        'Rua Cavalcante Nozinho', 'Rua da Matriz', 'Tv. Pedro Toscano',
        'Tv. Cônego Frederico','Rua do Comércio','Beco da Volta',
        'Rua Manoel Amadeu','Rua Dom', 'Estrada do Bebedouro',
        'Rua da Aurora', 'Rua José Moreira'],
        hovertemplate =
        "<b>Casos Confirmados:</b> 1<br>" +
        "<b>Óbitos:</b> 1<br>"
        "<b>%{text}</b><extra></extra>" 
    ))

fig_map.update_layout(
    autosize=True,
    hovermode='closest',
    mapbox=dict(
        accesstoken=mapbox_access_token,
        bearing=0,
        center=dict(
            lat=-9.10,
            lon=-38.14
        ),
        style="outdoors",
        pitch=0,
        zoom=13
    ),
    margin={"r":0,"t":10,"l":0,"b":0},
    height=700,

)


# # # ----------------------------------------------------------------

date_today = datetime.now()
days = pd.date_range(date_today - timedelta(50), date_today, freq='D')

c = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13]
o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
df = pd.DataFrame({'data': days, 'casosConfirmados': c, 'obitosConfirmados': o})
df = df.set_index('data')

fig_casos = go.Figure()
fig_casos.add_trace(go.Scatter(x=df.index, y=df['casosConfirmados'],
                                mode='lines+markers',
                                name='Casos Confirmados'))
fig_casos.add_trace(go.Scatter(x=df.index, y=df['obitosConfirmados'],
                                mode='lines+markers',
                                name='Óbitos Confirmados'))
fig_casos.update_layout(legend=dict(x=0, y=1), margin={"r":0,"t":10,"l":0,"b":0}, xaxis_tickformat = '%d/%m')

# # # ----------------------------------------------------------------

df_table = pd.DataFrame({'Bairros': ['Caraibeiras','Centro','Folha Branca'],
 'Casos': [6,3,4], 'Óbitos': [1,0,0]})
df_table = df_table.set_index('Bairros')
df_table.index.name = None




# # # ----------------------------------------------------------------



###--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
def fig_n_trace(df, column, name):

    fig = go.Figure()

    if isinstance(column, list):
        if len(name) > 2:
            for i in range(len(name)):
                fig.add_trace(go.Scatter(x=df.index, y=df[column[i]].values,
                                mode='lines+markers',
                                name=name[i]))

        else:
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

# comparing Brazil with other countries
# getting the data
df_cases_world = pd.read_csv("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv", sep=",")
df_deaths_world = pd.read_csv("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv", sep=",")


#preprocessing the data
df_cases_world = df_cases_world.drop(['Province/State','Lat','Long'], axis=1).groupby("Country/Region").sum().T
df_cases_world["world"] = df_cases_world.sum(axis=1)
df_cases_world = df_cases_world.loc[:, ['Brazil','US','Germany','United Kingdom','Australia','China','France','Italy','Japan','Spain','world']]
df_cases_world.columns.name = None

df_deaths_world = df_deaths_world.drop(['Province/State','Lat','Long'], axis=1).groupby("Country/Region").sum().T
df_deaths_world["world"] = df_deaths_world.sum(axis=1)
df_deaths_world = df_deaths_world.loc[:, ['Brazil','US','Germany','United Kingdom','Australia','China','France','Italy','Japan','Spain','world']]
df_deaths_world.columns.name = None


fig_br_cases_world_cases = fig_n_trace(df_cases_world, ['Brazil','Germany','Australia','China','Spain','US','France','United Kingdom','Italy','Japan'], ['Brasil','Alemanha','Australia','China','Espanha','EUA','França','Inglaterra','Itália','Japão'])
fig_br_deaths_world_deaths = fig_n_trace(df_deaths_world, ['Brazil','Germany','Australia','China','Spain','US','France','United Kingdom','Italy','Japan'], ['Brasil','Alemanha','Australia','China','Espanha','EUA','França','Inglaterra','Itália','Japão'])





labels = ['Brasil','Alemanha','Australia','China','Espanha','EUA','França','Inglaterra','Italia','Japão', 'Mundo']
values = [
    round(100*(float(df_deaths_world['Brazil'][-1])/float(df_cases_world['Brazil'][-1])),2),
    round(100*(float(df_deaths_world['Germany'][-1])/float(df_cases_world['Germany'][-1])),2),
    round(100*(float(df_deaths_world['Australia'][-1])/float(df_cases_world['Australia'][-1])),2),
    round(100*(float(df_deaths_world['China'][-1])/float(df_cases_world['China'][-1])),2),
    round(100*(float(df_deaths_world['Spain'][-1])/float(df_cases_world['Spain'][-1])),2),
    round(100*(float(df_deaths_world['US'][-1])/float(df_cases_world['US'][-1])),2),
    round(100*(float(df_deaths_world['France'][-1])/float(df_cases_world['France'][-1])),2),
    round(100*(float(df_deaths_world['United Kingdom'][-1])/float(df_cases_world['United Kingdom'][-1])),2),
    round(100*(float(df_deaths_world['Italy'][-1])/float(df_cases_world['Italy'][-1])),2),
    round(100*(float(df_deaths_world['Japan'][-1])/float(df_cases_world['Japan'][-1])),2),
    round(100*(float(df_deaths_world['world'][-1])/float(df_cases_world['world'][-1])),2)
]

colors = ['lightslategray',] * 11
colors[10] = 'crimson'


fig_bar_world_lethality = go.Figure(data=[
    go.Bar(x=labels, y=values, text=values, marker_color=colors, name="Letalidade Países")
])


# fig_bar_world_lethality.add_trace(go.Scatter(x=['Brasil', 'Mundo'], y=[round(100*(float(df_deaths_world['world'][-1])/float(df_cases_world['world'][-1])),2),
#                                     round(100*(float(df_deaths_world['world'][-1])/float(df_cases_world['world'][-1])),2)], name='Letalidade Mundial',
#                          line=dict(color='crimson', width=2, dash='dot')))


fig_bar_world_lethality.add_shape(
        # Line Vertical
        dict(
            type="line",
            x0=-0.5,
            y0=round(100*(float(df_deaths_world['world'][-1])/float(df_cases_world['world'][-1])),2),
            x1=10.5,
            y1=round(100*(float(df_deaths_world['world'][-1])/float(df_cases_world['world'][-1])),2),
            line=dict(color='crimson', width=2, dash='dot')
))

fig_bar_world_lethality.update_layout(legend=dict(x=0, y=1),margin={"r":0,"t":10,"l":0,"b":0})




# # # -------------------------------------------------------------------------------------------








with open("/home/paulinho/MEGA/ppereira.me/ppereira.me/index.html", "w") as f:
    f.write(
        '''<!DOCTYPE html>
            <html>
                <head>
                    <title>Tacaratu - PE</title>
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
                <h2>Painel COVID-19 em Tacaratu - PE</h2>
                <p class="update_p">Atualizado em: 06/06/2020</p>
                <p class="update_p">Fonte dos dados: <a href="https://covid.saude.gov.br/" target="_blank">Fictícios</a></p>''' + 
        '''</div>'''
    )

    f.write(
    '''<div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 id="card_case" class="card-title">13</h5>
                        <p class="card-text card_sub_text">Casos Confirmados</p>
                    </div>
                    </div>
                </div> ''' +


                '''<div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 id="card_death" class="card-title">1</h5>
                        <p class="card-text card_sub_text">Óbitos</p>
                    </div>
                    </div>
                </div> ''' +

                '''<div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 id="card_lethality" class="card-title">0.07%</h5>
                        <p class="card-text card_sub_text">Letalidade</p>
                    </div>
                    </div>
                </div>
    </div> '''
    )


    f.write(
        '''
                        <div class="row row-cols-1 row-cols-md-1">
                            <div class="col mb-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Casos Confirmados em Tacaratu - PE</h5>
                                    <p class="card-text">''' + plotly.offline.plot(fig_map, include_plotlyjs=False, output_type='div') + '''</p>
                                </div>
                                </div>
                            </div> 
                        </div>
                        '''
    )


    f.write(
        '''
                        <div class="row row-cols-1 row-cols-md-2">
                            <div class="col mb-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Casos Confirmados</h5>
                                    <p class="card-text">''' + plotly.offline.plot(fig_casos, include_plotlyjs=False, output_type='div') + '''</p>
                                </div>
                                </div>
                            </div> 

                            <div class="col mb-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Bairros de Tacaratu - PE</h5>
                                    <div id="div_table" class="table-responsive card-text">''' + df_table.to_html(classes="table table-1 table-fixed") + '''</div>
                                </div>
                                </div>
                            </div> 
                        </div>
                        '''
    )



      #comparing Brazil and US
    #header
    now = datetime.now()
    f.write(    
    '''<div id='header_panel'>
            <h2>Comparação Brasil x Mundo</h2>
            <p class="update_p">Atualizado em: ''' + now.day + "/" + now.month + "/" + now.year + '''</p>
            <p class="update_p">Fonte dos dados: <a href="https://github.com/CSSEGISandData" target="_blank">Johns Hopkins University - USA</a></p>
            <p style="color:red">OBS: Os dados podem sofrer variações devido à diferença de horário de atualização entre o Ministério da Saúde e a Johns Hopkins University.</p>
        </div>'''
    )

    #cards
    f.write(



    '''<div class="row row-cols-1 row-cols-md-3">
                <div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 id="card_case" class="card-title">''' + str(df_cases_world["world"][-1]) + '''</h5>
                        <p class="card-text card_sub_text">Casos Confirmados no Mundo</p>
                    </div>
                    </div>
                </div> ''' +


                '''<div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 id="card_death" class="card-title">''' + str(df_deaths_world["world"][-1]) + '''</h5>
                        <p class="card-text card_sub_text">Óbitos no Mundo</p>
                    </div>
                    </div>
                </div> ''' +

                '''<div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 id="card_lethality" class="card-title">''' + str(round(100*(float(df_deaths_world["world"][-1])/float(df_cases_world["world"][-1])),2)).replace('.',',') + '''%</h5>
                        <p class="card-text card_sub_text">Letalidade Mundo</p>
                    </div>
                    </div>
                </div>
    </div> '''



    )

    f.write(
        '''
                        <div class="row row-cols-1 row-cols-md-1">
                            <div class="col mb-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Casos</h5>
                                    <p class="card-text">''' + plotly.offline.plot(fig_br_cases_world_cases, include_plotlyjs=False, output_type='div') + '''</p>
                                </div>
                                </div>
                            </div> 
                        </div> 
                        <div class="row row-cols-1 row-cols-md-1">
                            <div class="col mb-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Óbitos</h5>
                                    <p class="card-text">''' + plotly.offline.plot(fig_br_deaths_world_deaths, include_plotlyjs=False, output_type='div') + '''</p>
                                </div>
                                </div>
                            </div> 
                        </div>

                        <div class="row row-cols-1 row-cols-md-1">
                            <div class="col mb-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Letalidade no mundo (%)</h5>
                                    <p class="card-text">''' + plotly.offline.plot(fig_bar_world_lethality, include_plotlyjs=False, output_type='div') + '''</p>
                                </div>
                                </div>
                            </div> 
                        </div>
                        '''
    )

      # end html file
    f.write(
        '''     </div> <!-- end div container -->
            </body>
        </html>
        '''    
    )