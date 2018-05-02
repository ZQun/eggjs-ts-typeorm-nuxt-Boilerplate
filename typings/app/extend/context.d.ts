// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import ExtendObject from '../../../app/extend/context';
declare module 'egg' {
  interface Context {
    success: typeof ExtendObject.success;
    fail: typeof ExtendObject.fail;
  }
}