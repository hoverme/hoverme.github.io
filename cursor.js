const cursor = document.querySelector('#cursor');
document.addEventListener('mousemove' , e => {
          cursor.setAttribute("style", "top:"+(e.pageY -15) + "px; left:"+(e.pageX-17)+"px;")
})
