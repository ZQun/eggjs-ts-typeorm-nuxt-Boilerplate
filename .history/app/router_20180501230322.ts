import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  Object.keys(controller).forEach(key => {
    Object.keys(controller[key]).forEach(key2 => {
      if (key2 === "index") {
        router.all(`/${key}`, controller[key][key2]);
      }
      router.all(`/${key}/${key2}`, controller[key][key2]);
    });
  });
};
