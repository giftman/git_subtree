'use strict';
module.exports = app => {
  class WeappController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }

    * login() {
      console.log('login');
      const { ctx, app } = this;
      const loginService = app.weapp.LoginService.create(ctx.request, ctx.response);
      yield loginService.login()
        .then(data => {
          data.userInfo = Object.assign({
            city: '广州',
          }, data.userInfo);
          console.log(data);
          ctx.body = data;
        });
    }

    * user() {
      const { ctx, app } = this;
      const loginService = app.weapp.LoginService.create(ctx.request, ctx.response);
      yield loginService.check()
        .then(data => {
          ctx.body = {
            code: 0,
            message: 'ok',
            data: {
              userInfo: data.userInfo,
            },
          };
        });
    }

    * location() {
      // this.ctx.body = 'hi.location';
      const { ctx } = this;
      const city = yield ctx.service.location.create(ctx.query.p);
      ctx.body = { code: 0, message: 'ok', location: city };
    }
  }
  return WeappController;
};
