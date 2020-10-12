// Listen for a submit
document.querySelector(".contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  sendEmail(name, email, message);

  document.querySelector(".contactForm").reset();
}

function sendEmail(name, email, message) {
    Email.send({
        SecureToken: "adc113ed-c213-4d68-9b60-76ecdb3f3440",
        To : "dhahm01@gmail.com",
        From : email,
        Subject : `${name} reaching out via website`,
        Body : message
    }).then(
        message => alert("mail sent successfully")
    );
}