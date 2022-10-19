let button = document.getElementById('button');
button.addEventListener('click',e => {
    
  let username = document.querySelector('#username').value;
  let password = document.querySelector('#password').value;
  let email = document.querySelector('#email').value;
  let options = document.querySelector('#options').value;
  let date = document.querySelector('#date').value;
  
  let error = '';

  if (username === '') {
    error = 'Username cannot be empty';
  }
  else if (username.length <= 6){
    error = 'Username length must be more than 6';
  }
  else if(password === ''){
    error = 'Password cannot be empty';
  }
  else if(password.length <= 8){
    error = 'Password length must be more than 8 characters';
  }
  else if(email === ''){
    error = 'Email cannot be empty';
  }
  else if(options === 'blank'){
    error = 'Please enter your region';
  }
  else if (date === ''){
    error = 'Please input your date of birth\n\n(Months, date, and year must be filled)';
  }
  if(error !== '') {
    alert(error);
  }
  else{
    alert('Success');
  }

});