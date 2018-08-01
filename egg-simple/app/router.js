'use strict';

const { EggShell } = require('egg-shell-decorators');

module.exports = app => {
  EggShell(app, {
    prefix: '/',
    quickStart: true,
    swaggerOpt: {
      open: true,
      title: '示例',
      version: '1.0.0',
      host: '127.0.0.1',
      port: 7001,
      schemes: [ 'http' ],
      paths: {
        outPath: '../api-docs/public/json/main.json',
        definitionPath: './definitions',
        swaggerPath: './swagger',
      }
    },
  });
};
