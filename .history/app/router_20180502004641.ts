import { Application } from "egg";
export default (app: Application) => {
  const { router } = app;
  router.all(`/`, `index.index`);
  router.all(`/api`, `api.index.index`);
};
