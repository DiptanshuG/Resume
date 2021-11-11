var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var interval;
// console.log(navMenuAnchorTags);
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID)
        console.log(targetSection);
       
         interval=setInterval(scrollVertically,10,targetSection);
    });
}
function scrollVertically(targetSection){
    
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}

var progressBar=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars(){
    for (let bar of progressBar){
        bar.style.width=0+'%';
    }
}

initialiseBars();

function fillBars(){
    for(let bar of progressBar){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+ '%';
        },6)

    }

}


function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight){
        animationDone=true;
        console.log('skill section visible');
        fillBars();}
    else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialiseBars();


    }


}
