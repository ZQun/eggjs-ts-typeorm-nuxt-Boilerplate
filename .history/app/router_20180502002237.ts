import { Application } from "egg";

const saveController = [];
const foreachController = function(controller: any) {
  if (Object.keys(controller).length) {
    for (let key in controller) {
      saveController.push({
        path: ""
      });
      foreachController(controller[key]);
    }
  }
};
export default (app: Application) => {
  const { controller, router } = app;
  debugger;
  foreachController(controller);
  Object.keys(controller).forEach(key => {
    Object.keys(controller[key]).forEach(key2 => {
      if (key2 === "index") {
        router.all(`/${key}`, `${key}.index`);
      }
      router.all(`/${key}/${key2}`, `${key}.${key2}`);
    });
  });
};
