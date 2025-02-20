let arrayOfSums = []

const happyNumber = (i) => {
  const digits = i.toString().split('')
  let sum = digits.reduce((acc, currentValue) => {
    return acc + (currentValue**2)
  }, 0)
 
  if(i == 32) console.log("32 ooooooo")
 
  if(arrayOfSums.includes(sum)) {
    console.log(`${i} is a sad number`)
    arrayOfSums =[]
    return false
  }
  else if(sum === 1) {
    console.log(`${i} is a Happy number!`)
    arrayOfSums =[]
    return true
  }
  else {
    arrayOfSums.push(sum)
    return happyNumber(sum)
  }
 
}
const happyNumbers = []
for(let i = 0; happyNumbers.length < 5; i++){
  if(happyNumber(i)) happyNumbers.push(i)
}
console.log(happyNumbers)

