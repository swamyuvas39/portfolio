const bar90 = document.querySelectorAll('.bar90');
const bar85 = document.querySelectorAll('.bar85');
const bar80 = document.querySelectorAll('.bar80');
const bar75 = document.querySelectorAll('.bar75');
const bar70 = document.querySelectorAll('.bar70');
function showTransition() {
  bar90.forEach(e => {
    e.style.width = '90%'
  });

  bar85.forEach(e => {
    e.style.width = '85%'
  });

  bar80.forEach(e => {
    e.style.width = '80%'
  });
  bar75.forEach(e => {
    e.style.width = '75%'
  });
  bar70.forEach(e => {
    e.style.width = '70%'
  });
}

document.body.onscroll = () => {
  console.log(window.innerWidth);
  if (document.documentElement.scrollTop >= 350
    && window.innerWidth <= 600) {
    showTransition();
  }

  if (document.documentElement.scrollTop >= 100
    && window.innerWidth >= 600) {
    showTransition();
  }
} 