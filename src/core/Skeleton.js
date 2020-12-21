const puppeteer = require('puppeteer');
// const { readFileSync } = require('fs');
// const { resolve } = require('path');
// const { sleep } = require('./utils');

class Skeleton {
  constructor (options) {
    this.options = options;
  }

  /**
   * 初始化
   */
  async initialize () {
    // 打开浏览器
    this.brower = await puppeteer.launch({ headless: false });
  }

  /**
   * 打开新页面
   */
  async newPage () {
    let page = await this.brower.newPage();
    await page.setViewport({
      width: 1440,
      height: 900
    });
    return page;
  }

  /**
   * 生成骨架屏的DOM字符串
   * @param url 启动地址 如：http://localhost:8008
   */
  async genHTML (url) {
    let page = await this.newPage();
    let response = await page.goto(url, { waitUntil: 'networkidle2' });
    // 如果访问不成功 比如断网了啥的
    if (response && !response.ok()) { 
      throw new Error(`${response.status} on ${url}`);
    }
  }
}

module.exports = Skeleton;