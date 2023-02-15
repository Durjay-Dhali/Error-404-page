// add animation to the error text
const errorText = document.querySelector('.error-text');
errorText.style.opacity = 0;
errorText.style.transform = 'translateY(-50px)';

setTimeout(() => {
    errorText.style.opacity = 1;
    errorText.style.transform = 'translateY(0)';
}, 500);
