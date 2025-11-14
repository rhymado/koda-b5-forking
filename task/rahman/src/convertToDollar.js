import {createInterface} from "node:readline/promises";

export function rupiahToDollar(rupiah){
    let dollar = rupiah * 0.000006
    return dollar
}

const rl =createInterface({
  input: process.stdin,
  output: process.stdout
});

async function convertRupiahToDollar(){
  try{
    let res = await rl.question('Input Rupiah : Rp', (answer) => {
    let rupiah = parseInt(answer);
    if(typeof rupiah == "number"){
        console.log(`invalid input`);
    }
      let convert =  rupiah.rupiahToDollar;
      console.log(`$ ${convert}`); 
      rl.close();
   })
  }catch(error){
    console.log(error);
  }
}
convertRupiahToDollar();