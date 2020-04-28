const { Controller } = require('egg');
const { Get, Post, IgnoreJwtAll, TagsAll } = require('egg-shell-decorators');

@TagsAll('用户')
@IgnoreJwtAll
class UserController extends Controller {

  @Get('/:id')
  getUser({ params: { id } }) {
    return `getUser:${id}`;
  }

  @Post('/')
  createUser({ body: { name, phone, age } }) {
    return { name, phone, age };
  }

}

module.exports = UserController;
