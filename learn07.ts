// 7.TypeScript中的泛型

/* 
    6.1、泛型的定义
    6.2、泛型函数
    6.3、泛型类
    6.4、反省接口
*/

/* 

6.1、泛型的定义

    泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性，
    组件不经能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

    在想C#和java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据，这样用户就可以
    以自己的数据类型来使用组件。

    通俗解释：泛型就是解决  类、接口、方法的复用性，以及对不特定数据类型的支持(支持类型校验)；
*/

// 只能返回string类型的数据

/*     function getDate(value: string): string {
        return value;
    } */

// 同时返回string和number类型（代码冗余）
/*     function getDate1(value: string): string {
        return value;
    }

    function getDate2(value: number): number {
        return value;
    }
 */

// 同时返回string和number类型  any可以解决这个问题，但是放弃了类型检查

/*     
    传入的参数类型和返回的参数类型可以不一致
    function getDate1(value: any): any {
        return value;
    } */

// 我们要求传入什么返回什么


// 6.2、泛型函数

// 泛型：可以支持不特定的数据类型	    要求：传入参数和返回参数一致

/*     function getDate<T>(value: T): T {
        return value;
    } 

    getDate<number>(123);
    getDate<string>('wang');

    getDate<number>('wang');//错误 

    function getDate<T>(value: T): any {
        return value;
    } 
    
*/

// 6.3、泛型类:比如有个最小对算法，需要同时支持返回数字和字符串良好总类型，  通过类的泛型来实现

/*     class MinClass {

        list: number[] = [];

        add(num: number) {
            this.list.push(num);
        }

        min(): number {

            var minNum = this.list[0];

            for (var i = 0; i < this.list.length; i++) {
                if (minNum > this.list[i]) {
                    minNum = this.list[i];
                }
            }

            return minNum;
        }
    }

    var m = new MinClass();
    m.add(1);
    m.add(2);
    m.add(3);
    m.min();//1 */

// 类的泛型

/*     class MinClass<T>{

        list: T[] = [];

        add(num: T) {
            this.list.push(num);
        }

        min(): T {

            var minNum = this.list[0];

            for (var i = 0; i < this.list.length; i++) {
                if (minNum > this.list[i]) {
                    minNum = this.list[i];
                }
            }

            return minNum;
        }
    }

    var m = new MinClass<number>();//实例化类  并且制定了类的T代表的类型是number
    m.add(1);
    m.add(2);
    m.add(3);
    m.min();//1

    var m1 = new MinClass<string>();//实例化类  并且制定了类的T代表的类型是string
    m1.add('a');
    m1.add('b');
    m1.add('c');
    m1.min();//a

 */

// 6.4、泛型接口

// 函数类型接口
/*     interface ConfigFn {
        (value: string, name: string): string;
    }

    var setDate: ConfigFn = function (value: string, name: string): string {
        return value + name;
    }

    setDate('hahah', 'wang');//hahhawang */

// 泛型接口

/*     
    第一种定义方法：
    interface ConfigFn {
        <T>(value: T): T;
    }

    var setDate: ConfigFn = function <T>(value: T): T {
        return value;
    }

    setDate<string>('hahah');//hahah
    setDate<string>(123);//错误 */

    /* interface ConfigFn<T> {
        (value: T): T;
    }

    function setDate<T>(value: T): T {
        return value;
    }

    var mySetDate:ConfigFn<string>=setDate;
    setDate<string>('hahah');//hahah
    setDate<string>(123);//错误

    var a:ConfigFn<string>=function <T>(value: T): T{
        return value;
    }

    a('ass'); */