



var i=0
function change(){
   var colors=["red","blue","green","orange","yellow","grey","black"];
   document.getElementsByTagName('body')[0].style.background=colors[i]


   if(i < colors.length-1){
    i++
   }
   else{
    i=0
   }
}