const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const SignupForm = document.getElementById("signup_form");
const SigninForm = document.getElementById("signin_form");


toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}












signUpButton.addEventListener("click", async () => {
  try {
    container.classList.add("right-panel-active");
  } catch (error) {
    console.error("Error:", error);
  }
});

signInButton.addEventListener("click", async () => {
  try {
    container.classList.remove("right-panel-active");
  } catch (error) {
    console.error("Error:", error);
  }
});

SignupForm.addEventListener("submit", SignUp);

async function SignUp(e) {
  e.preventDefault();
  try {
    const email = document.getElementById("new_user_email");
    const username = document.getElementById("new_user_name");
    const password = document.getElementById("new_user_password");

    let response = await fetch("http://barianishit.pythonanywhere.com/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });

    if (response.status !== 201 && response.status !== 400) {

      toastr["error"]("Error: Connection Failed", "Error")

      
      console.log("Could not send data");
      throw new Error("Something went wrong");
    } else if (response.status === 400) {
    
      toastr["error"]("Email is already registered", "Warning")
      throw new Error("Email is already registered");
    }

    let responseData = await response.json();

    if ("message" in responseData) {
      alert("Error: " + responseData.message);
      throw new Error(responseData.message);
    }

    const accessToken = responseData.access_token;
    const refreshToken = responseData.refresh_token;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    toastr["success"]("User Registration Successful", "Success")

    console.log(responseData);

    // Redirect to greet.html with username as a query parameter
    const greetUrl = `/greet.html?username=${encodeURIComponent(
      username.value
    )}`;
    window.location.href = greetUrl;
  } catch (error) {
    console.error("Error:", error);
  }
}

SigninForm.addEventListener("submit", Login);

async function Login(e) {
  e.preventDefault();
  try {
    const email = document.getElementById("user_email");
    const password = document.getElementById("user_password");

    const response = await axios.post("https://barianishit.pythonanywhere.com/auth/login/", {
      email: email.value,
      password: password.value,
    });
alert(response.status);
    if (response.status !== 201) {
      console.log(response);
      toastr["error"]("Error: Connection Failed", "Error")

      console.log("Could not send data");
      throw new Error("Something went wrong");
    }

    const responseData = response.data;
    console.log(responseData);
    toastr["success"]("User Logged in", "Success")

    if ("message" in responseData) {
      alert("Error: " + responseData.message);
      throw new Error(responseData.message);
    }

    const accessToken = responseData.token;
    const refreshToken = localStorage.getItem("refreshToken");
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
 

    alert("Login Successful");

    // Redirect to greet.html with username as a query parameter
    const greetUrl = `/greet.html?username=${encodeURIComponent(
      email.value
    )}`;
    window.location.href = greetUrl;
  } catch (error) {
    console.error("Error:", error);
  }
}
