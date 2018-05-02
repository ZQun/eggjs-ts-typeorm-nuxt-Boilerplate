module.exports = (options, app) => {
  console.log(options);
  let flag = false;
  let routerArr = [];
  return async (ctx, next) => {
    if (!flag) {
      routerArr = app.router.stack.map(el => el.path);
      flag = true;
    }
    debugger;
    if (routerArr.some(el => el === ctx.path)) {
      return await next();
    }
    await next;
    const { res, req, body } = ctx;
    res.data = body;
    return new Promise((resolve, reject) => {
      app.nuxt.render(req, res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  };
};
