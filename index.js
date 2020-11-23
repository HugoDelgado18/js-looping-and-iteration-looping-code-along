// Code your solutions in this file
// let names = ["Lisa", "Kaitlin", "Jan"]
// let event = ["surprise"]

function writeCards (names, event) {
    const array = []
    for(let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        // console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array
}

function countDown(num) {
    for (let i = num; i > -1; i--) {
        console.log(i)
    }
}
  