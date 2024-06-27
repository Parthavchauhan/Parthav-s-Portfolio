// const form = document.querySelector('form');

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var body = "Name: " + name + "<br/>Email: " + email + "<br/>Subject: " + subject + "<br/>Message: " + message; 

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "projectw504@gmail.com",
        Password: "E3CAF15E7E07C7C548C7F4AA14F4F1C1439D",
        To: "forparthavchauhan@gmail.com",
        From: "projectw504@gmail.com",
        Subject: "This is the subject",
        Body: body
    }).then(
        message =>{
            if(message == "OK"){
                swal({
                    title: "Successfull",
                    text: "Your Data Successfully Received",
                    icon: "success",
                    button: "OK",
                  });
            }
            else{
                swal({
                    title: "Something Went Wrong",
                    text: "Your Data is not Successfully Received",
                    icon: "error",
                    button: "OK",
                  });
            }
        }
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})

// Showing and hiding the button's
function Hidebutton(){
    var ReadMore = document.getElementById('Read-morebtn');
    ReadMore.style.display = "none";

    var showless = document.getElementById('show-less');
    var para = document.getElementById('hide-para');

    para.style.display = "block";
    showless.style.display = "block";
}

function showbutton(){
    var ReadMore = document.getElementById('Read-morebtn');
    ReadMore.style.display = "block";

    var showless = document.getElementById('show-less');
    showless.style.display = "none";

    var para = document.getElementById('hide-para');
    para.style.display = "none";

}