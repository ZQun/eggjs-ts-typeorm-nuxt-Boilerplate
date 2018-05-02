import { Controller } from "egg";
import { bp } from "egg-blueprint";

//@bp.restfulClass("blueprint")
export default class IndexController extends Controller {
  @bp.get("/")
  async Get() {
    this.ctx.body = "hello,egg-blueprint";
  }

  async Post() {
    this.ctx.body = "hello,post,egg-blueprint";
  }

  async Put() {
    this.ctx.body = "hello,egg-blueprint";
  }

  async Del() {
    this.ctx.body = "hello,egg-blueprint";
  }
}
