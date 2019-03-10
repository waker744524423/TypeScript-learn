/*
    3. TypeScript中的函数
        3.1、函数的定义
        3.2、可选参数
        3.3、默认参数
        3.4、剩余参数
        3.5、函数重载
        3.6、箭头函数 es6
*/

// 3.1、函数的定义

/*
    //es5
    // 函数声明
    function run(){
        return 'run';
    }
    // 函数表达式
    var run1=function(){
        return 'run';
    }

*/

/*
    // ts中
    function run():string{
        return 'sdf';
    }

    var run=function():string{
        return 'sdf';
    }

    // ts中定义方法传参
    function getInfo(name:string,age:number):string{
        return `${name}${age}`;
    }

    var run=function(name:string,age:number):string{
        return `${name}${age}`;
    }
*/

// 3.2、可选参数

// es5里方法的实际参数和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
/*
    function getInfo(name: string, age?: number): string {
        if (age) {
            return '正确';
        } else {
            return '错误';
        }
    }
    getInfo('wang');//第二个参数可传可不传的情况就可以在参数后面加个？

    注意：可选参数必须配置到参数的最后面
*/

// 3.3、默认参数

/*
    // es5中没有默认参数，es6和ts可以设置
    function getInfo(name: string, age: number = 20): string {
        if (age) {
            return `${name}${age}`;
        } else {
            return `${name}${age}`;
        }
    }
    getInfo('wang');//wang 20

    注意：默认参数是可以覆盖更改的
*/


// 3.4、剩余参数
/*
    // 传统写法
    function sum(a: number, b: number, c: number, d: number) {
        return a + b + c + d;
    }
    console.log(sum(1, 2, 3, 4));//总和
 */

/*
    // ts：三点运算符，接受新参数过来的值
    function sum(...result: number[]) {
        var sum = 0;
        for (var i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
    }
    console.log(sum(1, 2, 3, 4，5，6，7));//总和

    function sum(a:number,...result: number[]) {
        var sum = a;
        for (var i = 0; i < result.length; i++) {
            sum += result[i];
        }
        return sum;
    }
    console.log(sum(1, 2, 3, 4，5，6，7));//总和

    注意：扩展运算符（三点运算符）会将剩余的参数归入数组中
*/

// 3.5、函数重载
/* 
    // java中重载定义：重载是指两个或两个两个以上同名函数，他们的参数不一样，这样就会出现函数的重载
    // ts中的重载定义：通过为同一个函数提供多个函数类型定义来时下多重功能的目的
    // ts为了兼容es5以及es6重载的写法和java中有区别

    // es5中出现同名方法下面的方法回覆盖上面的方法

    // ts重载
    function getInfo(name: string): string;
    function getInfo(age: number): number;
    function getInfo(str: any): any {
        if (typeof str === 'string') {
            return 'name';
        } else if (typeof str === 'number') {
            return 'age';
        } else {
            return 'str';
        }
    };
    console.log(getInfo('wangkeran'));//name
 */

// 3.6、箭头函数 es6
/* 
    // this的指向指向上下文
    setTimeout(() => {
        
    }, 1000); 
*/