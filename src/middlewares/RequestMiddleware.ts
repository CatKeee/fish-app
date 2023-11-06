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
    return next();
    // const token = ctx.request.header.authorization;
    // jwt.verify(token, config.jwt.secret, (err, decoded) => {
    //   if (err) {
    //     ctx.status = 401;
    //     ctx.body = {
    //       code: 401,
    //       message: "Unauthorized",
    //     };
    //   } else {
    //     ctx.state.user = decoded;
    //     next();
    //   }
    // });
  }
};

export default RequestMiddleware;
