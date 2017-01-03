'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      '欢迎使用蓝月亮 ' + chalk.red('generator-bmvue') + ' 脚手架!'
    ));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: '请告诉我模块名称?'
    }];

    // 首字母大写
    var ucfirst = function (str) {
      var newStr = str.toLowerCase();
      newStr = str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
      });
      return newStr;
    };

    return this.prompt(prompts).then(function (props) {
      props.firstUpperCaseModule = ucfirst(props.moduleName);
      props.upperCaseModule = props.moduleName.toUpperCase();
      this.props = props;
    }.bind(this));
  },

  writing: {
    api: function () {
      this.fs.copyTpl(
        this.templatePath('src/api/article.js'),
        this.destinationPath('src/api/' + this.props.moduleName + '.js'),
        this.props);
    },
    actions: function () {
      this.fs.copyTpl(
        this.templatePath('src/vuex/article/actions.js'),
        this.destinationPath('src/vuex/' + this.props.moduleName + '/actions.js'),
        this.props);
    },
    index: function () {
      this.fs.copy(
        this.templatePath('src/vuex/article/index.js'),
        this.destinationPath('src/vuex/' + this.props.moduleName + '/index.js'));
    },
    mutations: function () {
      this.fs.copyTpl(
        this.templatePath('src/vuex/article/mutations.js'),
        this.destinationPath('src/vuex/' + this.props.moduleName + '/mutations.js'),
        this.props);
    },
    types: function () {
      this.fs.copyTpl(
        this.templatePath('src/vuex/article/mutation-type.js'),
        this.destinationPath('src/vuex/' + this.props.moduleName + '/mutation-type.js'),
        this.props);
    },
    state: function () {
      this.fs.copyTpl(
        this.templatePath('src/vuex/article/state.js'),
        this.destinationPath('src/vuex/' + this.props.moduleName + '/state.js'),
        this.props);
    }
  },
  install: function () {
    // this.installDependencies();
  }
});
