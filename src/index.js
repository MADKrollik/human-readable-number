module.exports = function toReadable(number) {
    let strNumber = number.toString();
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decimals = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number === 0) {
        return units[0];
    }
    if (number > 0 && number < 20) {
        return units[number];
    };
    if (number > 19 && number < 100) {
        if (number % 10 === 0) {
            return decimals[strNumber[0]];
        } return decimals[strNumber[0]] + ' ' + units[strNumber[1]];
    };
    if (number > 99 && number < 1000) {
        if (number % 100 === 0) {
            return units[strNumber[0]] + ' ' + 'hundred';
        } else if (number % 10 === 0) {
            return units[strNumber[0]] + ' ' + 'hundred' + ' ' + decimals[strNumber[1]];
        }
        else if (strNumber[1] == 1) {
            return units[strNumber[0]] + ' ' + 'hundred' + ' ' + units[strNumber[1] + strNumber[2]];
        } else if (strNumber[1] == 0) {
            return units[strNumber[0]] + ' ' + 'hundred' + ' ' + units[strNumber[2]];
        } return units[strNumber[0]] + ' ' + 'hundred' + ' ' + decimals[strNumber[1]] + ' ' + units[strNumber[2]];
    };
}

