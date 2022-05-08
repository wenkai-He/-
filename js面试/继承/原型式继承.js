var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson=Object.create(person);
anotherPerson.name='owen';
anotherPerson.friends.push("Rob");
console.log(anotherPerson.name);
console.log(anotherPerson.friends);

var anotherPerson1=Object.create(person);
anotherPerson1.name='zayn';
anotherPerson1.friends.push("kd");
console.log(anotherPerson1.name);
console.log(anotherPerson1.friends);
console.log(anotherPerson.friends);
//friends被篡改了
console.log(anotherPerson.__proto__==person);