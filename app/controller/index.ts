import { Controller } from "egg";
import { bp } from "egg-blueprint";

export default class IndexController extends Controller {
  @bp.get("/hello")
  async Get() {
    this.ctx.body = "hello,egg-blueprint";
  }
  @bp.post("/hello")
  async Post() {
    this.ctx.body = "hello,post,egg-blueprint";
  }
  @bp.put("/hello")
  async Put() {
    this.ctx.body = "hello,egg-blueprint";
  }
  @bp.del("/hello")
  async Del() {
    this.ctx.body = "hello,egg-blueprint";
  }
}
