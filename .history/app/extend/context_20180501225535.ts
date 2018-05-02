import { isArray, isNumber, isObject } from "util";

module.exports = {
  success(data: any, message: string): any {
    const { app } = this;
    const config = app.config.pretty;
    this.status = 200;
    this.type = "application/json";
    message = message || "success";

    return (this.body = {
      [config.errnoField]: 0,
      [config.errmsgField]: message,
      data
    });
  },
  fail(errno?: any, errmsg?: string, data?: any): any {
    const { app } = this;
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
    this.status = 500;
    this.type = "application/json";
    return (this.body = obj);
  }
};
