import Koa from "koa";
import Router from "koa-router";
import Static from "koa-static";
import BodyParser from "koa-bodyparser";
import Logger from "koa-logger";
import config from "./src/config";
import RequestMiddleware from "./src/middlewares/RequestMiddleware";
import ResponseMiddleware from "./src/middlewares/ResponseMiddleware";
const { port } = config;

const app = new Koa();
const router = new Router();

app
  .use(RequestMiddleware)
  .use(Logger())
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(Static("./public"))
  .use(ResponseMiddleware);

app.listen(port, () => {
  console.log("🚀 服务启动成功");
});
