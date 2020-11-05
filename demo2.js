const Koa=require('koa');
const app=new Koa();
app.use(async(ctx)=>{
    let url=ctx.url;
    // let request=ctx.request;
    // let req_requery=request.query;
    // let req_querystring=request.querystring;


    let ctx_query=ctx.query;
    let ctx_querystring=ctx.querystring;
    ctx.body={
        url,
        ctx_query,
        ctx_querystring,
    }
});
app.listen(3000,()=>{
    console.log('[deom] server is starting');
})