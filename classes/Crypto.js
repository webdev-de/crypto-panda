export default class Crypto {
    constructor(salt) {
        this.salt = salt;
    }

    /**
     * @name encrypted
     * @param {String} pswd - Passwo
     * @description
     * @returns kööl
     */
    encrypted(pswd) {
        return pswd.split("")
            .map((c) => c.charCodeAt(0))
            .map((code) => this.textToChars(this.salt)
            .reduce((a, b) => a ^ b, code))
            .map(this.byteHex)
            .join("");
    }

    /**
     * @name decrypted
     * @param {String} encoded 
     * @description
     * @returns 
     */
    decrypted(encoded) {
        return encoded.match(/.{1,2}/g)
            .map((hex) => parseInt(hex, 16))
            .map((code) => this.textToChars(this.salt)
            .reduce((a, b) => a ^ b, code))
            .map((charCode) => String.fromCharCode(charCode))
            .join("");
    }

    /**
     * @name textToChars
     * @description
     * @param {*} text 
     * @returns 
     */
    textToChars(text) {
        return text.split("").map((c) => c.charCodeAt(0));
    }

    /**
     * @name byteHex
     * @description
     * @param {*} text 
     * @returns 
     */
    byteHex(num) {
        // Convert the number to a hexadecimal string
        const hex = num.toString(16);
        // If the string has only one character, add a leading 0 - Otherwise, return the string as is
        return hex.length === 1 ? `0${hex}` : hex;
    };
}