let username = 'Jane';
let nameMessage = 'Hello, Jane!';
let userQuestion = 'Will I start up a blog?';
let eightBall = '';
username ? console.log(`${nameMessage}`) : console.log('Hello!');
console.log(`${username} asked: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

console.log(eightBall);

    if (randomNumber === 0) {
        console.log('It is certain');
    } else if (randomNumber === 1) {
        console.log('It is decidedly so');
    } else if (randomNumber === 2) {
        console.log('Reply hazy try again');
    } else if (randomNumber === 3) {
        console.log('Cannot predict now');
    } else if (randomNumber === 4) {
        console.log('Dont count on it');
    } else if (randomNumber === 5) {
        console.log('My sources say no');
    } else if (randomNumber === 6) {
        console.log('Outlook not so good');
    } else if (randomNumber === 7) {
        console.log('Signs point to yes');
    } else { console.log('Invalid');
    }
    