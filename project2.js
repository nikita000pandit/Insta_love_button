//Instagram Love button
let Click=document.querySelector("img");
let icon=document.querySelector("i");
Click.addEventListener("click",function(){
    document.querySelector("i").style.transform="translate(-250%,-50%) scale(1.5)"
    document.querySelector("i").style.color="red"
    // document.querySelector("i").style.transition="all ease 5s"
  //setTimeout is an in-built function of browser not a javaScript. In simple words, setTimeout delays something for some milliseconds
  setTimeout(function(){
    // document.querySelector("i").style.transform="translate(-250%,-50%) scale(0)"
    document.querySelector("i").style.opacity=0;
    // document.querySelector("i").style.transition="3s"
  },500)
})

//pending:
//transition: transform ease 2s;
//.opacity