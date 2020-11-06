const Koa=require('koa')
const app=new Koa()
const fs=require('fs')
// iconv-list 解决文件乱码
const iconv = require('iconv-lite') 
// 路由原理
const render=(page)=>{
    return new Promise((resolve,reject)=>{
        let pageUrl=`./page/${page}`
        fs.readFile(pageUrl,"binary",(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })

    })
}
const route=async(url)=>{
    let page='404.html'
    switch (url) {
        case '/':
            page='index.html'
            break;
        case '/index':
            page='index.html'
            break;
        case '/todo':
            page='todo.html'
            break;
        case '/404':
            page='404.html'
            break;
        default:
            break;
    }
    let html=await render(page);
    return html;
}
app.use(async(ctx)=>{
    let url=ctx.request.url
    let html=await route(url)
    console.log(iconv.decode(html, 'utf-8'));
    ctx.body=iconv.decode(html, 'utf-8')
})
app.listen(3000)