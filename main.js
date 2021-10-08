function getpassword() {
    var chars = "0123456789abcdefghijklmnopkqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><{}[]";
    var passwordlength = 8;
    var password = " ";

    for (var i=0;i<passwordlength;i++) {
        var randomnumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomnumber,randomnumber+1);
    }
    document.getElementById("password").value = password
}