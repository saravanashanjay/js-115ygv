
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

form.addEventListener('submit', e =>{
    e.preventDefault();

    checkinput();

})

function checkinput(){
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const confirmpasswordvalue = confirmpassword.value.trim(); 

    if(usernamevalue === ""){
      setError(username,"Username cannot be blank");
    }else{
        setSuccess(username);
    }

    if(emailvalue === ""){
      setError(email,"Email cannot be blank");
    }
    else if(!isEmail(emailvalue)){
      setError(email,"Not a valid Email");
    }
    else{
        setSuccess(email);
    }

    if(passwordvalue === ""){
      setError(password,"Password cannot be blank");
    }    
    else{
        setSuccess(password);
    }

    if(confirmpasswordvalue === ""){
      setError(confirmpassword,"Password cannot be blank");
    }
    else if(passwordvalue!==confirmpasswordvalue){
      setError(confirmpassword,"Password cannot be match");
    }
    else{
        setSuccess(confirmpassword);
    }

}

function setError(input, message){
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  formcontrol.className = 'form-control error';
  small.innerText = message;
}

function setSuccess(input){
  const formcontrol = input.parentElement;
  formcontrol.className = 'form-control success';
}

function isEmail(email){
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
}