import config from "./../config/index";
import type { Context, Next } from "koa";

interface Response {
  code: number;
  msg: string;
  data?: any;
}

const ResponseMiddleware = async (ctx: Context, next: Next) => {
  ctx.set("Content-Type", "application/json");
  const response: Response = {
    code: ctx.status,
    msg: ctx.message,
  };
  if (ctx.body) {
    response.data = ctx.body;
  }
  ctx.body = response;
  next()
};

export default ResponseMiddleware;
