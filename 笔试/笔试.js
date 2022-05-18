  function outter(){
          var a=2;
          return function inner(){
              console.log(a);
          }
      }
      //这是一个很明显的闭包 outter函数在调用完后应该被销毁 同时他里面存在的var a=2也应该被销毁 但是闭包可以阻止垃圾回收机制回收
      //inner函数拥有对outter函数的作用域的引用 这就是闭包
      //闭包可以在函数作用域外中访问他的作用域中的变量
      let a=outter();
      a()
      