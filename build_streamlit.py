import os
import re
import base64

def get_mime_type(file_path):
    ext = os.path.splitext(file_path)[1].lower()
    if ext == '.png':
        return 'image/png'
    elif ext in ['.jpg', '.jpeg']:
        return 'image/jpeg'
    elif ext == '.svg':
        return 'image/svg+xml'
    elif ext == '.pdf':
        return 'application/pdf'
    return 'application/octet-stream'

def file_to_base64_data_uri(file_path):
    mime_type = get_mime_type(file_path)
    with open(file_path, 'rb') as f:
        data = f.read()
    b64_str = base64.b64encode(data).decode('utf-8')
    return f"data:{mime_type};base64,{b64_str}"

def bundle_site(dist_dir='dist', output_file='portfolio_bundle.html'):
    index_html_path = os.path.join(dist_dir, 'index.html')
    if not os.path.exists(index_html_path):
        raise FileNotFoundError(f"{index_html_path} does not exist. Run 'npm run build' first.")

    with open(index_html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Find asset files in dist/assets
    assets_dir = os.path.join(dist_dir, 'assets')
    asset_files = {}
    if os.path.exists(assets_dir):
        for fname in os.listdir(assets_dir):
            fpath = os.path.join(assets_dir, fname)
            if os.path.isfile(fpath):
                asset_files[fname] = fpath

    # Process CSS files referenced in HTML
    def replace_css_link(match):
        css_filename = match.group(1).split('/')[-1]
        if css_filename in asset_files:
            with open(asset_files[css_filename], 'r', encoding='utf-8') as cf:
                css_content = cf.read()
            return f"<style>\n{css_content}\n</style>"
        return match.group(0)

    html = re.sub(r'<link[^>]+href=["\']([^"\']+\.css)["\'][^>]*>', replace_css_link, html)

    # Process JS files referenced in HTML
    def replace_js_script(match):
        js_filename = match.group(1).split('/')[-1]
        if js_filename in asset_files:
            with open(asset_files[js_filename], 'r', encoding='utf-8') as jf:
                js_content = jf.read()
            return f"<script>\n{js_content}\n</script>"
        return match.group(0)

    html = re.sub(r'<script[^>]+src=["\']([^"\']+\.js)["\'][^>]*>\s*</script>', replace_js_script, html)

    # Inline image assets in JS and HTML (e.g. /assets/profile-DSLJrSBk.jpg)
    for fname, fpath in asset_files.items():
        if fname.lower().endswith(('.png', '.jpg', '.jpeg', '.svg')):
            b64_uri = file_to_base64_data_uri(fpath)
            # Match quotes or backticks followed by optional dot/slash/assets/filename and closing quote/backtick
            pattern = re.compile(r'[`"\'](?:[^\`\'"\n]*/)?' + re.escape(fname) + r'[`"\']')
            new_html, count = pattern.subn(f'`{b64_uri}`', html)
            print(f"Replaced {count} instances of {fname}")
            html = new_html

    # Inline favicon.svg if present
    fav_path = os.path.join(dist_dir, 'favicon.svg')
    if os.path.exists(fav_path):
        fav_b64 = file_to_base64_data_uri(fav_path)
        html = re.sub(r'href=["\'](?:/|\./)?favicon\.svg["\']', f'href="{fav_b64}"', html)

    # Inline CV/Resume PDF if present in public or src/assets
    cv_paths = [
        os.path.join('src', 'assets', 'Mian_Afzal_Saeed_CV.pdf'),
        os.path.join('public', 'Mian_Afzal_Saeed_CV.pdf')
    ]
    for cv_p in cv_paths:
        if os.path.exists(cv_p):
            cv_b64 = file_to_base64_data_uri(cv_p)
            html = re.sub(r'href=["\'][^"\']*Mian_Afzal_Saeed_CV\.pdf["\']', f'href="{cv_b64}" download="Mian_Afzal_Saeed_CV.pdf"', html)
            print(f"Inlined CV PDF from {cv_p}")
            break

    # Write output file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Successfully generated {output_file} ({len(html)} bytes)")

if __name__ == '__main__':
    bundle_site()
