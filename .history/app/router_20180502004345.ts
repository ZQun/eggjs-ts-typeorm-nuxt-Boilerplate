import { Application } from "egg";
export default (app: Application) => {
  const { controller, router } = app;
  router.all(`/${key}`, `${key}.index`);
};
