import Crypto from './Crypto.js';
import Password from './Password.js';

export default class CryptoPanda {
    #salt = "panda";
    #settings = { length: { min: 4, special: 4, big: 4, small: 4, numbs: 4 }, included: null, excluded: null };

    constructor(panda) {
        if (panda) {
            Object.assign(this, panda);
        }
    }

    get salt() {
        return this.#salt;
    }

    set salt(value) {
        this.#salt = value;
    }

    get settings() {
        return this.#settings;
    }

    set settings(value) {
        this.#settings = value;
    }

    crypto(salt) {
        return new Crypto(salt || this.salt);
    }

    password(settings) {
        return new Password(settings || this.settings);
    }
}