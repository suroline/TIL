window.addEventListener('DOMContentLoaded', function(e){
  var presentation = document.querySelector('hp-presentation');

  presentation.onclick = handlePresentationClick;
  //presentation.addEventListener('animationed', handleAnimationEnd, false);
});

function handlePresentationClick(e){
  var current = document.querySelector('hp-slide.active');
  var next = current.nextElementSibling;

  if(next) {
    current.classList.remove('active');
    next.classList.add('active');

    next.querySelectorAll('.match')(function(el){
      setTimeout(function(){ 
        el.classList.remove('match'); 
      }, 0);
    });

    var aa = parseInt(next.getAttribute('data-autoadvance'));

    if (!isNaN(aa)) {
      setTimeout(function (e) {
        handlePresentationClick(e);
      }, aa);
    }

    var osa = next.getAttribute('data-onshow');
    if (osa) {
      window[osa]();
    }
  }
}