/* 
5、TypeScript中的接口

    5.1、属性接口
    5.2、函数类型接口
    5.3、可索引接口
    5.4、类类型接口
    5.5、接口扩展


    接口的作用：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范。
    在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，
    接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，
    它值规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。
    ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、索引和类等；

    定义标准
*/

// 5.1、属性接口  对json的约束

/*     // ts定义方法
    function printLable(): void {
        console.log('printLable');
    }
    printLable(); */

/*     // ts中定义方法传入参数
    function printLable(lable: string): void {
        console.log('printLable');
    }
    printLable('hahah'); */

/*     // ts中自定义方法传入参数，对json进行约束
    function printLable(lable: { lable: string }): void {
        console.log('printLable');
    }
    printLable('hahah');//错误写法
    printLable({ name: 'hahha' });//错误写法
    printLable({ lable: 'hahha' });//正确写法 */

/*     // 我们想对批量方法进行约束

    // 接口：行为和动作的规范，对批量方法进行约束

    interface FullName {
        firstName: string;//注意‘；’号结尾
        secondName: string;
    }

    function printName(name: FullName): void {

        // 必须传入对象  firstName  secondName
        console.log(name.firstName +'____'+ name.secondName);
    }

    printName('123');//错误
    var obj={//传入的参数必须包含 firstName  secondName
        age:20,
        firstName:'wang',
        secondName:'keran'
    }
    printName(obj);
    printName({//若直接传值则会报错，要求必须严格按照接口传入参数
        age:20,
        firstName:'wang',
        secondName:'keran'
    }); */

//接口可选属性

// interface FullName {
//     firstName: string;
//     secondName?: string;
// }

// function printName(name: FullName): void {

//     console.log(name);
// }
// // 参数传入顺序可以不一样
// printName({
//     secondName: 'secondName',
//     firstName: 'firstName'
// })




// 5.2、函数类型接口：对方法传入的参数  以及返回值进行约束（批量约束）

/*     interface encrypt {
        (key: string, value: string): string;
    }

    var md5: encrypt = function (key: string, value: string): string {
        return key + value;
    }

    console.log(md5('name', 'wangkeran')); */


// 5.3、可索引接口：数组、对象的约束（不常用）

/*     // 可索引接口：对数组的约束
    interface UserArr {
        [index: number]: string;
    }

    var arr:UserArr=['23','123']; */

/*     // 可索引接口：对对象的约束

    interface UserObj {
        [index: string]: string;
    }

    var obj: UserObj = { name: 'wang', age: '24' }; */

// 5.4、类类型接口:对类的约束  和  抽象类有点类似

/*     interface Animal {
        name: string;
        eat(str: string): void;
    }

    class Dog implements Animal {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        eat() {
            console.log(this.name + '吃粮食');
        }
    }

    var d = new Dog('wangwang');
    d.eat();//wangwang吃粮食 */

// 5.5、接口扩展:接口可以扩展接口

/*     interface Animal {
        eat(): void;
    }

    interface Person extends Animal {
        work(): void;
    }

    class Web implements Person {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        eat() {
            console.log(this.name + '吃馒头');
        }

        work() {
            console.log(this.name + '写代码');
        }
    }

    var w = new Web('wang');
    w.eat();//wang吃馒头
    w.work();//wang写代码 */

/*     interface Animal {
        eat(): void;
    }

    interface Person extends Animal {
        work(): void;
    }

    class programmer {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        coding(code: string) {
            console.log(this.name + code);
        }
    }

    class Web extends programmer implements Person {

        name: string;

        constructor(name: string) {
            super(name);
        }

        eat() {
            console.log(this.name + '吃馒头');
        }

        work() {
            console.log(this.name + '写代码');
        }
    }

    var w = new Web('wang');
    w.eat();//wang吃馒头
    w.work();//wang写代码
    w.coding('ts代码');//wang写代码 */