export default class Password {
    constructor(chars) {
        const { length, included, excluded } = chars;
        const { min, special, big, small, numbs } = length;
        const countNeededChars = special + big + small + numbs

        this.missingCharacters = min - countNeededChars;
        this.chars = chars;
        this.filteredChars = this.filterChars();
    }

    static availableChars() {
        return [
            '!@#$%^&*()_+-=[]{}|;:\'",.<>?',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'abcdefghijklmnopqrstuvwxyz',
            '0123456789'
        ]
    }

    filterChars() {
        const availableChars = Password.availableChars();
        const excludedChars = [...new Set(this.chars?.excluded)];
        const includedChars = [...new Set(this.chars?.included)];
        const filteredChars = [];

        for (const char of availableChars) {
            const item = [...char].filter(c => !excludedChars.includes(c)).filter(c => !includedChars.includes(c)).join("");
            filteredChars.push(item);
        }

        return filteredChars;
    }

    static randomCharFromString(str = '', numIterations) {
        return Array(numIterations).fill().map(() => str[Math.floor(Math.random() * str.length)]).join('');
    }

    static randomIntBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomStringFromChars(length) {
        const { special, small, big, numbs } = this.chars.length;
        const loops = [special, big, small, numbs];
        const possibleStrings = loops.map((value, index) => value > 0 ? index : null).filter(index => index !== null);
        let randomString = this.chars.included || '';

        for (let i = 0; i < length; i++) {
            const index = Password.randomIntBetween(0, possibleStrings.length - 1);
            const value = possibleStrings[index];
            randomString += Password.randomCharFromString(this.filteredChars[value], 1);
        }
    
        return randomString;
    }
    
    buildPasswordString() {
        const { min, special, small, big, numbs } = this.chars.length;
        const loops = [special, big, small, numbs];
        let string = this.chars.included || '';
    
        for (let i = 0; i < this.filteredChars.length; i++) {
            string += Password.randomCharFromString(this.filteredChars[i], loops[i]);
        }
    
        if (this.missingCharacters > 0) {
            string += this.randomStringFromChars(this.missingCharacters);
        }
    
        return Password.shuffleChars(string);
    }
    
    static shuffleChars(chars) {
        return [...chars].sort(() => Math.random() - 0.5).join('');
    }
    
    getPassword() {
        return this.buildPasswordString();
    }
}    