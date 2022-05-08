class owen{
    static PENDING="pending"
    static REJECT="reject"
    static FULFILLED="fulfilled"
    constructor(executor){
        this.status=owen.PENDING;
        this.value=null;
        try {
            executor(this.reject.bind(this),this.resolve.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(value){
        if(this.status==owen.PENDING){
            this.status=owen.FULFILLED
            this.value=value;
        }
        
    }
    reject(reason){
        if(this.status==owen.PENDING){
        this.status=owen.REJECT
        this.value=reason;
        }
    }
    then(onFulfilled,onRejected){
        if(typeof onFulfilled !='function'){
            onFulfilled=()=>{}
        }
        if(typeof onRejected !='function'){
            onRejected=()=>{}
        }
        if(this.status==owen.FULFILLED){
           setTimeout(()=>{
            try {
                onFulfilled(this.value)
               } catch (error) {
                   onRejected(error)
               }
           })
        }
        if(this.status==owen.REJECT){
            setTimeout(()=>{
                try {
                    onRejected(this.value)
                } catch (error) {
                    onRejected(error)
                }
            })
        }
    }
}

