
//Javascript functions

function submit_by_id() {
    var rent = document.getElementById("rent").value;
    var waterbill = document.getElementById("waterbill").value;
    var elecbill = document.getElementById("elecbill").value;
    var netbill = document.getElementById("netbill").value;

    {
        document.getElementById("form_id").submit(); //form submission

// closure

        function showDetails() {
            console.log(" Rent : " + rent + " \n Water : " + waterbill + " \n Electricity : " + elecbill +
                " \n Internet : "+netbill  + "\n\n Form Submitted Successfully......");

        }
        showDetails();
    }

    var myFunc = submit_by_id();
    myFunc();

}


//constructor pattern
function device(product, model, size){
    this.product=product;
    this.model = model;
    this.size=size;

    this.laptopname = function () {
        console.log(this.product + " " + this.model + " " + this.size)

    }
}

//to create objects
var laptop = new device("Macbook", "Pro", "15 inch");
laptop.laptopname();



// prototype pattern
function Device() {
    Device.prototype.product = "MacBook";
    Device.prototype.model = "Pro";
    Device.prototype.size = "13 inch";
    Device.prototype.manufacturer = "Apple";
    Device.prototype.laptopname = function () {
        console.log(this.product + " " + this.model + " " + this.size);
    };
}

var laptop = new Device();
console.log(laptop.laptopname ());


//inheritance
var ClassA = function() {
    this.name = "class A";
}

ClassA.prototype.print = function() {
    console.log(this.name);
}

var a = new ClassA();

a.print();

var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

//Inheritance
//Parent
function Person(first, last, age, gender) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
};

//child - inherits and has additional properties
function Child(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender);

    this.subject = subject;
    this.interests = interests
}