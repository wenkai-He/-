function createAnother(original){
    var clone = Object.create(original); // 通过调用 object() 函数创建一个新对象
    clone.getFriends = function(){  // 以某种方式来增强对象
      return this.friends
    };
    return clone; // 返回这个对象
  }
  var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
  };
  var anotherPerson = createAnother(person);
  anotherPerson.friends.push('zayn')
  console.log(anotherPerson.friends); //["Shelby", "Court", "Van"]

  var anotherPerson1 = createAnother(person);
  console.log(anotherPerson1.friends);

  console.log(anotherPerson.__proto__==person);
  //修改数组仍然会影响其他实例
  console.log(anotherPerson.__proto__.__proto__==Object.prototype);
