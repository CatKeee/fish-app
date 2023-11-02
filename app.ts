import Koa from "koa";
import Router from "koa-router";
import Static from "koa-static";
import BodyParser from "koa-bodyparser";
import Logger from "koa-logger";

const app = new Koa();
const router = new Router();

app
  .use(Logger())
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(Static("./public"));

app.listen(3000, () => {
  console.log("🚀 服务启动成功");
});
