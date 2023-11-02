import jwt from "jsonwebtoken";
import config from "./../config/index";
import type { Context, Next } from "koa";

const RequestMiddleware = async (ctx: Context, next: Next) => {
  ctx.set("Content-Type", "application/json");
  if (ctx.request.header.authorization === undefined) {
    ctx.status = 401;
    ctx.body = {
      code: 401,
      message: "Unauthorized",
    };
  } else {
    const token = ctx.request.header.authorization.split(" ")[1];
    if (token === undefined) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        message: "Unauthorized",
      };
    } else {
      try {
        const decoded = jwt.verify(token, config.jwt.secret);
        ctx.state.user = decoded;
        next();
      } catch (err) {
        ctx.status = 401;
        ctx.body = {
          code: 401,
          message: "Unauthorized",
        };
      }
    }
    next();
  }
};

export default RequestMiddleware;
