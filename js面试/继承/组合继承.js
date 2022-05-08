function Parent() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
}
function Child() {
    Parent.call(this);
    this.type = 'child2';
}
Parent.prototype.getName = function () {
    return this.name;
}
//组合继承既可以实现调用父亲实例上的方法 也能保证修改引用类型值不会发生冲突。
//缺点：子类创建实例对象时，其原型中会存在两份相同的属性/方法。
Child.prototype=new Parent();
let child1=new Child();
let child2=new Child();
child1.play[0]=4
console.log(child1);
console.log(child2);
console.log(child1.getName())