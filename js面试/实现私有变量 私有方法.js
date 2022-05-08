const [Person, Teacher] = (function () {
  const s = Symbol('age')
  const c = Symbol('studentCount')
  const setStudentCount = Symbol('setCount')
  class Person {
      constructor(name, age) {
          this.name = name
          this[s] = age
      }

      setAge(age) {
          this[s] = age
      }
      getAge(){
        return this[s]
      }
  }
  
  class Teacher extends Person {
      constructor(name, age, count) {
          super(name, age)
          this[c] = count
      }
      [setStudentCount](count) {
          this[c] = count
      }
      set(count) {
          this[setStudentCount](count)
      }
  }
  return [Person, Teacher]
})()

let person=new Teacher('owen',18,100);
console.log(person.name);
console.log(person.getAge());
console.log(person.set(100));
console.log(person[setStudentCount](50));