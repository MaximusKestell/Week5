let text = 'The classes are itec 1150, itec 1250, itec 2560'

let replaced = text.replace('itec', 'ITEC') // only replaces first instance
console.log(replaced)

let replacedAll = text.replace(/itec/g, 'ITEC') // must use /x/g to replace all of them (g means global)
console.log(replacedAll)

let message = 'The classes are 1150, 1250, 2560' // using this one to add the ITEC part to the list
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&') // /\d{4}/g : finds every 4-digit number in string and replace it with ITEC (number)
console.log(replaceRegex)