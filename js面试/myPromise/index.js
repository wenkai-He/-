//resolve(obj)obj是不能改变的
// obj={
//     a:1,
//     b:{
//         c:2
//     }
// }   但是如果obj里的c改变是可以的 
const myPromise=require('./myPromise')
// let promise=new myPromise((resolve,reject)=>{
//     // resolve(1)
//     // reject(2)
//     //throw new Error('faile')
//     //创建异步队列 此时promise.then处理的是状态为pending 所以当状态为pending时，需要拿两个数组分别存住resolve和reject的回调 
//     //2秒之后 状态变为resolve或者reject的时候 就会调用存住的函数
//     setTimeout(()=>{
//         resolve('success')
//     },2000)
// })

//promise.then是一个队列
// promise.then((value)=>{
//     console.log('success1    '+value);
// },(reason)=>{
//     console.log('defeated1   '+reason);
// })
// promise.then((value)=>{
//     console.log('success2    '+value);
// },(reason)=>{
//     console.log('defeated2  '+reason);
// })

let promise1=new myPromise((resolve,reject)=>{
    resolve('promise1')
})

let promise2=promise1.then(()=>{
    //返回promise 也可能返回一个字符串 所以要把字符串包装成promise
    //return value+ '->then->promise2'
    return promise2
//    return new Promise((resolve,reject)=>{
//     resolve(value+ '->then->promise2')
//    })
},(reason)=>{
    return reason;
})
promise2.then((value)=>{
    console.log(value);
},(reason)=>{
    console.log(reason);
})