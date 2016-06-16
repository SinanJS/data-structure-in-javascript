/*
 * 线性表的JavaScript实现
 */
"use strict";
var List = function () {

};
List.prototype = {
    //初始化操作，建立一个空的线性表L
    initList: function () {
        var list = {};
        return list;
    },
    //若线性表为空的，返回false,否则返回true
    isListEmpty: function (list) {
        var hasProp = false;
        for (var item in list) {
            hasProp = true;
            break;
        }
        if (hasProp) {
            return true; //不空
        } else {
            return false; //空的   
        }
    },
    //清空线性表
    clearList: function (list) {
        list = {};
    },
    //将线性表L中的第i个位置元素值返回给e
    getElem: function () {

    }

}
