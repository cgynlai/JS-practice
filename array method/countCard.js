
var count = 0;
var err = false;
function cardCount (card) {
   let val = card;
    switch (val) {
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
            count++;
            break;
        case 7 :
        case 8 :
        case 9 :
            count = count;
            break;
        case 10 :
        case 'J' :
        case 'Q' :
        case 'K' :
        case 'A' :
            count--;
            break;
        default :
          console.log('wrong input');
          err = true;
 }
if (!err){
 if (count<=0){
     console.log(`HOLD ${count}`);
 }
 else {
     console.log(`BET ${count}`);
 }
}
}

cardCount('A');