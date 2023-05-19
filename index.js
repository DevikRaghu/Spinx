window.addEventListener('scroll', function() {
    var header = document.querySelector('.top-bar');
   
    
    if (window.scrollY > 0) {
      header.classList.add('top-bar-white', 'top-bar-small');
    } else {
      header.classList.remove('top-bar-white', 'top-bar-small');
    }
  });
  



  window.addEventListener('scroll', function() {
    var parallaxImage = document.querySelector('.parallax1');
    var scrollPosition = window.pageYOffset;
  
    parallaxImage.style.transform = 'translate3d(0, ' + (scrollPosition * -0.3) + 'px, 0)';
  });
  

  window.addEventListener('scroll', function() {
    var parallaxImage = document.querySelector('.parallax2');
    var scrollPosition = window.pageYOffset;
  
    parallaxImage.style.transform = 'translate3d(0, ' + (scrollPosition * -0.2) + 'px, 0)';
  });
  
  window.addEventListener('scroll', function() {
    var parallaxImage = document.querySelector('.parallax3');
    var scrollPosition = window.pageYOffset;
  
    parallaxImage.style.transform = 'translate3d(0, ' + (scrollPosition * -0.3) + 'px, 0)';
  });



 



  window.onscroll = () => {
   
    if (window.scrollY >= 3900 && window.scrollY <= 4300) {
      const text2 = document.getElementById('tt-2');
      text2.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${window.scrollY - 3900}, 0, 1)`;
    }

   

    if (window.scrollY >= 2980 && window.scrollY <= 3450) {
      const text1 = document.getElementById('tt-1');
      text1.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${window.scrollY - 2980}, 0, 1)`;
    }
    if (window.scrollY >= 4780 && window.scrollY <= 5160) {
      const text3 = document.getElementById('tt-3');
      text3.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${window.scrollY - 4780}, 0, 1)`;

    }

    if (window.scrollY >= 5116 && window.scrollY <= 6111) {
      const elements = document.getElementsByClassName('iii');
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.transform = `translateX(${window.scrollY - (5800)}px)`;
      }
    }

    if (window.scrollY >= 5200 && window.scrollY <= 6300) {
      const elementso = document.getElementsByClassName('i11');
      for (let i = 0; i < elementso.length; i++) {
        elementso[i].style.transform = `translateX( ${ (5900) - window.scrollY  }px)`;
      }
    }
    
    if (window.scrollY >= 6800 && window.scrollY <= 7780) {
      const elements = document.getElementsByClassName('abcdef');
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.transform = `translateX(${window.scrollY - (7500)}px)`;
      }
    }
    if (window.scrollY >= 6900 && window.scrollY <= 7900) {
      const elementso = document.getElementsByClassName('abcdefg');
      for (let i = 0; i < elementso.length; i++) {
        elementso[i].style.transform = `translateX( ${ (7650) - window.scrollY  }px)`;
      }
    }

    if (window.scrollY >= 1800) {
      const elementso = document.getElementsByClassName('cards');
      for (let i = 0; i < elementso.length; i++) {
        elementso[i].style.animation = `slideup1 1s ease  1  both`;
      }
    }

    if (window.scrollY >= 1700) {
      const elementso = document.getElementsByClassName('tle');
      for (let i = 0; i < elementso.length; i++) {
        elementso[i].style.animation = `slideup1 1s ease  1  both`;
      }
    }

    if (window.scrollY >= 7900) {
      const element = document.getElementsByClassName('h11');
      for (let i = 0; i < element.length; i++) {
        element[i].style.animation = `slideup1 1s ease  1  both`;
      }
    }

    if (window.scrollY >= 8000) {
      const element = document.getElementsByClassName('c11');
      for (let i = 0; i < element.length; i++) {
        element[i].style.animation = `slideup1 1s ease  1  both`;
      }
    }

   

   
    
   
  }



  
  document.getElementById('button1').addEventListener('click', function(event) {
    event.preventDefault();
  
    var content = document.getElementById('pp1');
    if (content.style.display === 'none') {
      content.style.display = 'block'; 
    } else {
      content.style.display = 'none'; 
    }
    
   
  });
  





  document.getElementById('button2').addEventListener('click', function(event) {
    event.preventDefault();
  
    var content = document.getElementById('pp2');
    if (content.style.display === 'none') {
      content.style.display = 'block'; 
    } else {
      content.style.display = 'none'; 
    }
    
   
  });
  document.getElementById('button3').addEventListener('click', function(event) {
    event.preventDefault();
  
    var content = document.getElementById('pp3');
    if (content.style.display === 'none') {
      content.style.display = 'block'; 
    } else {
      content.style.display = 'none'; 
    }
    
   
  });
  document.getElementById('button4').addEventListener('click', function(event) {
    event.preventDefault();
  
    var content = document.getElementById('pp4');
    if (content.style.display === 'none') {
      content.style.display = 'block'; 
    } else {
      content.style.display = 'none'; 
    }
    
   
  });
  document.getElementById('button5').addEventListener('click', function(event) {
    event.preventDefault();
  
    var content = document.getElementById('pp5');
    if (content.style.display === 'none') {
      content.style.display = 'block'; 
    } else {
      content.style.display = 'none'; 
    }
    
   
  });
  document.getElementById('button6').addEventListener('click', function(event) {
    event.preventDefault();
  
    var content = document.getElementById('pp6');
    if (content.style.display === 'none') {
      content.style.display = 'block'; 
    } else {
      content.style.display = 'none'; 
    }
    
   
  });
  
  
  
  
  
 


 



  
  

  