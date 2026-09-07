import os
from PIL import Image

def optimize_image(filepath, max_dim=800, quality=82):
    try:
        im = Image.open(filepath)
        im.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
        
        ext = os.path.splitext(filepath)[1].lower()
        if ext in ['.jpg', '.jpeg']:
            im = im.convert('RGB')
            im.save(filepath, 'JPEG', optimize=True, quality=quality)
        elif ext == '.png':
            # Convert to RGB if no transparency to save huge bytes
            if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
                im.save(filepath, 'PNG', optimize=True)
            else:
                im = im.convert('RGB')
                # Save as JPEG for massive compression
                new_jpg = os.path.splitext(filepath)[0] + '.jpg'
                im.save(new_jpg, 'JPEG', optimize=True, quality=quality)
                print(f"Converted {filepath} -> {new_jpg}")
        print(f"Optimized {filepath} -> new size: {os.path.getsize(filepath)} bytes")
    except Exception as e:
        print(f"Error optimizing {filepath}: {e}")

if __name__ == '__main__':
    assets_dir = os.path.join('src', 'assets')
    for root, dirs, files in os.walk(assets_dir):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg')):
                fpath = os.path.join(root, f)
                optimize_image(fpath)
