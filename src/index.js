// Hello World Example of Python running via Pyodide on Cloudflare Workers

import { getPyodide } from './pyodide-worker';

export default {
  async fetch(request, env, ctx) {
    let uri = new URL(request.url);
    switch (uri.pathname) {
      case "/":
        // A simple example of how to run code directly. In this case using
        // Pillow to render an image and return it from the worker.
        const pyodide = await getPyodide();

        pyodide.runPython(`
from PIL import Image, ImageFont, ImageDraw
img = Image.new(mode="RGB", size=(200, 50), color=(231, 136, 59))
# get a font
fnt = ImageFont.load_default();
# get a drawing context
d = ImageDraw.Draw(img)

# draw multiline text
d.multiline_text((10, 10), "Hello World", font=fnt, fill=(0, 0, 0))
img = img.resize((400, 100))
img.save("/result.png")
        `);

        let file = pyodide.FS.readFile("/result.png", { encoding: "binary" });

        return new Response(file, {
          headers: {
            'Content-Type': 'image/png'
          }
        });
      default:
        return new Response("404", {"status": 404});
    }

  },
};
