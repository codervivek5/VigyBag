const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const SignupForm = document.getElementById("signup_form");
const SigninForm = document.getElementById("signin_form");

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

    let response = await fetch("http://127.0.0.1:8000/auth/register/", {
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

    if (response.status !== 200 && response.status !== 400) {
      alert("Error: Connection Failed");
      console.log("Could not send data");
      throw new Error("Something went wrong");
    } else if (response.status === 400) {
      alert("Email is already registered");
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

    alert("Registration Successful");
    console.log(responseData);

    // Redirect to greet.html with username as a query parameter
    const greetUrl = `http://127.0.0.1:5501/greet.html?username=${encodeURIComponent(
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

    const response = await axios.post("http://127.0.0.1:8000/auth/login/", {
      email: email.value,
      password: password.value,
    });

    if (response.status !== 201) {
      console.log(response);
      alert("Error: Connection Failed");
      console.log("Could not send data");
      throw new Error("Something went wrong");
    }

    const responseData = response.data;
    console.log(responseData);

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
    const greetUrl = `http://127.0.0.1:5501/greet.html?username=${encodeURIComponent(
      email.value
    )}`;
    window.location.href = greetUrl;
  } catch (error) {
    console.error("Error:", error);
  }
}
