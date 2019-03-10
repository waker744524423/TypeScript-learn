/*
2. typescript中的数据类型

    TypeScript中为了是编写的代码更规范，更有利于维护，增加了类型校验，在TypeScript中主要给我们提供一下类型：
    写ts时候必须制定变量的数据类型

    布尔类型（boolean）
    数字类型（number）
    字符串类型（string）
    数组类型（array）
    元组类型（tuple）
    枚举类型（enum）
    任意类型（any）
    null和undefined
    void类型
    never类型
*/

// 布尔类型（boolean）

/*
    var flag: boolean = true;
    flag=123;//错误
    flag=false;//正确
*/

// 数字类型（number）

/*
    var num:number=123;
    num=456;//正确
*/

// 字符串类型（string）

/*
    var str: string = 'wang';
*/

// 数组类型（array）ts中定义数组有两种写法

/*
   1. 第一种定义数组方式
    var arr: number[] = [1, 2, 3];//数组中每一项必须是数字类型

    2. 第二种定义数组
    var arr: Array<number> = [1, 2, 3];//也是数组中每一项必须是数字类型

    3. 第三种
    var arr:any[]=[1,'sdf',true];//数组中每一项可以是任意数据类型
*/

// 元组类型（tuple）属于数组的一种

/*
    可以为数组中每一项定义类型，同时也定义长度
    let arr: [number, string] = [1, 'd'];
*/

// 枚举类型（enum）

/*
    随着计算机的不断普及，程序不仅只用于数值计算，还更广泛的用于处理非数值的数据
    例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。
    在其他程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
    如果能在程序中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
    也就是说，事先考录到某一变量可能的取值，尽量用孜然语言中含义清除的单词来表示他的每一个值，
    这种方法称为枚举，这种方法定义的类型称为枚举类型。

        enum 枚举名{
            标识符[=整形常数],
            标识符[=整形常数],
            ...
            标识符[=整形常数],
        };
*/

/*
    enum Flag {
        success = 1,
        error = 2
    }

    let s: Flag = Flag.success;

    console.log(s); //如果标识符没有赋值，那么它的值就是索引
    console.log(s=2); //如果标识符赋值，那么它的值就是当前索引，之后的索引在此基础上递增1


*/

// 任意类型（any）

/*
任何类型都不会报错
    let a: any = '123';
    a=12;
    a=true;
    a=[1,2];
 */

/*
任意类型的用处
    防止编译报错
*/

// null和undefined	其他（never类型）数据类型的子类型

/*
    var num:number;
    console.log(num);//编译报错：undefined

    var num:undefined;
    console.log(num);//正确：undefined

    var num:number | undefined;
    console.log(num);//正常

    同理：
    var num:number | undefined | null;

    结论：ts必须定义准确的类型，不然则会报错，当一个值有多重情况时
    我们可以采用定义多类型的方式，如上；
*/

// void类型
/*
    若一个方法没有返回值，我们将定义这个方法的类型为void
    若有返回值，那么返回值是什么类型就定义为什么类型
    function run(): void {
        console.log('run');
    }
    run();
*/

// never类型：是其他类型（包括null和undefined）的子类型，代表不会出现的值

// 这意味着声名never的变量只能被never类型赋值
/*
    var a:undefined;
    a=undefined;//正确
    a=123;//报错
*/




