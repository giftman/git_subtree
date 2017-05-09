'use strict';

module.exports = appInfo => {
  const config = {
    // 加载 errorHandler 中间件
    middleware: [ 'errorHandler' ],
    // 只对 /api 前缀的 url 路径生效
    errorHandler: {
      match: '/api',
    },
  };

  // should change to your own
  config.keys = appInfo.name + '_1494230402695_6475';
  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};

