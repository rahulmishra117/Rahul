var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
        console.log(targetSection);
        var interval=setInterval(function(){
            var targetsectionCoordinate=targetSection.getBoundingClientRect();
            if(targetsectionCoordinate.top<=0){
                clearInterval(interval);
                return ;

            }
            window.scrollBy(0,50);
        },20);
    });
}