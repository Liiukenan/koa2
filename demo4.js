const Koa=require('koa');
const app=new Koa();
const bodyparser=require('koa-bodyparser');
app.use(bodyparser())
app.use(async(ctx)=>{
    if(ctx.url==='/' && ctx.method==='GET'){
        //显示表单页面
        let html=`
        <h3>JSpang koa2 request post</h3>
        <form action="/" method="POST">
            <p>userName</p>
            <input type="text" name="userName"/><br/>
            <p>age</p>
            <input type="text" name="age"/><br/>
            <p>webSite</p>
            <input type="text" name="webSite"/><br/>
            <button type="submit">submit</button>
        </form>
        `
        ctx.body=html;
    }else if(ctx.url==='/' && ctx.method==='POST'){
        let postData=await parsePostData(ctx);
        ctx.body=postData
    }else{
        ctx.body='<h1>404</h1>'
    }
})
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try {
            let postdata="";
            ctx.req.addListener('data',(data)=>{
                postdata+=data
            })
            ctx.req.on('end',()=>{
                let parseData=parseQueryStr(postdata)
                resolve(parseData)
            })
        } catch (error) {
            
        }
    })
}
function parseQueryStr(queryStr){
    let queryData={}
    let queryStrList=queryStr.split('&')
    // 索引
    for(let [index,queryStr] of queryStrList.entries()){
        let itemList=queryStr.split('=');
        queryData[itemList[0]]=decodeURIComponent(itemList[1])
    }
    return queryData;
}
app.listen(3000,()=>{
    console.log('success');
})