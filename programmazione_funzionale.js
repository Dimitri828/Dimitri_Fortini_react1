const calculate= function(n1,n2,instructions){
const calc= instructions(n1,n2)
console.log(`il numero è ${calc}`);

}
const add= (x,y)=>x+y;
const multiply= (x,y)=>x*y;
const divide= (x,y)=>x/y;
const subtract= (x,y)=>x-y;


calculate(10,11,add)
calculate(10,11,multiply)
calculate(10,11,subtract)
calculate(10,11,divide)


// NON ho usato import perchè js me lo segnalava come errore, probabilmente perchè lo interpretava come un comando di importazione.
const creaConvertitioreValuta = (change_tax)=>(importo)=>importo*change_tax;

const EURO_DOLLAR= creaConvertitioreValuta(1.15);
console.log(EURO_DOLLAR(100));
