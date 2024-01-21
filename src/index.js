const prompt = require("prompt-sync")();

// Declaration of assets 
let meals, price, userName, choice, order;
let quantity, details;
let delivery, phoneNumber, address, deliveryFee;

meals = ['Pizza and rolls',
  'Tacos',
  'Tortillas']
cost = [5500, 4500, 7000]


// Greetings
console.log(`Hi, I'm X and I'm here to welcome you to Cheesy bites `)
userName = prompt(`What's your name please? `)

console.log(`Alright, ${userName}.
\nWould you like to see today's menu? `)
choice = prompt(`Reply with 'yes' to see the menu or 'no' to cancel `)


// The Menu
if (choice === "yes" || choice === "Yes" || choice === "YES") {
  console.log(`Here's the Menu. Please choose a meal below:

\nFor ${meals[0]} (₦5,500), reply with "one"
\nFor ${meals[1]} (₦4,500), reply with "two"
\nFor ${meals[2]} (₦7,000), reply with "three"`)

  //Taking orders
  order = prompt(`What would you like today? `)

  if (order === 'One' || order === 'one' || order === 'ONE') {
    quantity = prompt(`How many servings? Please input a number, not text`)
    price = perseFloat(quantity * cost[0])
    details = "Pizza and rolls"


  } else if (order === 'two' || order === 'Two' || order === 'TWO') {
    quantity = prompt(`How many servings ?Please input a number, not text.`)
    price = perseFloat(quantity * cost[1])
    details = "Tacos and chips"


  } else if (order === 'three' || order === 'Three' || order === 'THREE') {
    quantity = prompt(`How many servings? Pleease use a number, not text `)
    price = perseFloat(quantity * cost[2])
    details = "Tortillas"
  }


  // Confirmation & Checkout
  deliveryFee = 500
  totalPrice = price + deliveryFee;
  delivery = prompt(`Your bill is ₦${price}, the delivery charge is ₦${deliveryFee} to make a total of ₦${totalPrice} 
Shall we proceed to checkout? `);
  phoneNumber = prompt(`What's your phone number? `);
  address = prompt(`What's your address please? `);

  console.log(`
${quantity} serving(s) of ${details} coming right up!

Your order is being processed, our delivery man will call you on ${phoneNumber} soon.
It will be delivered to ${address} within the hour and you will be charged a total of ₦${totalPrice}.
You can pay cash or transfer on delivery.

Thanks for your patronage ${userName}, we hope to see you again soon, preferably tomorrow... Or tonight, our dinners are to die for ;). 
Have a great day!`)

} else if (choice === no || choice === No || choice === NO) {
  console.log(`That's too bad, you have no idea what you're missing out on. 
We're open everyday and hope to serve you better next time!`)
}