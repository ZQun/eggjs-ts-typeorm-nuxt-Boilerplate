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
    const { res, req, body } = ctx;
    res.data = body;
    return new Promise((resolve, reject) => {
      console.log(app.nuxt.render);
      app.nuxt.render(req, res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  };
};
