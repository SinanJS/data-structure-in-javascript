/*
 * 线性表的JavaScript实现
 */
"use strict";

var List = function () {
    this._length = 0;
    this.length = 0;
    //保证_length属性不会被for-in语句遍历出来
    Object.defineProperty(this, "length", {
        enumerable: false,
        get: function () {
            return this._length
        },
        set: function (val) {
            this.length = this._length;
        }
    });
    Object.defineProperty(this, "_length", {
        enumerable: false
    });
    if (arguments.length == 0) {
        this._length = 0;
    } else if (arguments.length === 1 && typeof arguments[0] === "number") {
        this._length = arguments[0];
        for (var i = 0; i < arguments[0]; i++) {
            this[i] = undefined;
        }
    } else {
        this._length = arguments.length;
        for (var i = 0; i < arguments.length; i++) {
            this[i] = arguments[i];
        }
    }
};
List.prototype = {
    //初始化操作，建立一个空的线性表L
    initList: function () {
        /*在构造函数做这个工作*/
    },
    //若线性表为空的，返回true,不空返回false
    isListEmpty: function () {
        var list = this;
        if (list._length === 0) {
            return true;
        } else {
            var isEmpty = true; //一开始认为是空的
            for (var item in list) {
                if (!!list[item]) {
                    isEmpty = false;
                }
            }
            return isEmpty;
        }
    },
    //清空线性表
    clearList: function () {
        var list = this;
        for (var i = 0; i < list._length; i++) {
            delete list[i];
        }
        list._length = 0;
    },
    //将线性表L中的第i个位置元素值返回
    getElem: function (i) {
        var list = this;
        if (typeof i === "number" && i < this._length) {
            return list[i];
        } else {
            console.log("Error--->超出范围，或，第二个参数必须为整数")
        }
    },
    //在线性表查找与给定值e相同的元素，若查找成功，返回该元素在表中的序号表示成功，否则，返回"false"表示失败
    locateElem: function (e) {
        var list = this;
        var num = "false";
        for (var i = 0; i < list.length; i++) {
            if (list[i] === e) {
                num = i;
                break;
            }
        }
        return num;
    },
    //在线性表中第i个位置插入新元素e
    insert: function (i, e) {
        var list = this;
        for (var n = list._length; n >= i; n--) {
            if (n > i) {
                list[n] = list[n - 1];

            } else {
                list[n] = e;
            }
        }
        this._length++;
    },
    //在线性表的尾部插入新元素e
    push: function (e) {
        var list = this;
        list[list._length] = e;
        list._length++;
    },
    //删除线性表中的第i个位置的元素，并返回其值
    delete: function (i) {
        if (!!i && i < this._length - 1 && i > 0) {
            var e = this[i];
            if (i === this._length - 1) {
                delete this[i];
            } else {
                for (var n = i; n < this._length - 1; n++) {
                    this[n] = this[n + 1];
                }
            }
            delete this[this._length - 1];
            this._length--;
            return this;
        } else {
            console.log("参数错误");
            return "ERROR";
        }
    }
};

var l = new List("aaa", "bbb", "ccc", 'ddd');
var lb = new List("aa", "bbb", "eee", "ccc");
//测试：A∪B的操作，实际上就是把所有在B中但不在A中的元素插入到A中
function unionList(listA, listB) {
    for (var i = 0; i < listB.length; i++) {
        if (listA.locateElem(listB[i]) === "false") {
            listA.insert(i, listB[i]);
        }
    }
    return listA;
}
console.log("A并B", unionList(l, lb));
