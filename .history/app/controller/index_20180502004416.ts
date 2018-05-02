import { Controller } from "egg";

export default class IndexController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.success("test");
  }
}
