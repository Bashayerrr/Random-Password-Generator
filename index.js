const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+';



function createPassword() {

    let password = '';
    const characters = upperCase + lowerCase + numbers + specialCharacters;

    for (let i = 0; i < length; i++) {
        const character = Math.floor(Math.random() * characters.length);
        password += characters.charAt(character);
    }

    passwordBox.value = password;
}

function copyPassword() {  
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
}
