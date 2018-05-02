import { Application } from "egg";
import { Blueprint } from "egg-blueprint";
export default (app: Application) => {
  const { router } = app;
  router.all(`/`, `index.index`);
};
