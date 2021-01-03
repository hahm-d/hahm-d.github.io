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
        SecureToken: "796825c1-0203-4e8f-a429-4274cee7cebc",
        To : "dhahm01@gmail.com",
        From : email,
        Subject : `${name} reaching out via website`,
        Body : message
    }).then(function(response){
        if(response == 'OK'){
            message => alert("mail sent successfully")  
        }else{
            throw new Error('ERROR: ' + response)
        }
    })
}