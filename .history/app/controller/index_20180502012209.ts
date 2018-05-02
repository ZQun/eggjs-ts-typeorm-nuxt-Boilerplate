import { Controller } from "egg";
import { bp } from "egg-blueprint";

export default class IndexController extends Controller {
  @bp.get("/")
  async Get() {
    this.ctx.body = "hello,egg-blueprint";
  }
  @bp.post("/")
  async Post() {
    this.ctx.body = "hello,post,egg-blueprint";
  }
  @bp.put("/")
  async Put() {
    this.ctx.body = "hello,egg-blueprint";
  }
  @bp.del("/")
  async Del() {
    this.ctx.body = "hello,egg-blueprint";
  }
}
