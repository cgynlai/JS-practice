const months = ['january', 'feb','mar', 'apr', 'may'];

months.forEach( month => console.log('value :', month));

var newmonths = months.map(month => {let m=month.toUpperCase();
  console.log('transformed month: '+ month + ' to ' + m );
  return m;
})
//console.log(newmonths);

