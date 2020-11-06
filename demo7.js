const Koa=require('koa')
const app=new Koa()
// 路由中间件
const Router=require('koa-router')

// 加层级前缀
const router=new Router({
    prefix:'/kenan'
})
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
