function Parent() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
}
function Child() {
    this.type = 'child2';
}
Parent.prototype.getName = function () {
    return this.name;
}
Child.prototype=new Parent();
//这一句话就是 Child.prototype.__proto__==Parent.prototype
const child1=new Child();

console.log(child1);
console.log(child1.name);
console.log(child1.play);
console.log(child1.getName());
child1.play[0]=4
//修改引用类型 其他实例会受影响
console.log(child1.play);
const child2=new Child();
console.log(child2);
console.log(child2.name);
console.log(child2.play);
console.log(child1.__proto__==Child.prototype);
console.log(Child.prototype.__proto__==Parent.prototype);
console.log(Parent.prototype.__proto__==Object.prototype);
console.log(Object.prototype.__proto__==null);

