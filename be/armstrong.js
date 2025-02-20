let armstrongNumbers = []

const armstrong = () => {
for(let i = 100; i < 1000; i++){
  const digits = i.toString().split('')
  let sum = digits.reduce((acc, currentValue) => {
    return acc + (currentValue**3)
  }, 0)
  
  if(sum === i) {
    console.log(`${i} is an armstrong number`)
  armstrongNumbers.push(i)
  }
}
}
armstrong()
console.log(armstrongNumbers)

