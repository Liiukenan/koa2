const Koa=require('koa')
const app=new Koa()
const Router=require('koa-router')
const router=new Router()
// cookie的应用
app.use(async(ctx)=>{
    if(ctx.url==='/'){
        ctx.cookies.set(
            'myname','kenan',{
               domain:'127.0.0.1',
               path:'/',
               maxAge:1000*60*60,
               expires:new Date('2020/11/6'),
               httpOnly:false,
               overwrite:false
            }
            

        )
        ctx.body='cookie success!'
    }else{
        if(ctx.cookies.get('myname')){
            ctx.body=ctx.cookies.get('myname')
        }else{
            ctx.body='cookie is null'
        }
    }
})
app.listen(3000,()=>{
    console.log('start in port 3000');
})