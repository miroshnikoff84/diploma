'use strict';

const accordionTwo = () => {
  const panelCollapseOne = document.querySelector('#collapseOne-two'),
        panelCollapseTwo = document.querySelector('#collapseTwo-two'),
        panelCollapseThree = document.querySelector('#collapseThree-two');
  
  const btn = document.querySelectorAll('.panel-heading'),
    panel = document.querySelectorAll('.panel-body');

  for (let i = 0; i < btn.length; i++){
    btn[i].style.cursor = 'pointer';
  }

  const animAcc = () => {
    
      let start = Date.now();

      let timer = setInterval( ()=> {
        let timePassed = Date.now() - start;

        panel.style.height = timePassed / 5 + 'px';

        if (timePassed > 2000) {
          clearInterval(timer);
        } 

      }, 20);
  };

  btn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;

      if (target === (btn[4])) {
        console.log('rrrrrrrrrr');
      }
    });
  });



  
  console.log(btn);
  // btn.forEach((elem) => {
  //   elem.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     let target = event.target;

  //     if (target === (btn[0])) {
  //       panelCollapseOne.style.display = 'block';
  //       panelCollapseTwo.style.display = 'none';
  //       panelCollapseThree.style.display = 'none';
  //     } else if (target === (btn[1])) {
  //       panelCollapseOne.style.display = 'none';
  //       panelCollapseTwo.style.display = 'block';
  //       panelCollapseThree.style.display = 'none';
  //     } else if (target === (btn[2])) {
  //       panelCollapseOne.style.display = 'none';
  //       panelCollapseTwo.style.display = 'none';
  //       panelCollapseThree.style.display = 'block';
  //     }
  //   });
  // });
};

accordionTwo();

// const btn = document.querySelectorAll(`a[data-parent="#accordion-two"]`);
// var disc = document.querySelectorAll('.test_disc');

// for (var i = 0; i < btn_title.length; i++) {
//   btn[i].addEventListener('click', fun_open);

//   function fun_open(event) {
//     for (var i = 0; i < btn_title.length; i++) {
//       disc[i].classList.remove('test_disc_show');
//       if (btn_title[i] == event.currentTarget) {
//         disc[i].classList.toggle('test_disc_show');
//       }
//     }

//   }

// }