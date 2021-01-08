'use strict';

const Controller = require('egg').Controller;
// const { getOriginSource } = require('../utils/sourcemap');
// const fs = require('fs');
// const path = require('path');

class MonitorController extends Controller {
  async index() {
    const { ctx } = this;
    const { info } = ctx.query;
    const json = JSON.parse(info);

    // 记入错误日志
    this.ctx.getLogger('frontendLogger').error(json);
    ctx.body = '';
  }
}

module.exports = MonitorController;
