// // rollup.config.js
// // import vue from 'rollup-plugin-vue'
// export default {
//   entry: 'src/vue-particles/index.js',
//   format: 'umd', // 'cjs'
//   dest: 'vue-particles/bundle.js', // equivalent to --output
//   moduleName: 'VueParticles',
//   external: [ 'particles.js' ],
//   plugins: [
//     vue({ /* configuration options. */ })
//   ]
// }
//
// // npm install rollup-plugin-buble rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-uglify uglify-js-harmony

/* eslint-disable */
const fs = require('fs');
const path = require('path');
const vue = require('rollup-plugin-vue');
const buble = require('rollup-plugin-buble');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const {minify} = require('uglify-js-harmony');
// const CleanCSS = require('clean-css');
const {camelCase} = require('lodash');
const name = 'vue-particles';
const dist = "./vue-particles"

module.exports = {
  entry: 'src/vue-particles/index.js',
  external: 'particles.js',
  moduleName: 'VueParticles',
  plugins: [
    vue({}),
    buble(),
    resolve({external: ['vue']}),
    commonjs(),
    uglify({}, minify)
  ],
  globals: {
    particles: 'particlesJS'
  },
  targets: [
    {
      format: 'cjs',
      moduleName: camelCase(name),
      dest: path.resolve(dist, name + '.common.js'),
      sourceMap: true
    },
    {
      format: 'es',
      dest: path.resolve(dist, name + '.esm.js'),
      sourceMap: true
    },
    {
      format: 'umd',
      moduleName: camelCase(name),
      dest: path.resolve(dist, name + '.js'),
      sourceMap: true
    }
  ]
};
