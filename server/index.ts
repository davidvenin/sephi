import express, { Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const options = {
  target: "134.209.198.0",
  changeOrigin: true,
  ws: true,
  router: {},
};
const proxy = createProxyMiddleware(options);

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(`http://134.209.198.0/api/`, proxy);

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.info(
        `> Ready on localhost:${port} - env ${process.env.NODE_ENV}`
      );
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  }
})();
