

var mySingleton = (function () {

    function init(options) {
        //some private variables
        var email = 'smn@yahoo.com', password = "123admin"
        //return public methods(accessing private variables if needed.)
        return {
            Email: email,
            Password: password
        }
    }
    //There must be exactly one instance of a class, 
    //and it must be accessible to clients from a well-known access point
    var instanceOfSingleton;
    return {
        initialize: function (options) {
            //initialize only if not initialized before
            if (instanceOfSingleton === undefined) {
                instanceOfSingleton = init(options);
            }
            return instanceOfSingleton;
        }
    };

})();


var AdminSingleton = mySingleton.initialize();
var hisEmail = console.log(AdminSingleton.Email);
var hisPass = console.log(AdminSingleton.Password);
/*alert(AdminSingleton.Email + " " +  "and" + " "  + AdminSingleton.Password); */




/* Factory Code */

var fromPrototype = function (prototype, object) {
    var newObject = Object.create(prototype);
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            newObject[prop] = object[prop];
        }
    }
    return newObject;
};


// Define our `userFactory` base object
var userFactory = {
    Email: function () {
        return 'user@yahoo.com';
    },
    Password: function () {
        return 1234;
    }
};

// Extend `userFactory` with other implementations
userFactory.makeVolunteer = function () {
    return fromPrototype(userFactory, {
        Email: function () {
            return 'volunteer@yahoo.com';
        },
        Password: function () {
            return "123volunteer";
        }
    });
};

userFactory.makeCharity = function () {
    return fromPrototype(userFactory, {
        Email: function () {
            return 'charity@yahoo.com';
        },
        Password: function () {
            return "123charity";
        }
    });
};




var volunteerObject = userFactory.makeVolunteer();
console.log(volunteerObject.Email());

var chrityObject = userFactory.makeCharity();

function AdminCheck() {
    var registerType = document.getElementsByName('registration');
    var adminRegister = document.getElementById("admin1");
    var emailSee = console.log(document.getElementsByName('email').value);
    var passwordSee = console.log(document.getElementsByName('password').value);

    var userRegister = document.getElementById('user01');
    var volunteerRegister = document.getElementById('volunteer01');
    var charityRegister = document.getElementById('charity01');

    if (adminRegister.checked == true &&
        emailSee == hisEmail &&
        passwordSee == hisPass) {
        alert("You are the admin!")
        /* var formPrevent =  document.getElementById("myForm").preventDefault();*/
    }

    else if (userRegister.checked == true && volunteerRegister.checked == true) {
        alert("You are volunteer")
    }

    else if (userRegister.checked == true && charityRegister.checked == true) {
        alert("You are charity")
    }

    else {
        alert("Error!");
    }

}

function loginCheck() {

    var loginEmail = document.getElementById("login-email");
    var loginPassword = document.getElementById("login-password");

    if (loginEmail.value==AdminSingleton.Email && loginPassword.value==AdminSingleton.Password){
        alert("Wlecome admin");
    }
    else if (loginEmail.value==volunteerObject.Email() && loginPassword.value==volunteerObject.Password()){
        alert("Wlecome volunteer");
    }
    else if (loginEmail.value==chrityObject.Email() && loginPassword.value==chrityObject.Password()){
        alert("Wlecome charity");
    }
    else{
        alert("Erorr, Please Sign Up");
    }

}