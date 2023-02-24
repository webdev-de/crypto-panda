export default class Password {

    constructor(chars) {
        const { length, included, excluded } = chars;
        const { min, special, big, small, numbs } = length;
        const countNeededChars = special + big + small + numbs

        this.missingCharacters = min - countNeededChars;
        this.chars = chars;
    }

    // Definiert ein Array mit allen verfügbaren Zeichen
    static availableChars() {
        return [
            '!@#$%^&*()_+-=[]{}|;:\'",.<>?',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'abcdefghijklmnopqrstuvwxyz',
            '0123456789'
        ]
    }

    // Filtert die Zeichen, die ausgeschlossen oder enthalten sein sollen
    static filteredChars() {
        const availableChars = Password.availableChars();
        const excludedChars = [...new Set(this.chars?.excluded)];
        const includedChars = [...new Set(this.chars?.included)];
        const filteredChars = [];

        for (const char of availableChars) {
            const item = [...char].filter(c => ![...excludedChars].includes(c)).filter(c => ![...includedChars].includes(c)).join("");
            filteredChars.push(item);
        }

        return filteredChars;
    }

    // Erzeigt eine anzahl zufällig gewählter Zeichen aus einem String
    static randomCharFromString(str = '', numIterations) {
        return [...Array(numIterations)].map(() => str[Math.floor(Math.random() * str.length)]).join('');
    }

    static randomIntBetween(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    randomStringFromChars(length) {
        // Auswahl der Strings die größer als 0 sind um
        const array = Object.values(this.chars.length);
        array.shift(); // Entfernt das erste Element 
        const filteredChars = Password.filteredChars();
        let randomString = this.chars.included;

        const possibleStrings = array.map((value, index) => value > 0 ? index : null).filter(index => index !== null);

        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * possibleStrings.length);
            const value = possibleStrings[index];

            randomString += Password.randomCharFromString(filteredChars[value], 1);
        }

        return randomString;
    }

    buildPasswordString() {
        // Erzeigt eine zeichenkette anhand der Parameter 
        const { min, special, small, big, numbs } = this.chars.length;
        const loops = [special, big, small, numbs];
        const filteredChars = Password.filteredChars();
        let string = this.chars.included ?? '';

        for (let i = 0; i < filteredChars.length; i++) {
            string += Password.randomCharFromString(filteredChars[i], loops[i]);
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
        //return this.missingCharacters
        const passwordString = this.buildPasswordString();
        return passwordString;
    }
}