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

    # Inline CSS files referenced in HTML
    def replace_css_link(match):
        css_filename = match.group(1).split('/')[-1]
        if css_filename in asset_files:
            with open(asset_files[css_filename], 'r', encoding='utf-8') as cf:
                css_content = cf.read()
            return f"<style>\n{css_content}\n</style>"
        return match.group(0)

    html = re.sub(r'<link[^>]+href=["\']([^"\']+\.css)["\'][^>]*>', replace_css_link, html)

    # Inline JS files referenced in HTML
    def replace_js_script(match):
        js_filename = match.group(1).split('/')[-1]
        if js_filename in asset_files:
            with open(asset_files[js_filename], 'r', encoding='utf-8') as jf:
                js_content = jf.read()
            return f"<script>\n{js_content}\n</script>"
        return match.group(0)

    html = re.sub(r'<script[^>]+src=["\']([^"\']+\.js)["\'][^>]*>\s*</script>', replace_js_script, html)

    # Inline favicon SVG if present
    fav_path = os.path.join(dist_dir, 'favicon.svg')
    if os.path.exists(fav_path):
        fav_b64 = file_to_base64_data_uri(fav_path)
        html = re.sub(r'href=["\'](?:/|\./)?favicon\.svg["\']', f'href="{fav_b64}"', html)

    # Write output file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Successfully generated {output_file} ({len(html)} bytes)")

if __name__ == '__main__':
    bundle_site()
