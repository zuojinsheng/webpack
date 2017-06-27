/**
 * Created by yanfa on 2016/11/16.
 */

var obj = new Object();               //  创建一个空对象
obj.name = '小明';                    //  属性
obj.showName = function(){          //  方法
    console.log(obj.name)
};
obj.showName();

var obj2 = new Object();               //  创建一个空对象
obj2.name = '小强';                    //  属性
obj2.showName = function(){          //  方法
    console.log(obj2.name)
};
obj2.showName();
