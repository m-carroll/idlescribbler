
function makeTopnavResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className = "topnav responsive";
    } else {
        x.className = "topnav";
    }
    var y = document.getElementById("cover");
    if (y.className === "nonresponsivecover") {
        y.className = "responsivecover";
    } else {
        y.className = "nonresponsivecover";
    }    
}
