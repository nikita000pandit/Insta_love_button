let arr=[{url:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww",name:"Your story"},{url:"https://images.unsplash.com/photo-1496440737103-cd596325d314?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzJTIwcG9zZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1496440737103-cd596325d314?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzJTIwcG9zZXxlbnwwfHwwfHx8MA%3D%3D"},{url:"https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},{url:"https://images.unsplash.com/photo-1618375531912-867984bdfd87?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1618375531912-867984bdfd87?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"},{url:"https://images.unsplash.com/photo-1523260578934-e9318da58c8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzJTIwcG9zZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1523260578934-e9318da58c8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzJTIwcG9zZXxlbnwwfHwwfHx8MA%3D%3D"},{url:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww"}]
let clutter=""
let para=""
arr.forEach((val,idx)=>{
    clutter=clutter+`  <div class="abc">
    <img id="${idx}" src="${val.url}" alt="">
   </div>`
//    para=para+`<p class="para">${val.name}</p>`
})
let fullScreen=document.querySelector("#fullScreen")
console.log(clutter);
let child=document.querySelector("#child");
child.innerHTML=clutter
child.addEventListener("click",(ele)=>{
    fullScreen.style.display="block"
fullScreen.style.backgroundImage=`url(${arr[ele.target.id].story})`
setTimeout(function(){
    // fullScreen.style.transform="scale(0)"
    fullScreen.style.display="none"
},3000)
})

