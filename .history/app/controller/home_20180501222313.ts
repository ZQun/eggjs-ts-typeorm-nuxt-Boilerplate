import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log(ctx.method);
    ctx.body = await ctx.service.test.sayHi("egg");
  }
}
