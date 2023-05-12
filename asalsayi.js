const arguments = process.argv.slice(2);
function alanHesapla(yaricap){
    let alan=3.14*yaricap*yaricap
    //console.log('yaricap : ',yaricap,'alan :',alan)
    console.log(`Yarıçap : ${yaricap}, alan : ${alan}`)
    
  console.log(yaricap);
}
alanHesapla(arguments[0]*1)