import config from "./../config/index";
import type { Context, Next } from "koa";

const ResponseMiddleware = async (ctx: Context, next: Next) => {
  await next();
  ctx.set("Content-Type", "application/json");
  ctx.body = {
    code: ctx.status,
    msg: 123,
  };
};

export default ResponseMiddleware;
