import Koa from "koa";
import Static from "koa-static";
import BodyParser from "koa-bodyparser";
import Logger from "koa-logger";
import config from "./src/config";
import RequestMiddleware from "./src/middlewares/RequestMiddleware";
import ResponseMiddleware from "./src/middlewares/ResponseMiddleware";
import registerRoutes from "./src/routes/index";

const { port } = config;
export const app = new Koa();
registerRoutes(app);

app
  .use(Static("./public"))
  .use(BodyParser())
  .use(Logger())
  .use(RequestMiddleware)
  .use(ResponseMiddleware);

app.listen(port, () => {
  console.log("🚀 服务启动成功");
});
