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


df = pd.read_excel("/home/paulinho/Downloads/HIST_PAINEL_COVIDBR_20mai2020.xlsx", sheet_name="Sheet 1")

df_aux = df.copy()
df_aux['data'] = pd.to_datetime(df_aux['data'], dayfirst=True)
df_aux2 = df_aux.groupby(['data','estado']).sum()


rows = df_aux['data'].unique()
columns = df_aux['estado'].unique()
columns = columns[1:]

new_df = pd.DataFrame(0, index=rows, columns=columns)


for i in new_df.index:
    new_df.loc[i] = pd.Series(df_aux2['obitosAcumulado'][i])

new_df.fillna(value=0, inplace=True)
new_df = new_df.astype(int)


def get_rgb_vals():
    r = np.random.randint(1,255)
    g = np.random.randint(1,255)
    b = np.random.randint(1,255)
    return [r,g,b]
colors = []
for i in range(len(new_df.columns)):
    c = get_rgb_vals()
    colors.append("rgb(" + str(c[0]) + ","+ str(c[1]) + ","+ str(c[2]) + ")")

def get_top_10(d):
    
    data = d.sort_values()
    return data.iloc[-10:,]

print("Gerando os frames")

listOfFrames = []
count = 10
for i in new_df.index:
    count += 141
    d = new_df.loc[i]
    pdata = get_top_10(d)
    data = str(i).split(" ")
    listOfFrames.append(go.Frame(data = [go.Bar(x = pdata, y = pdata.index,
                                                marker_color = colors, text = pdata.index,
                                                textposition = "outside",
                                                texttemplate = "%{y}<br>%{x:s}",cliponaxis = False,orientation='h')],
                                 layout = go.Layout(
                                     font = {"size":20},
                                     height = 700,
                                     xaxis = {"showline":False,"tickangle":-90, "visible":False, "range":[0,12000]},
                                     yaxis = {"showline":False, "visible":False},
                                    title = "Óbitos no dia: " + data[0])))
    
fdata = get_top_10(new_df.loc["2020-02-26"])


fig = go.Figure(
data = [go.Bar(x = fdata, y = fdata.index,
               marker_color = colors,text = fdata.index,
              textposition = "outside",
               texttemplate = "%{y}<br>%{x:s}",cliponaxis = False,orientation='h')],
layout=go.Layout(
    title= "Óbitos no dia: " + "2020-02-26",
    font = {"size":20},
    height = 700,
    xaxis = {"showline":False,"tickangle":-90, "visible":False,"range":[0,12000]},
    yaxis = {"showline":False, "visible":False},
    updatemenus=[dict(
        type="buttons",
        buttons=[dict(label="Play",
                      method="animate",
                      args=[None])])]
),
frames=list(listOfFrames)
)


print("Gerando o index")

f = open("index.html", "w")
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

f.write(
            '''<div class="row row-cols-1 row-cols-md-1">
                <div class="col mb-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Óbitos por estado (Bar chart race)</h5>
                        <p class="card-text">''' + plotly.offline.plot(fig, include_plotlyjs=False, output_type='div') + '''</p>
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

f.close()
