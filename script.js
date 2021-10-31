// When you scroll down 80px from the top of the doc, navbar resizes padding and logo's fotn size
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementsByClassName("navbar")[0].style.padding = "40px 10px";
            document.getElementById("logo").style.fontSize = "25px";
        } else {
            document.getElementsByClassName("navbar")[0].style.padding = "90px 10px";
            document.getElementById("logo") .style.fontSize = "35px";
        }
     }

