/*

4. typescript中的类

    4.1、类的定义
    4.2、继承
    4.3、类里面的修饰符
    4.4、静态属性	静态方法
    4.5、抽象类	    继承	多态

*/

// 4.1、类的定义

/*     class Person {

        name: string;//属性  前面省略了public关键词

        constructor(n: string) {//构造函数	实例化类的时候出发的方法
            this.name = n;
        }

        run(): void {
            console.log(this.name);
        }
    }
    var p = new Person('wang');

    p.run();//wang */


/*     class Person {

        name: string;//属性  前面省略了public关键词

        constructor(name: string) {//构造函数	实例化类的时候出发的方法
            this.name = name;
        }

        getName(): string {
            return this.name;
        }

        setName(name: string): void {
            this.name = name;
        }
    }
    var p = new Person('wang');
    console.log(p.getName());//wang
    console.log(p.setName('bb'));
    console.log(p.getName());//bb */


// 4.2、继承	extends、super

/*     class Person {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        run(): string {
            return `${this.name}在运动`;
        }
    }
    var p = new Person('wang');

    p.run();//wang在运动


    class Web extends Person {

        constructor(name: string) {

            super(name);//运行父类的构造函数
        }
    }

    var w = new Web('wk');
    w.run();//wk在运动  */


// ts中继承的探讨  父类的方法和子类的方法一致


/*     class Person {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        run(): string {
            return `${this.name}在运动`;
        }
    }
    var p = new Person('wang');

    p.run();//wang在运动


    class Web extends Person {

        constructor(name: string) {

            super(name);//运行父类的构造函数
        }

        work() {
            console.log(`${this.name}在工作`);
        }

        run(): string {
            return `${this.name}在运动子类`;
        }
    }

    var w = new Web('wk');
    w.run();//wk在运动
    w.work();//wk在工作
    w.run();//wk在运动子类 */


// 4.3、类里面的修饰符	ts里定义属性时候给了我们三种修饰符

/*
    public: 公有	在类里面、子类、类外面都可以访问
    protected:  保护类型	在类里面和子类里面可以访问，在类外面不可以访问
    private:    私有	在类里面可以访问，子类、类外面都没办法访问

    属性如果不加修饰符	默认表示公有
*/


// 4.4、静态属性	静态方法

/*     class Person {

        public name: string;
        public age: number = 10;

        // 如果静态方法想要调用属性的话，需要把属性改为静态属性
        static sex = 'man';

        constructor(name: string) {
            this.name = name;
        }

        run() {//实例方法
            console.log(`${this.name}在运动`);
        }

        work() {
            console.log(`${this.name}在工作`);
        }

        static print() {//静态方法	调用age报错：静态方法没办法直接调用类的属性
            // console.log('print方法' + this.age);
            console.log('print方法');
            console.log('print方法'+Person.sex);//调用静态属性
        }
    }

    var p = new Person('wang');

    p.run();//wang在运动

    Person.print();//print方法 */


// 4.5、抽象类	    继承	多态

/*     // 多态定义：父类定义一个方法不去实现，让继承它的子类去实现，每个子类有不同的表现
    // 多态属于继承

    class Animal {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        eat() {//具体吃什么  不知道  具体吃什么由继承它的子类去实现
            console.log('吃的方法');
        }
    }

    class Dog extends Animal {

        constructor(name: string) {
            super(name);
        }

        eat() {
            return this.name + '吃肉';
        }
    }

    class Cat extends Animal {

        constructor(name: string) {
            super(name);
        }

        eat() {
            return this.name + '老鼠';
        }
    } */

/*     // ts中的抽象类，他是提供其他类继承的基类，不能直接被实例化
    // 用abstract关键字定义的抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
    // abstract抽象方法只能放在抽象类里面
    // 抽象类和抽象方法用来定义标准  标准：Animal  这个类要求他的子类必须包含eat方法


    // 标准：（就是接口）
    abstract class Animal {

        name: string;

        constructor(name: string) {
            this.name = name;
        }

        abstract eat(): any;//抽象方法必须实现

        run() {

        }
    }

    class Dog extends Animal {

        // 抽象类的子类必须实现抽象类里面的方法
        constructor(name: any) {
            super(name);
        }

        eat() {
            console.log(this.name + '吃骨头');
        }
    }

    var d = new Dog('旺旺');
    d.eat();

    class Cat extends Animal {

        // 抽象类的子类必须实现抽象类里面的方法
        constructor(name: any) {
            super(name);
        }

        run() {
            console.log('run');
        }

        eat() {
            console.log(this.name + '老鼠');
        }
    }

    var c = new Cat('mimi');
    c.run();
    c.eat();

 */