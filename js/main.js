
//Javascript functions

function submit_by_id() {
    var rent = document.getElementById("rent").value;
    var waterbill = document.getElementById("waterbill").value;
    var elecbill = document.getElementById("elecbill").value;
    var netbill = document.getElementById("netbill").value;


        document.getElementById("form_id").submit(); //form submission

// closure

        function showDetails() {
            alert(" Rent : " + rent + " \n Water : " + waterbill + " \n Electricity : " + elecbill +
                " \n Internet : "+netbill  + "\n\n Form Submitted Successfully......");

        }

        function showtotal () {
            alert("Total is " + this.addex);
            console.log("trial");

        }


        showtotal();
        showDetails();
    }


//object
var expenses = {

    rent : 100000,
    elecbill : 2000,
    waterbill : 1000,
    netbill : 5000,


    showDetails : function () {
        console.log(" Rent : " + rent + " \n Water : " + waterbill + " \n Electricity : " + elecbill +
            " \n Internet : "+netbill  + "\n\n Form Submitted Successfully......");

    },

    addexpenses : function () {
        return this.rent + this.waterbill + this.elecbill + this.netbill;

    },

    showtotal : function (){
        this.showDetails()
        console.log("Total is " + this.addexpenses());

        console.log("trial");

    }


}


//constructor pattern
//Inheritance - Parent
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


//child - inherits and has additional properties
function phone(product, model, size) {
    Person.call(this, product, model, size, manufacturer);

    this.manufacturer = manufacturer;
    this.laptopname = function () {
        console.log(this.product + " " + this.model + " " + this.size + " " + this.manufacturer)
    }
}


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
laptop.laptopname ();



