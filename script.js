const regform = document.getElementById('regform');
if (regform) {
  regform.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    
    if (username === '' || password ===  '' || email ===  "" || city === "" || phone.length <= 11) {

        alert('Please fill in all required fields!'); 
    } else {
        window.location.href = 'Login.html';
      alert('Register Successful! Redirecting to Login Page');
    }
  });
}

const loginf = document.getElementById('loginf');
if (loginf) {
  loginf.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (username === '' || password === '' || email === '') {
        alert('Please fill in all required fields!'); 
        return false;
    } else {
        window.location.href = 'Homepage.html';
      alert('Login Successful! Redirecting to homepage');
    }
  });
}
