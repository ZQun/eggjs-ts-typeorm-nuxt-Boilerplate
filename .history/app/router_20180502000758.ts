import { Application } from "egg";
const foreachController = function(controller: any) {
  Object.keys(controller).forEach(key => {
    Object.keys(controller[key]).forEach(key2 => {
      if (key2 === "index") {
        router.all(`/${key}`, `${key}.index`);
      }
      router.all(`/${key}/${key2}`, `${key}.${key2}`);
    });
  });
};
export default (app: Application) => {
  const { controller, router } = app;
  debugger;
  Object.keys(controller).forEach(key => {
    Object.keys(controller[key]).forEach(key2 => {
      if (key2 === "index") {
        router.all(`/${key}`, `${key}.index`);
      }
      router.all(`/${key}/${key2}`, `${key}.${key2}`);
    });
  });
};
