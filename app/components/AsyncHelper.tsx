export default async function AsyncHelper(){
    let promise
    try{
         promise=await new Promise((res,rej)=>{
            setTimeout(()=>{rej(10)},3000)
        })
    }catch(error){
        promise=error
    }
    
    console.log(promise)
    return(
        <p>Hello form Async Helper</p>
    )
}