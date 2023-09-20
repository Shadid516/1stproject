// abc()
ayylmao();

var a = "Test";
var b = a.toLowerCase();
document.write(b);

function abc() {
    var c = prompt("Insert your name");
    var a = confirm("Do you think that you are a human?");
    document.write(a);
    if (a) {
        alert("ok " + c);
    } else {
        alert("X for doubt");
        alert(c + " is giving major robot vibes");
    }
}
function ayylmao() {
    var a = {
        firstname: 'Jaloppy',
        lastname: 'Mills',
        age: 69,
        xd: true
    };

    // Using a for...in loop to iterate through object properties
    for (const key in a) {
        document.write(key + ': ' + a[key] + '<br>');
    }

    // Using Object.values() to get an array of object values and forEach to iterate through them
    Object.values(a).forEach(function (value) {
        document.write(value + '<br>');
    });
}