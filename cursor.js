const cur = document.querySelector('#cursor');
document.addEventListener('mousemove' , e => {
          cur.setAttribute("style", "top:"+(e.pageY -15) + "px; left:"+(e.pageX-17)+"px; transition: .1s")
          console.log(e);
})

// const con = document.querySelector('.crsr');
// document.addEventListener('', q=>{
//      cur.setAttribute("style", "visibility: none")
// })
