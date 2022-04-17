var w= ($("body").width());
var radius=20*w/400;
if(radius>=33.3333){
   radius=33.3333;
}
console.log(w);
var side_bar_toggle_i=0;
$(".side_bar_toggle").click(function (){
   if((side_bar_toggle_i%2)==0){
      $(".toggle_shape1").css({
         "transform":"translateY(0) rotateZ(45deg)"
      });
      $(".toggle_shape2").css({
         "transform":"translateY(0) rotateZ(-45deg)"
      });
      aside_on();
   }
   if((side_bar_toggle_i%2)==1){
      $(".toggle_shape1").css({
         "transform":"translateY(-200%) rotateZ(0deg)"
      });
      $(".toggle_shape2").css({
         "transform":"translateY(200%) rotateZ(0)"
      });
      aside_off()
   }
   side_bar_toggle_i++;
});
function aside_on(){
   let x=50;
   let y=10;
   let h= 100-2*y;
   $("aside").css({
      "transform":"translate("+x+"vw,"+y+"vh)",
      "height":h+"vh",
      "border-radius":radius+"px"
   });
}
function aside_off(){
   $("aside").css({
      "transform":"translate(0,0)",
      "height":"100vh",
      "border-radius":radius+"px 0 0 0"
   });
}
if($(".side_bar_toggle").width()==100){
   $(".side_bar_toggle").css({
      "border-radius":"33.33px"
   });
}
aside_off();
