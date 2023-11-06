import Router from "koa-router";

const router = new Router();

router.get("/config", async (ctx) => {
  ctx.body = {
    __APP_NAME__: 'fish-app'
  };
});

export default router