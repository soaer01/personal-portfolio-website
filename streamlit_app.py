import os
import subprocess
import streamlit as st
import streamlit.components.v1 as components

# Set page configuration
st.set_page_config(
    page_title="Afzal Saeed | Data Science & AI Engineering Portfolio",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS to eliminate Streamlit padding/margins and set full frame height
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
            display: block !important;
            border: none !important;
            width: 100% !important;
        }
    </style>
""", unsafe_allow_html=True)

BUNDLE_FILE = os.path.join(os.path.dirname(__file__), "portfolio_bundle.html")
DIST_DIR = os.path.join(os.path.dirname(__file__), "dist")

# Generate bundle if missing
if not os.path.exists(BUNDLE_FILE):
    try:
        if not os.path.exists(DIST_DIR):
            subprocess.run(["npm", "run", "build"], check=False)
        from build_streamlit import bundle_site
        bundle_site()
    except Exception as e:
        st.error(f"Error bundling site: {e}")

# Render component using declare_component or html fallback
if os.path.exists(BUNDLE_FILE):
    with open(BUNDLE_FILE, "r", encoding="utf-8") as f:
        html_code = f.read()
    components.html(html_code, height=2600, scrolling=True)
elif os.path.exists(DIST_DIR):
    portfolio_comp = components.declare_component("portfolio_app", path=DIST_DIR)
    portfolio_comp(key="portfolio_view")
else:
    st.error("Portfolio files not found.")
