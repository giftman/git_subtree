'use strict';
require('setup-qcloud-sdk');
const LoginService = require('qcloud-weapp-server-sdk').LoginService;

module.exports = app => {
  class WeappController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }

    * login() {
      console.log('login');
      const { ctx } = this;
      const data = yield LoginService.create(ctx.request, ctx.response).login();
      this.ctx.body = data;
    }

    * user() {
      this.ctx.body = 'hi.user';
      const { ctx } = this;
      const data = yield LoginService.create(ctx.request, ctx.response).check();
      this.ctx.body = data;
    }

    * location() {
      this.ctx.body = 'hi.location';
    }
  }
  return WeappController;
};
