
/**
 * 项目的配置文件，包括
 * 1. api 地址
 * 2. 版本
 * ...
 */

'use strict';


const isDebugging = __DEV__ && !!window.navigator.userAgent;

// 公共部分的配置
const common = {
  version: 1
};

// 开发环境的配置
const development = {
  serverURL: 'http://localhost:3002',
};

// 生成环境的配置
const production = {
  serverURL: 'http://localhost:3002',
}

const merge = isDebugging ? development : production;

// 合并config
const config = {
  ...common,
  ...merge
};

export default config;