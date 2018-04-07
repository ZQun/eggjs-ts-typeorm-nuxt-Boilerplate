import { Controller } from 'egg';
// import { getManager } from 'typeorm';
// import {Test} from '../entity/Test';

export default class ApiController extends Controller {
  public async index() {
    const { ctx } = this;
    // // get a post repository to perform operations with post
    // const postRepository = getManager().getRepository(Test);

    // // create a real post object from post json object sent over http
    // const newPost = postRepository.create({
    //   name: 'test'
    // });

    // // save received post
    // await postRepository.save(newPost);

    // // return saved post back
    // ctx.body = newPost;
    ctx.success(1);
  }
}
