// Мінімум

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let result = sum(0.1, 0.2)

function sum(num1, num2) {
  return (num1 * 10 + num2 * 10) / 10
}

// console.log(result)

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let one = '1'
let two = 2
let nextSum = Number(one) + Number(two)
console.log(nextSum)

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

var memoryAmount = Number(prompt("Enter your flash-card's memory size: "))

let fileCount = Math.floor(memoryAmount * 1024 / 820)

alert(`You can store ${fileCount} files sized 820Mb on the flash-card`)

// Норма

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const cashAndPrice = prompt("Enter your cash amount and the price of one chocolate bar \n(like \"12 3.20\"): ")
const cashAndPriceArray = cashAndPrice.split(' ')
const cash = cashAndPriceArray[0]
const price = cashAndPriceArray[1]
const barCount = Math.floor(cash / price)
const change = (cash - barCount * price).toFixed(2)
alert(`You can buy ${barCount} chocolate bars and have ${change} dollars left`)

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let threeDigit = prompt('Enter a three-digit number: ')
let reversed = threeDigit.toString().split('').reverse().join('')
alert(`Your number reversed is ${reversed}!`)

// Максимум

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків. 
// (Я припускаю мова йде про прості відсотки)

let deposit = prompt('Enter your deposit amount: \n(numbers only)')
let incomeTwoMonth = (deposit * 0.004167 * 2).toFixed(2)
alert(`Having a 5% annual deposit (simple interest) you are to receive an income ${incomeTwoMonth}\$ for two month.`)

// Що повернуть вирази:
//  2 && 0 && 3 => 0

//  2 || 0 || 3 => 2

// 2 && 0 || 3 => 3

