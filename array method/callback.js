console.log('started');
// const getValue = (val, callback) => {
//   setTimeout(()=>{
//       console.log('getting data ...');
//       callback({data : val});
//     }
//   , 3000)
// }

// getValue(3,(sth)=>{
//     console.log(sth);
// })

// var obj = {val: 5};
// console.log(obj.val);
// console.log('ended');

function getValue(val, callback) {
    setTimeout(function(){
        console.log('getting data ...');
        callback({data : val});
      }
    , 3000);
    //callback({data: val});
  }
  
  getValue(3,function(sth){
      console.log(sth);
  })

  console.log("ended");