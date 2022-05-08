const PENDING='PENDING';
const FULFILLED='FULFILLED';
const REJECTED='REJECTED';
function resolvePromise(promise2,x,resolve,reject){
  if(promise2==x){
    return reject(new TypeError('Chaining cycle detected for promise #<myPromise>'))
  }
  if((typeof x=='object'&&x!==null)||typeof x=='function'){
      try {
        let then=x.then;
        if(typeof then=='function'){
            then.call(x,(y)=>{
                resolve(y)
            },(r)=>{
                reject(r)
            })
        }else{
            resolve(x)
        }
      } catch (error) {
          reject(error)
      }
  }else{
      resolve(x)
  }
}
class myPromise{
    constructor(executor){
        this.status=PENDING;
        this.value=undefined;
        this.reason=undefined;

        this.onFulfilledCallBack=[];//存成功的回调
        this.onRejectedCallBack=[];//存失败的回调

        const resolve=(value)=>{
           if(this.status==PENDING){
            this.status=FULFILLED
            this.value=value
            //发布
            this.onFulfilledCallBack.forEach(item=>item())
           }
        }

        const reject=(reason)=>{
            if(this.status==PENDING){
                this.status=REJECTED
                this.reason=reason
                //发布
                this.onRejectedCallBack.forEach(item=>item())
               }
        }

        try {
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
        
    }
    //x可以为普通值 也可以为promise
    then (onFulfilled,onRejected){
        let promise2=new myPromise((resolve,reject)=>{
            if(this.status==FULFILLED){
                setTimeout(()=>{
                    try {
                        let x=onFulfilled(this.value);
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (error) {
                        reject(error)
                    }
                },0)

            }
            if(this.status==REJECTED){
               setTimeout(()=>{
                try {
                    let x=onRejected(this.reason)
                    resolvePromise(promise2,x,resolve,reject)
                } catch (error) {
                    reject(error)
                }
               },0)
            }
            if(this.status==PENDING){
                //订阅
               this.onFulfilledCallBack.push(()=>{
                try {
                    let x=onFulfilled(this.value)
                    resolvePromise(promise2,x,resolve,reject)
                } catch (error) {
                    reject(error)
                }
               });
               this.onRejectedCallBack.push(()=>{
                try {
                    let x=onRejected(this.reason)
                    resolvePromise(promise2,x,resolve,reject)
                } catch (error) {
                    reject(error)
                }
               })
            }
        })
        return promise2
    }
}



module.exports=myPromise;