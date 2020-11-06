const Koa=require('koa')
const app=new Koa()
// 路由中间件
const Router=require('koa-router')

// 子路由
let home=new Router()
home.get('/kenan',async(ctx)=>{
    ctx.body="home kenan page11111"
}).get('/todo',async(ctx)=>{
    ctx.body="todo kenan page111111"
})
//子路由
let page=new Router()
page.get('/kenan',async(ctx)=>{
    ctx.body="page kenan page"
}).get('/todo',async(ctx)=>{
    ctx.body="page todo kenan page"
})
//父级路由
let router=new Router()
router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),home.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('success');
})
