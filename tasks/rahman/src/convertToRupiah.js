import {createInterface} from "node:readline/promises";

function dollarToRupiah(dollar){
    let rupiah = dollar * 16.72175
    return rupiah
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

export async function convertDollarToRupiah(){
  try{
    let res = await rl.question('Input Dollar : $', (answer) => {
    let dollar = parseInt(answer);
    if(typeof dollar === "number"){
        console.log(`invalid input`);
    }
      let convert =  dollar.dollarToRupiah;
      console.log(`Rp ${convert}`); 
      rl.close();
   })
  }catch(error){
    console.log(error);
  }
}