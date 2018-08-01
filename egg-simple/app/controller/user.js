const { Controller } = require('egg');
const { Post, IgnoreJwtAll, TagsAll } = require('egg-shell-decorators');

@TagsAll('用户')
@IgnoreJwtAll
class UserController extends Controller {

  @Post('/')
  listUser({ body: { name, phone, age } }) {
    return { name, phone, age };
  }

}

module.exports = UserController;
