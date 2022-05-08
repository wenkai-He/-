function Parent() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
}
Parent.prototype.getName = function () {
    return this.name;
}
function Child() {
    //相当于是把Parent里的this绑定给了child
    Parent.call(this);
    this.type = 'child2';
}
let child=new Child();
console.log(child);
console.log(child.__proto__==Child.prototype);
console.log(Child.prototype.__proto__==Object.prototype);
console.log(Object.prototype.__proto__==null);
//console.log(child.getName());//报错 不能调用父类原型上的方法