
//putting keyword 'async' in front of function means function always returns a promise and result automatically wrapped in resolved promise.
async function testAsync() {
    return 9;
} 

testAsync().then(res=>{console.log(res)});

