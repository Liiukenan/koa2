const Koa=require('koa')
const app=new Koa()
const views=require('koa-views')
const path=require('path')
const static=require('koa-static')
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

const staticPath='./static'
app.use(static(path.join(__dirname,staticPath)))

app.use(async(ctx,next)=>{
    let title='hello kenan'
    await ctx.render('index', {title: title}) // render 渲染方法，这里加载到 views/index.ejs 文件 | 第二参数是传参到模版
    await next()
})

app.listen(3000,()=>{
    console.log('start in port 3000');
})