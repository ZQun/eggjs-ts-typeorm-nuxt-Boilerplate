import { Application } from "egg";
export default (app: Application) => {
  const { controller, router } = app;
  let deepCount = 0;
  const foreachController = function(controller: any, parentKey?: string) {
    if (Object.keys(controller).length) {
      for (let key in controller) {
        if (!parentKey) {
          router.all(`/${key}`, `${key}.index`);
          router.all(`/${key}/index`, `${key}.index`);
          deepCount = 0;
        }
        console.log(key, deepCount);
        if (typeof controller[key] === "object") {
          deepCount++;
          foreachController(controller[key], key); //递归遍历
        }
      }
    }
  };
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
