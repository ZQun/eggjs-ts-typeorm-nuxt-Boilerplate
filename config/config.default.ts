"use strict";

import { EggAppConfig, PowerPartial } from "egg";
import * as fs from "fs";
import * as path from "path";

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig>;
interface Ipretty {
  i18n: boolean;
  defaultErrno: number;
  errnoField: string;
  errmsgField: string;
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  config.keys = appInfo.name + "123456";

  config.siteFile = {
    "/favicon.ico": fs.readFileSync(
      path.join(appInfo.baseDir, "app/public/favicon.png")
    )
  };
  const pretty: Ipretty = {
    i18n: false,
    defaultErrno: 1000,
    errnoField: 'errno',
    errmsgField: 'errmsg'
  };

  config['pretty'] = pretty;
  config['middleware'] = ['nuxt'];
  return config;
};
