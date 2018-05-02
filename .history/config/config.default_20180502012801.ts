import { EggAppConfig, PowerPartial } from "egg";

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface PrettyConfig {
  i18n: boolean;
  defaultErrno: number;
  errnoField: string;
  errmsgField: string;
}
export interface BizConfig {
  sourceUrl: string;
  pretty: PrettyConfig;
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${
    appInfo.name
  }`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1525184413697_5839";

  // add your config here
  config.middleware = ["nuxt"];

  //pretty
  config.pretty = {
    i18n: false,
    defaultErrno: 1000,
    errnoField: "errno",
    errmsgField: "errmsg"
  };
  return config;
};
