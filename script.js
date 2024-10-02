// Password toggle functionality
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Toggle the eye icon
    const eyeIcon = type === 'password' 
        ? 'https://img.icons8.com/ios-glyphs/30/closed-eye'
        : "closed.png";
    togglePassword.setAttribute('src', eyeIcon);
});
