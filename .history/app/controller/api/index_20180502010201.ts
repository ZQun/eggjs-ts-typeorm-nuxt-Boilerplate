import { Controller } from "egg";
import { bp } from "egg-blueprint";

@bp.restfulClass("blueprint")
export default class IndexController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.success("test");
  }
}
