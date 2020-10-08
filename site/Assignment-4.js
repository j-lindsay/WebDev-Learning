function printConvo() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var jCheck = names[i].charAt(0).toUpperCase();
        if (jCheck === 'J') {
            console.log("Goodbye " + names[i]);
        }
        else {
            console.log("Hello " + names[i]);
        }
    }
}