import * as fs from "fs";
import path from "path";
import type Koa from "koa";

const registerRoutes = (app: Koa) => {
  try {
    const dir = path.join(__dirname);
    const files = fs.readdirSync(dir);

    files.forEach(async (file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        const childFiles = fs.readdirSync(filePath);
        childFiles.forEach(async (child) => {
          const childPath = path.join(filePath, child);
          const childStats = fs.statSync(childPath);
          if (childStats.isFile() && child.endsWith(".ts")) {
            const routerModule = await import(childPath);
            if (typeof routerModule.default.routes === "function") {
              app.use(routerModule.default.routes());
            }
          }
        });
      }
    });
  } catch (err) {
    throw new Error(err as string);
  }
};

export default registerRoutes;
