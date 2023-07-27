// Handle login form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform login validation
    if (username === 'admin' && password === 'password') {
      // Successful login, redirect to bonus page
      window.location.href = 'bonus.html';
    } else {
      // Failed login, display error message
      alert('Invalid username or password.');
    }
  });
  