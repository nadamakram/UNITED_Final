// Credit to Yehuda Katz for `fromPrototype` function
// http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
var fromPrototype = function(prototype, object) {
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
    Email: function() {
        return 'user@yahoo.com';
    },
    Password: function() {
        return 1234;
    }
};

// Extend `userFactory` with other implementations
userFactory.makeVolunteer = function() {
    return fromPrototype(userFactory, {
        Email: function() {
            return 'volunteer@yahoo.com';
        },
        Password: function() {
            return 1234;
        }
    });
};

userFactory.makeCharity = function() {
    return fromPrototype(userFactory, {
        Email: function() {
            return 'charity@yahoo.com';
        },
        Password: function() {
            return 1234;
        }
    });
};




var volunteerObject = userFactory.makeVolunteer();
console.log(volunteerObject.Email()); // returns 'retina 13 inches';

var chrityObject = userFactory.makeCharity();

function userCheck(){
    var userRegister = document.getElementById('user01');
    var volunteerRegister = document.getElementById('volunteer01')

    if(userRegister.checked == true && volunteerRegister.checked == true )
    {
        alert("You are volunteer")
    }
}
