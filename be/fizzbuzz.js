// for (let i = 0; i < 100; i++){
//   if(i % 15 === 0) {
//     console.log("fizzbuzz")
//   }
//   else if(i % 3 === 0) {
//     console.log("fizz")
//   }
//   else if(i % 5 === 0) {
//     console.log("buzz")
//   }else {
//   console.log(i)
//   }
// }

const fizzbuzz = (i) => {
  if(i > 100) return

  let output = "";
 
  if(i % 3 === 0) output += "fizz"
  if(i % 5 === 0) output += "buzz"
  
  console.log(output || i)
  
  fizzbuzz(i + 1)
}
fizzbuzz(1)

