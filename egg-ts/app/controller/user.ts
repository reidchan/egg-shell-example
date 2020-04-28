import { Controller } from 'egg';
import { Get, Post, IgnoreJwtAll, TagsAll } from 'egg-shell-decorators';

@TagsAll('用户')
@IgnoreJwtAll
export default class UserController extends Controller {

  @Get('/:id')
  public getUser({ params: { id } }) {
    return `getUser:${id}`;
  }

  @Post('/')
  public createUser({ body: { name, phone, age } }) {
    return { name, phone, age };
  }

}