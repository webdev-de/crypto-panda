import CryptoPanda from './classes/CryptoPanda.js';
const panda = new CryptoPanda();
panda.salt = "Panda123"
panda.settings = {
    length:
    {
        min: 4,
        special: 3,
        big: 3,
        small: 1,
        numbs: 1
    },
    included: null,
    excluded: null
}

const cryptoPanda = panda.crypto();
const passPanda = panda.password();

const password = passPanda.getPassword()
const encrypted = cryptoPanda.encrypted(password);
const decrypted = cryptoPanda.decrypted(encrypted);

console.log('\nPassword:\t', password);
console.log('Encrypted:\t', encrypted);
console.log('Decrypted:\t', decrypted);