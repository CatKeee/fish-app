import { app } from "./../../app";

app.on("error", (err, ctx) => {
  console.error("Server Error:", err);
  ctx.status = 500;
  ctx.body = { error: err.message };
});
