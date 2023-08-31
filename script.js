var div1Visible = false;
var div2Visible = false;

function ClickMe1() {
    var div1 = document.getElementById("div1");
    div1Visible = !div1Visible;
    div1.style.display = div1Visible ? "block" : "none";
}

const div2 = document.getElementById("div2");
const btn2 = document.getElementById("button2");

function ClickMe2() {
    div2Visible = !div2Visible;
    div2.style.display = div2Visible ? "none" : "block";
}

btn2.addEventListener("click", ClickMe2());

const div1re = document.getElementById("div1");
const btn4 = document.getElementById("button4");

btn4.addEventListener("click", function() {
    div1re.style.display = "none";
});

const div2re = document.getElementById("div2");
const btn5 = document.getElementById("button5");

btn5.addEventListener("click", function() {
    div2re.style.display = "none";
});

const body = document.querySelector("body")
window.addEventListener("load", function() {
    div2.style.display = div2Visible ? "block" : "none"
});

//body.style.backgroundColor = "lavender"

// btn2.addEventListener("click", function() {
//     div2Visible = !div2Visible;
//     div2.style.display = div2Visible ? "block" : "none";
// });

// function ClickMe2() {
//     var div2 = document.getElementById("div2");
//     div2Visible = !div2Visible;
//     div2.style.display = div2Visible ? "block" : "none";
// }

// const closeMenus = document.getElementsByClassName("btn4");

// var n;
// for (n = 0; n < closeMenus.length; n++) {
//     closeMenus[n].addEventListener("click", function() {
//         this.style.backgroundColor = "blue";
//     })
// }