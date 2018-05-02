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
    await next();
    const { res, req, body } = ctx;
    res.data = body;
    ctx.status = 200;
    return app.nuxt.render(req, res, promise => promise);
  };
};
