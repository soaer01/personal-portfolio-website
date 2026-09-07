import os
import streamlit as st
import streamlit.components.v1 as components

# Set page configuration
st.set_page_config(
    page_title="Afzal Saeed | Data Science & AI Engineering Portfolio",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS to eliminate Streamlit margins/paddings and scrollbars on container
st.markdown("""
    <style>
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
        .stAppHeader {display: none;}
        .block-container {
            padding-top: 0rem !important;
            padding-bottom: 0rem !important;
            padding-left: 0rem !important;
            padding-right: 0rem !important;
            max-width: 100% !important;
        }
        div[data-testid="stVerticalBlock"] {
            gap: 0rem !important;
        }
        iframe {
            display: block;
            border: none;
            width: 100% !important;
        }
    </style>
""", unsafe_allow_html=True)

# Path to pre-built bundled HTML
BUNDLE_PATH = os.path.join(os.path.dirname(__file__), "portfolio_bundle.html")

# Auto-build bundle if missing
if not os.path.exists(BUNDLE_PATH):
    try:
        from build_streamlit import bundle_site
        bundle_site()
    except Exception as e:
        st.error(f"Error building portfolio bundle: {e}")

if os.path.exists(BUNDLE_PATH):
    with open(BUNDLE_PATH, "r", encoding="utf-8") as f:
        html_code = f.read()
    
    # Render component with full interactive capabilities
    components.html(html_code, height=2200, scrolling=True)
else:
    st.error("Portfolio HTML bundle could not be found.")
