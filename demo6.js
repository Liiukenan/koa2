const Koa=require('koa')
const app=new Koa()
// 路由中间件
const Router=require('koa-router')
const router=new Router()
router
.get('/',(ctx,next)=>{
    ctx.body="hello jspang"
})
.get('/todo',(ctx,next)=>{
    ctx.body={
        dd:'hello,todo'
    }
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('success');
})
