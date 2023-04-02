/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
  '🥓 bacon',
  '🥓 bacon',
  '🍳 eggs',
  '🫑 green peppers',
  '🧀 cheese',
  '🌶️ hot sauce',
  '🥓 bacon',
  '🥦 broccoli',
  '🧀 cheese',
  '🥦 broccoli',
  '🌶️ hot sauce',
]

function removeDupesFromArray(arr) {
  const newArr = []

  arr.forEach((el) => {
    if (!newArr.includes(el)) {
      newArr.push(el)
    }
  })

  return newArr
}

// ALTERNATIVE MORE EFFICIENT SOLUTION
function removeDupesFromArrayEfficient(arr) {
  const hashMap = {}

  return arr.filter((el) => {
    if (!hashMap[el]) {
      hashMap[el] = true
      return true
    }
    return false
  })
}

// console.log(removeDupesFromArray(eggScrambleRecipe))
console.log(removeDupesFromArrayEfficient(eggScrambleRecipe))
