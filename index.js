function writeCards (array, event) {
    let messages = [];

    for (let i = 0; i < array.length; i++) {
        console.log (`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        messages.push (`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }

    return messages;
};

// console.log (writeCards(['benaiah','praise', 'wepundi'], 'birthday'));

function countDown (number) {
    while (number !== -1) {
        console.log (number--);
    };
}