import Router from "koa-router";

const router = new Router();

router.post("/login", async (ctx) => {
  ctx.body = {
    token: "token",
  };
});

export default router;
