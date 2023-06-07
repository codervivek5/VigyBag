const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const SignupForm = document.getElementById("signup_form");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

SignupForm.addEventListener("submit",SignUp)

async function SignUp(e){
  e.preventDefault();
  const email = document.getElementById("new_user_email");
  const username = document.getElementById("new_user_name");
  const password = document.getElementById("new_user_password");
  console.log(username.value);

  let response = fetch('http://127.0.0.1:8000/api/token/',{
    method:'POST',  
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      'username':username.value,
      
    })
  })

}
