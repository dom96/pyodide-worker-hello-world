Clone this repo to create a Python Worker using Pyodide. Instructions below explain how to do this
and deploy this worker.

First you'll need [Wrangler](https://github.com/cloudflare/wrangler2) and
[npm](https://www.npmjs.com/get-npm). Be sure these are installed before moving forward.

Then perform these steps:

- Clone repository (`git clone https://github.com/cloudflare/python-worker-hello-world`)
- Run `npm install`
- Run `wrangler dev` to run a local copy of your Worker
- Update `wrangler.toml` with your project `name`, `account_id`, and `route` as required
- Run `wrangler publish` once you are ready to upload your Worker to production

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/wrangler/).
