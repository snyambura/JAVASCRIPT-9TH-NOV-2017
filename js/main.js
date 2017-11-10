
//Javascript functions

function submit_by_id() {
    var rent = parseInt(document.getElementById("rent").value);
    var waterbill =parseInt(document.getElementById("waterbill").value);
    var elecbill = parseInt(document.getElementById("elecbill").value);
    var netbill = parseInt(document.getElementById("netbill").value);


    document.getElementById("form_id").submit(); //form submission

// closure

        function showDetails() {
            var total = (rent + waterbill + elecbill + netbill);

            alert(" Rent : " + rent + " \n Water : " + waterbill + " \n Electricity : " + elecbill +
                " \n Internet : "+ netbill  + "\n\n Total is " + total);

        }


        showDetails();
        expenses.showDetails();
    }


//object
 var expenses = {

    rent : 100000,
    elecbill : 2000,
    waterbill : 1000,
    netbill : 5000,


    addexpenses : function () {
        return (this.rent + this.waterbill + this.elecbill + this.netbill);

    },

    showDetails : function () {
        console.log(" Rent : " + this.rent + " \n Water : " + this.waterbill + " \n Electricity : " + this.elecbill +
            " \n Internet : "+ this.netbill + "\n Total: " + this.addexpenses());

    }





};
expenses.netbill = 200;


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
    device.call(this, product, model, size, manufacturer);

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



