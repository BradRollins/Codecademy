let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = '25';
if (earlyRegister) {
    console.log('Registered early.');
} else {
    console.log('Did not register early');
}
let runnerAge = 18;

if (runnerAge > 18 && earlyRegister) {
    console.log(`You will race at 9:30am and your racenumber is ${raceNumber}`);
} else if (runnerAge > 18 && !earlyRegister) {
    console.log(`You will race at 11:00am and your racenumber is ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log(`You will race at 12:30pm and your racenumber is ${raceNumber}`);
} else { console.log('Please see registration desk.') }
