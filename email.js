function emailSend(){

    var userName = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var message = document.getElementById('Message').value;

    var messageBody = "Name " + userName +
    "<br/> Email " + email + 
    "<br/> Message "+ message;
 
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "unofficial.kanish@gmail.com",
        Password : "20784983F90049CA92BFFE8A108A7F4F349C",
        To : 'kanishkqrk@gmail.com',
        From : "unofficial.kanish@gmail.com",
        Subject : "New Contact Form",
        Body : messageBody
    }).then(
      message => alert(message)
    );
    
}