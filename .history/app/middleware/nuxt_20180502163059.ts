module.exports = (options, app) => {
  console.debug(options);
  let flag = false;
  let routerArr = [];
  return async (ctx, next) => {
    if (!flag) {
      routerArr = app.router.stack.map(el => el.path);
      flag = true;
    }
    if (routerArr.some(el => el === ctx.path)) {
      return await next();
    }
    await next;
    return app.nuxt.render(ctx);
  };
};
