const cards = document.querySelectorAll('.card');
    const reflections = document.querySelectorAll('.reflection');

    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('active');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
       
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        const reflection = reflections[index];
        reflection.style.transform = 'scale(0)';
      });
    });

    function handleMouseMove(event) {
      cards.forEach((card, index) => {
        if (card.classList.contains('active')) {
          const { clientX: mouseX, clientY: mouseY } = event;
          const { left, top, width, height } = card.getBoundingClientRect();
          const centerX = left + width / 2;
          const centerY = top + height / 2;

          const rotateX = ((mouseY - centerY) / height) * 20;
          const rotateY = ((mouseX - centerX) / width) * -40;

          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

          const reflection = reflections[index];
          const reflectionX = mouseX - left - reflection.offsetWidth / 2;
          const reflectionY = mouseY - top - reflection.offsetHeight / 2;

          reflection.style.transform = `translate(${reflectionX}px, ${reflectionY}px) scale(1)`;
        }
      });
    }

    document.addEventListener('mousemove', handleMouseMove);


    var nextParticle = new NextParticle(document.getElementById('logo'));
    nextParticle.particleGap = 2; 
    nextParticle.noise = 20;     
    nextParticle.mouseForce = 12; 
    nextParticle.size = 622; 
    nextParticle.colorize = false;
    nextParticle.tint = '#FF00FF'; 
    nextParticle.minWidth = 622; 
    nextParticle.minHeight = 622;
    nextParticle.maxWidth = 622; 
    nextParticle.maxHeight = 622; 
    
    var redraw = function() {
      nextParticle.particleGap = 2;
      nextParticle.noise = 20;
      nextParticle.mouseForce = 12;
      nextParticle.size = 622;
      nextParticle.initPosition = "none"; 
      nextParticle.initDirection = "none"; 
      nextParticle.fadePostion = "none";   
      nextParticle.fadeDirection = "none";
      nextParticle.minWidth = 622;
      nextParticle.minHeight = 622;
      nextParticle.maxWidth = 622;
      nextParticle.maxHeight = 622;
      nextParticle.color = nextParticle.colorize ? nextParticle.tint : ''; 
    };

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typed-text");
    const words = ["Hello, I'm", "Hola, soy", "Bonjour, je suis", "Hallo, ich bin", "Ciao, sono", "こんにちは、私は", "안녕하세요, 저는"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function typeEffect() {
      const currentWord = words[wordIndex];
      const displayText = currentWord.substring(0, charIndex) || '\u00A0'; 
      
      textElement.textContent = displayText;
    
      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 500);
      }
    }
    
    typeEffect();
  });

const links = document.querySelectorAll('a');

links.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    
    cursor.style.width = '40px';
    cursor.style.height = '40px';
    cursor.style.backgroundColor = '#ff006e'; 
  });

  link.addEventListener('mouseleave', () => {
    
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.backgroundColor = '#E100FF'; 
  });
});

window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.loader-overlay').style.opacity = '0';
    
    setTimeout(function() {
      document.querySelector('.loader-overlay').style.display = 'none';
      
      document.querySelector('.content').style.display = 'block';
    }, 1000);  
  }, 1500);  
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.taste-but');
  const contentBoxes = document.querySelectorAll('.content-box');
  let currentActiveBox = null;

  const showContent = (target) => {
    
    contentBoxes.forEach(box => {
      box.classList.remove('show'); 
      box.style.display = 'none'; 
    });

    const targetBox = document.getElementById(target);

    if (target === 'cinema') {
      targetBox.style.display = 'grid'; 
    } else {
      targetBox.style.display = 'grid'; 
    }

    
    setTimeout(() => {
      targetBox.classList.add('show'); 
    }, 10);

    currentActiveBox = targetBox;
  };

  const updateActiveButton = (target) => {
    buttons.forEach(button => {
      button.classList.remove('active'); 
    });

    
    const activeButton = Array.from(buttons).find(button => button.getAttribute('data-target') === target);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      showContent(target);
      updateActiveButton(target); 
    });
  });

  showContent('cinema');
  updateActiveButton('cinema'); 
});

gsap.utils.toArray(".stb_line_single").forEach((line, i) => {
  const links = line.querySelectorAll("a"),
    tl = horizontalLoop(links, {
      repeat: -1,
      speed: 1.5,  
      reversed: i % 2 === 0 ? false : true,  
      paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px"))
    });
  
  links.forEach((link) => {
    link.addEventListener("mouseenter", () =>
      gsap.to(tl, { timeScale: 0, overwrite: true })
    );
    link.addEventListener("mouseleave", () =>
      gsap.to(tl, { timeScale: i % 2 === 0 ? 1 : -1, overwrite: true })
    );
  });
});



function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), 
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    }
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          )
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); 
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

function scrollToSection(event, offset) {
  event.preventDefault(); 
  
  
  const target = event.target.getAttribute('href') === '#' ? document.body : document.getElementById(event.target.getAttribute('href').substring(1));
  
  
  const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
  
  window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth' 
  });
}