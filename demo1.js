
// let a=1;
// const f1=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log(2);
//             a=2;
//             resolve();
//         }, 1000);
//     })
// }
// const f2=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(3);
//             a=3;
//             resolve();
//         },1000)
//     })
// }
// f1().then(res=>{
//     return f2();
// }).then(res=>{
//     return f1();
// }).then(res=>{
//     return f2();
// }).then(res=>{
//     setTimeout(() => {
//         console.log('完成');
//     }, 1000);
// }).catch((error)=>{
//     console.log(error);
// })

// Promise.all([f1(),f2()]).then((result)=>{
//     console.log(a);
// }).catch((error)=>{
//     console.log(error);
// })


// console.log('====================================');
// console.log(null==undefined);
// console.log('====================================');

// setInterval(() => {
    
// }, interval);



// const getSomething=async ()=>{
//     return 'something'
// }
// const testAsync=async ()=>{
//     return 'hello async'
// }
// const test=async()=>{
//     const v1=await getSomething();
//     const v2=await testAsync();
//     console.log(v1,v2);
// }
// test();

// await 可以接收promise 也可接收字符串（ps:必须在async内使用）
// const takeLongTime=()=>{
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve("success")
//         }, 1000);
//     })
// }

// const test=async ()=>{
//     const v1=await takeLongTime();
//     console.log(v1)
// }
// test();