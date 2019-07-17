/*onst getSleepHours = day => {
if(day === 'monday') {
return 8;} else if(day === 'tuesday') {
return 7;} else if(day === 'Wednesday') {
return 6;} else if(day === 'thursday') {
return 5;} else if(day === 'friday') {
return 6;} else if(day === 'saturday') {
return 8;} else if(day === 'sunday') {
return 8;} 
else {return ''}
}*/

const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 8
            break;
        case 'wednesday':
            return 7
            break;
        case 'thursday':
            return 6
            break;
        case 'friday':
            return 5
            break;
        case 'saturday':
            return 5
            break;
        case 'sunday':
            return 8
            break;
        default:
            return 'Error!'
    }
};
//console.log(getSleepHours('tuesday'));
const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

//console.log (getSleepHours('friday'));
//console.log (getActualSleepHours());

const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());


const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();


    if (actualSleepHours === idealSleepHours) { console.log('Perfect amount of sleep'); } else if (actualSleepHours > idealSleepHours) { console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hrs more sleep than needed'); }
    else if (actualSleepHours < idealSleepHours) { console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hrs less sleep than needed'); }
    else { console.log('Error, something went wrong.'); }
};

calculateSleepDebt();

