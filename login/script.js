const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const SignupForm = document.getElementById("signup_form");
const SigninForm =document.getElementById("signin_form");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

SignupForm.addEventListener("submit", SignUp)

async function SignUp(e) {
  e.preventDefault();
  const email = document.getElementById("new_user_email");
  const username = document.getElementById("new_user_name");
  const password = document.getElementById("new_user_password");
  //console.log(username.value);

  try {
    let response = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username.value,
        'email': email.value,
        'password': password.value
      })
    });
    if (response.status !== 200 && response.status!==400) {
      alert('Error: Connection Failed');
      console.log("could not send data");
      throw new Error('Something went wrong');
    }
    else if(response.status===400)
    {
      alert('Email is already registered');
      throw new Error('Email is already registered');
    }
    let responseData = await response.json();

    if('message' in responseData)
    {
      alert('Error: '+responseData.message);
      throw new Error(responseData.message);
    }

    const accessToken = responseData.access_token;
    const refreshToken = responseData.refresh_token;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken',refreshToken);
    alert('Registration Successfull');

  } catch (error) {
    console.error('Error:', error)
  }

}

SigninForm.addEventListener("submit",Login)

async function Login(e){
  e.preventDefault();
  const email =document.getElementById("user_email");
  const password = document.getElementById("user_password");
  console.log(email.value);
  try{
    let response = await fetch('http://127.0.0.1:8000/api/login/',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        'email': email.value,
        'password': password.value
      })
    });

    if(response.status!==200)
    {
      alert('Error: Connection Failed');
      console.log("could not send the data");
      throw new Error('Something went wrong');
    }
    
    let responseData = await response.json();
    
    if('message' in responseData)
    {
      alert('Error: '+responseData.message);
      throw new Error(responseData.message);
    }

    const accessToken = responseData.access_token;
    const refreshToken = responseData.refresh_token;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken',refreshToken);
    
    alert('Login Successfull');
  }catch(error){
    console.error('Error:',error)
  }
}