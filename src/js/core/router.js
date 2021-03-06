//router.js路由类，用于控制页面跳转，上下文状态传递
define(function (require, exports) {
    'use strict';

    var $ = require('core/zepto');

    var pageStack = [];

    function getPage (pageId) {
        return $(pageId);
    }

    function loadPage (pageId) {
        var page = require('page/' + pageId);
        $('body').append(page.view);
    }

    exports.showPage = function (pageId, option) {
        var page = getPage(pageId) || loadPage(pageId);
    };
    //跳转到指定页
    exports.redirect = function (url) {
        window.location = url;
    };
    /**
     * 获取页面上下文信息，即预定义参数。两种方式：
     * 1、从url或hash中获取
     * 2、通过LocalStorage获取
     * @url 传入window.location
     */
    exports.getConfig = function (url) {
        var config = {};
        var vars = url.search.substring(1).split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair.length == 2) {
                var key = decodeURIComponent(pair[0]);
                var value = decodeURIComponent(pair[1]);
                config[key] = value;
            }
        }
        return config;
    };
    //重写哈希改变事件，用于实现hashbang
    window.onhashchange = function () {};
}