let wi =document.getElementById("wi");
let ham =document.getElementById("ham");
let vo =document.getElementById("vo");
let kl =document.getElementById("kl");

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    wi.style.left = value * -0.5 + 'px';
    ham.style.left = value * -0.1 + 'px';
    vo.style.left = value * 0.1 + 'px';
    kl.style.left = value * 0.5 + 'px';
    }
);

/* tried to pause hover*/
$("#onabout").one("mouseover", function(){
    $("#onabout").addClass('hed');
});
