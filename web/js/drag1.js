var dragging=false; 
 
 
window.onload=function() 
{ 
     
     
    $("#container").fadeToggle(300); 
     
    var dragger=document.getElementById("draggingObject"); 
    dragger.style.left=window.innerWidth/2-dragger.offsetWidth/2+"px"; 
    dragger.style.top=window.innerHeight-dragger.offsetWidth+"px"; 
    var draggerParent=document.getElementById("moverParent"); 
    var xDist,yDist; 
    var drop=document.getElementById("drop"); 
 
 
    function dropable() 
    { 
 
 
        if(dragger.offsetLeft<drop.offsetLeft+drop.offsetWidth && 
           dragger.offsetLeft+dragger.offsetWidth>drop.offsetLeft&& 
           dragger.offsetTop<drop.offsetTop+drop.offsetHeight && 
           dragger.offsetTop+dragger.offsetHeight>drop.offsetTop) 
             return true; 
         
 
        return false; 
 
 
    } 
 
    function dragStart(e) 
    { 
        dragging=true; 
        xDist=e.clientX-dragger.offsetLeft; 
        yDist=e.clientY-dragger.offsetTop; 
    } 
 
    function dragEnd(e) 
    { 
        dragging=false; 
        dragger.style.opacity=1; 
        dragger.style.boxShadow="none"; 
        dragger.style.height=120+"px"; 
        dragger.style.width=120+"px"; 
 
        $("#drop").css("border-radius","43%"); 
      
 
 
        if(dropable()) 
            { 
                dragger.style.left=drop.offsetLeft+20+"px"; 
                dragger.style.top=drop.offsetTop+20+"px"; 
                $("#dropIcon").hide(); 
                $("#dropTxt").hide(); 
            } 
 
        else 
            { 
                dragger.style.top=window.innerHeight-dragger.offsetWidth+"px"; 
                dragger.style.left=window.innerWidth/2-dragger.offsetWidth/2+"px";      
                $("#dropIcon").show(500); 
                $("#dropTxt").hide(500); 
            } 
             
             
             
    } 
 
    dragger.addEventListener("mousedown",dragStart); 
    window.addEventListener("mousemove",function(e) 
    { 
        if(!dragging) 
           return; 
         
        var mouseX=e.clientX; 
        var mouseY=e.clientY; 
         
        draggingEffect(); 
     
        dragger.style.top=mouseY-yDist+"px"; 
        dragger.style.left=mouseX-xDist+"px"; 
    }); 
    window.addEventListener("mouseup",dragEnd); 
 
 
 
     
    //For Android devices 
 
 
     dragger.addEventListener("touchstart",dragStart); 
      
     
      
     dragger.addEventListener("touchmove",function(e){ 
          
       e.preventDefault(); 
       e = e.changedTouches[0]; 
      
      
       this.style.left = e.pageX-xDist + "px"; 
       this.style.top = e.pageY-yDist + "px"; 
       
       draggingEffect(); 
        
    } ); 
     
     
     
     
    function draggingEffect() 
    { 
         
         
         
        dragger.style.boxShadow="1px 1px 5px 1px rgba(0,0,0,0.7)"; 
        dragger.style.height=130+"px"; 
        dragger.style.width=130+"px"; 
        dragger.style.opacity=0.7; 
        $("#drop").css("border-radius","10%"); 
 
 
         
         
 
        if(dropable()) 
            { 
               drop.style.backgroundColor="rgba(0,0,0,0.5)"; 
               $("#dropIcon").hide(500); 
               $("#dropTxt").show(300); 
                
            } 
        else 
            { 
                drop.style.backgroundColor="rgba(0,0,0,0.3)"; 
                $("#dropIcon").show(500); 
                $("#dropTxt").hide(500); 
                 
            } 
         
    } 
     
     
     
    window.addEventListener("touchend",dragEnd); 
     
 
     
} 
 

