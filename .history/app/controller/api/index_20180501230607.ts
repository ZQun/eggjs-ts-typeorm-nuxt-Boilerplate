import { Controller } from "egg";

export default class ApiController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.success("test");
  }
}
