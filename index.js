const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = "~`! @#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

const passwordBox = document.getElementById('password');
const generateButton = document.querySelector('.js-generate-button');

generateButton.addEventListener('click', () => {
    passwordBox.value = randomPassword();
})

const copyButton = document.getElementById('copyInput');
copyButton.addEventListener('click', () => {
    copyText();
});

const randomPassword = () => {
    let password = '';

    while (password.length < length) {
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return password;

}

const copyText = () => {
    const copyPassword = passwordBox;
    copyPassword.select();
    copyPassword.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyPassword.value);

    // alert('copied!');
}
