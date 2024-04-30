window.addEventListener("load",()=>{
    {
        var tabs = document.querySelectorAll("#tabs-buttons > *");
        for(let i = 0;i < tabs.length;i++){
            tabs[i].addEventListener("click",()=>{changeTab(i);});
        }
    }
});

function closePopup(id = "popup"){
    document.getElementById(id).classList.remove("active");
}

function changeTab(n){
    var tabs = document.querySelectorAll("#tabs-container > div.tab");
    for(let i = 0;i < tabs.length;i++){
        tabs[i].classList.remove("active");
        if(i == n){
            tabs[i].classList.add("active");
        }
    }
    if(n > 2){
        n -= 3;
    }
    tabs = document.querySelectorAll("#tabs-buttons > *");
    for(let i = 0;i < tabs.length;i++){
        tabs[i].classList.remove("active");
        if(i == n){
            tabs[i].classList.add("active");
        }
    }

}

function addVideo()
{
    $($('#videos-edit-list').find('input,textarea').slice(0, 3).get().reverse()).each(function (i) {
        var c = $(this).clone();
        c.val('');
        $('#videos-edit-list').prepend(c);
    });
    $('#videos-edit-list').prepend('<div class="btn-delete" onClick="removeVideo(event)"></div>');
}

function addSchool()
{
    $($('#school-edit-list').find('input').slice(0, 5).get().reverse()).each(function (i) {
        var c = $(this).clone();
        c.val('');
        $('#school-edit-list').prepend(c);
    });
    $('#school-edit-list').prepend('<div class="btn-delete" onClick="removeSchool(event)"></div>');
}

function addCarier()
{
    $($('#carier-edit-list').find('input,select').slice(0, 7).get().reverse()).each(function (i) {
        var c = $(this).clone();
        c.val('');
        if (c.prop('tagName').toLowerCase() == 'select') {
            c.val(0);
        }
        $('#carier-edit-list').prepend(c);
    });
    $('#carier-edit-list').prepend('<div class="btn-delete" onClick="removeCarier(event)"></div>');
}

function removeCarier(e)
{
    _remove(7, e);
}

function removeSchool(e)
{
    _remove(5, e);
}

function removeVideo(e)
{
    _remove(3, e);
}

function _remove(n, e)
{
    var target = e.target;

    for (let i = 0; i < n; i++){
        target.nextElementSibling.remove();
    }
    target.remove();
}

var toursSliderInd = -1;

function toursSliderInit(){
    var items = document.querySelectorAll("#tours-list .tour-item");
    items[0].classList.add("active");
    toursSliderInd = 0;
}
function toursSliderNext(ind = 1){
    var items = document.querySelectorAll("#tours-list .tour-item");
    var container = document.querySelector("#tours-list");
    items[toursSliderInd].classList.remove("active");
    toursSliderInd+= ind;
    if(toursSliderInd < 0) toursSliderInd = items.length - 1;
    if(toursSliderInd > items.length - 1) toursSliderInd = 0;
    items[toursSliderInd].classList.add("active");

    var totalWidth = (items[0].clientWidth + 15) * (items.length + 1);
    var currentMargin = toursSliderInd * (items[0].clientWidth + 15);

    if(totalWidth - container.clientWidth > currentMargin){
        var offset = toursSliderInd;
        // if(offset > items.length - ) offset = items.length;
        items[0].style.marginLeft = (`calc(-${offset * items[0].clientWidth}px - ${offset * 15}px)`)
    }else{
        items[0].style.marginLeft = (`calc(-${totalWidth - container.clientWidth}px)`)
    }
}
function tourSlideMoveto(ind = 0){
    toursSliderNext((toursSliderInd - ind) * -1);
}

function forecastNumberInput(elem, dir){
    var inp = elem.parentNode.querySelector("input[type='number']");
    inp.value = (parseInt(inp.value) || 0) + dir;
}

function closeThisPopup(elem){
    while(elem.classList.contains("modal") == false && elem != document.body){
        elem = elem.parentNode;
    }
    if(elem != document.body){
        elem.classList.remove("active");
    }
}

function openModal(id){
    document.getElementById(id).classList.add("active");
}