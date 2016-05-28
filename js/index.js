var obj = document.querySelector('.gotop');

obj.addEventListener('click', function() { 
  var time = setInterval(scrollMove, 5);
  var top = document.documentElement.scrollTop + document.body.scrollTop;
  function scrollMove() {
    setTop(top / 1.1);
    if (top < 1) {
      clearInterval(time); 
    } 
    function setTop(value) {
      top = document.documentElement.scrollTop = document.body.scrollTop = value; 
    }   
  }
})