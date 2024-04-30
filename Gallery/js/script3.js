function closeAdvertiserInfo(node){
    node.classList.remove("active");
}

var advs = document.querySelectorAll(".pbl-adv");
for (var i = 0;i < advs.length; i++) {
    advs[i].addEventListener("click",(e)=> {
        var ads = document.querySelectorAll(".pbl-adv-info");
        for (var j = 0;j < ads.length; j++) {
            ads[j].classList.remove("active");
        }
        e.target.parentNode.querySelector(".pbl-adv-info").classList.add("active");
    });
}