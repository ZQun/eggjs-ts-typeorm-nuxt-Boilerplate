import { isArray, isNumber, isObject } from "util";

module.exports = {
  success(data: any, message: string) {
    const { response: res, app } = this;
    const config = app.config.pretty;
    res.status = 200;
    res.type = "application/json";

    message = message || "success";

    return (res.body = {
      [config.errnoField]: 0,
      [config.errmsgField]: message,
      data
    });
  },
  fail(errno?: any, errmsg?: string, data?: any) {
    const { response: res, app } = this;
    const config = app.config.pretty;
    let obj;
    if (isObject(errno)) {
      obj = errno;
    } else {
      if (/^[A-Z_]+$/.test(errno)) {
        const messages = {};
        const msg = messages[errno];
        if (isArray(msg)) {
          [errno, errmsg] = msg;
        }
      }
      if (!isNumber(errno)) {
        [data, errmsg, errno] = [errmsg, errno, config.defaultErrno || 1000];
      }
      obj = {
        [config.errnoField]: errno,
        [config.errmsgField]: errmsg || ""
      };
      if (data) {
        obj.data = data;
      }
    }
    res.status = 500;
    res.type = "application/json";
    return (res.body = obj);
  }
};
