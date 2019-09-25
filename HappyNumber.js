const ticket = 123321
const type   = typeof(1)
let a = Math.floor(Math.log10(ticket)) + 1
let half_a = a/2


const exponentiation = (x , n) => { 
  let result = x
  for (let i = 1; i < n; i++) {
    result *= x
  }
  if(n < 1  ){
    return  1
     } 
    
  return result 
  
}

//ps все ошибки сделал console.error (прост , чтоб красивей смотрелось :=))
 //пункт 1
//  let rightsumm  = (ticket % 10) + (((ticket % 100) -ticket % 10 ) / 10) + ((ticket % 1000 - ticket % 100) / 100)
  //пункт 2
// let leftsumm =(Math.floor((ticket / 100000) % 10)) + Math.floor(((ticket / 10000) % 10)) + Math.floor(((ticket / 1000) % 10))
 

const ResultLeftSumm = (length) => {
  let resultsumm_left = 0
  for(i = 1; i <= length; i++){
    resultsumm_left += Math.floor((ticket % exponentiation(10, i))/ exponentiation(10, i-1) ) // как я пришел к этой формуле в пункте 1 
  }
  return resultsumm_left
}

let resultsumm_right = 0
const ResultRightSumm = (length) => {
  for(i = 1; i <= length; i++){
    resultsumm_right += Math.floor(ticket /(10* exponentiation(10, i + 1))% 10)  // как я пришел к этой формуле в пункте 2
  }
  return resultsumm_right
}
 const message = (y,n) => {
 
  if(ResultLeftSumm(half_a) === ResultRightSumm(half_a) ){
    console.log(y)
  } else(
    console.log(n)
  )
}

const isValidticket = (dangerDigits, dangerType) => {
  if(typeof(ticket) !== type){
     
      
    console.error(dangerType)
    return // (tn) прерывание дейсвия функции.  (т.е если const number не соответсвует типу number дальнейшее выполнение программы нас не интересует)

  }
  if(a === 6){ 
    message("Congratulations, you have a lucky ticket  :=)", "Oh, the ticket is not happy :=( ")
   return  //   -//- что и  (tn) 
  }
 
  console.error(dangerDigits)
}
const isHappyticket = () => {
  isValidticket("This ticket is not correct. The ticket must be six digits", `Type error: Const 'ticket' can only be a ${type}`)
  }


  
isHappyticket(ticket)
