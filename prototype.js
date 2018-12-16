


// prototypy about user : //

function UserPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var user = new User();

        user.username = proto.username;
        user.email = proto.email;
        user.password = proto.password;
        user.status = proto.status;

        return user;
    };
}

function User(username, email, password, status) {

    this.username = username;
    this.email = email;
    this.password = password;
    this.status = status;

    this.say = function () {
        alert("username: " + this.username + " email: " + this.email +
            " password: " + this.password + ", status: " + this.status);
    };
}

function createUser() {

    var signup_username = document.getElementById("signup-username");
    var signup_email = document.getElementById("signup-email");
    var signup_password = document.getElementById("signup-password");
    var signup_statusRadios = document.getElementsByName("level1");
    var signup_status;


    for (i = 0; i < signup_statusRadios.length; i++) {

        if (signup_statusRadios[i].checked) {
            signup_status = signup_statusRadios[i].value;
            break;
        }
    }



    var proto = new User(signup_username.value, signup_email.value, signup_password.value, signup_status);
    var prototype = new UserPrototype(proto);

    var user = prototype.clone();
    user.say();
}