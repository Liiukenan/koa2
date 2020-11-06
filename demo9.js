const Koa=require('koa')
const Router=require('koa-router')
const app=new Koa()
const router=new Router()
const bodyparser=require('koa-bodyparser');
app.use(bodyparser())
router.get('/',(ctx,next)=>{
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
    // ctx.body=ctx.query;
    
})
router.post('/',(ctx,next)=>{
    ctx.body=ctx.request.body;
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('start success');
})