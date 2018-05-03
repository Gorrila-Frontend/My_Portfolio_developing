window.onload = init

let expand = false

function init () {
  const photo = document.querySelector('#photo')
  photo.addEventListener('click', (e) => {
    toggleExpand()
  })
  Particles.init({
    selector: '#canvas',
    maxParticles: 300,
    color: '#cccccc',
    connectParticles: true,
  grab: {
    distance: 500,
    line_linked: {
      opacity: 1
    }
  },
  })
}

function toggleExpand () {
  if (!expand) {
    document.getElementById('left-block').className = 'expanded';
    document.getElementById('right-block').className = 'expanded';
    expand = true
  } else if (expand) {
    document.getElementById('left-block').className = '';
    document.getElementById('right-block').className = '';
    expand = false
  }
}
$(document).ready(function(){
  $('.materialboxed').materialbox();
});
      
