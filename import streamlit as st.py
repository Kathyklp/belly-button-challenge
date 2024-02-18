import streamlit as st
import plotly.express as px
import pandas as pandas
import warnings 
warnings.filterwarnings('ignore')

st.set_page_config(page_title="Belly Button Challenge", page_icon=":bar_chart:",layout="wide")

st.title(" :baar_cart:  Belly Button Data")
st.markdown('<style>div.block-container{padding-top:1rem;}</style>',unsafe_allow_html=True)

fl = st.file_uploader(":file_folder: Upload a file",type=(["csv","txt","xlsx","xls"]))
if f1 is not None:
    filename = f1.name
    st.write(filename)
    df = pd.read_csv(filename)
else   
    os.chdir(r"C:\Users\AEPAC\Desktop\Streamlit") 
    df = pd.read_csv() 
    