function clone (parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}
function Parent() {
    this.name = 'parent';
    this.play = [1, 2, 3];
}
Parent.prototype.getName = function () {
    return this.name;
}
function Child() {
    Parent.call(this);
    this.friends = 'child';
}

clone(Parent, Child);

Child.prototype.getFriends = function () {
    return this.friends;
}
let person6 = new Child();
let person7 = new Child();
console.log(person6.__proto__==Child.prototype);
console.log(person6.__proto__.__proto__==Parent.prototype);
console.log(person6.__proto__.__proto__.__proto__==Object.prototype);
console.log(person6); //{friends:"child5",name:"child5",play:[1,2,3],__proto__:Parent6}
person6.play.push(4)
console.log(person6.play);
console.log(person7.play);
console.log(person6.getName()); // parent6
console.log(person6.getFriends()); // child5