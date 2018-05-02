//import { createConnection } from "typeorm";
import { Nuxt } from "nuxt";
//import 'reflect-metadata';
import * as config from "./nuxt.config";
// Instantiate nuxt.js
console.log(config);
const nuxt = new Nuxt(config);

module.exports = app => {
  app.beforeStart(() => {
    //createConnection();
    app.nuxt = nuxt;
  });
};
