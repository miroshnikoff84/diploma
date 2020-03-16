'use strict';

// const accordionTwo = () => {

//   const btn = document.querySelectorAll(`a[data-parent="#accordion-two"]`);
//     const panelCollapseOne = document.querySelector('#collapseOne-two'),
//         panelCollapseTwo = document.querySelector('#collapseTwo-two'),
//     panelCollapseThree = document.querySelector('#collapseThree-two');
//   console.log(btn);


//   const slideAdd = (panelCollapse, collapseHeight) => { //плавное появление
//     let count = 0;
//     let panelInterval;
//     const panelOpacityTwo = function () {
//       panelInterval = requestAnimationFrame(panelOpacityTwo);
//       count = count + 3;
//       if (count <= collapseHeight) { 

//         panelCollapse.style.maxHeight = count + 'px';
//       } else {
//         cancelAnimationFrame(panelInterval);
//       }
//     };
//     panelOpacityTwo();
//   };
//   const slideKill = (panelCollapse, collapseHeight) => { //плавное появление
//     let count = collapseHeight;
//     let panelInterval;
//     const panelOpacityTwoo = function () {
//       panelInterval = requestAnimationFrame(panelOpacityTwoo);
//       count = count - 3;
//       if (count <= collapseHeight) { 

//         panelCollapse.style.maxHeight = count + 'px';
//       } else {
//         cancelAnimationFrame(panelInterval);
//       }
//     };
//     panelOpacityTwoo();
//   };

//   btn.forEach((elem) => {
//     elem.addEventListener('click', (event) => {
//       event.preventDefault();
//       let target = event.target;

      

//         if (target === (btn[0])) {
//           panelCollapseOne.style.display = 'block';
//           slideAdd(panelCollapseOne, 138);
//         slideKill(panelCollapseTwo, 138);
//         slideKill(panelCollapseThree,  138);
//       } else if (target === (btn[1])) {
//         panelCollapseTwo.style.display = 'block';
//         slideAdd(panelCollapseTwo, 138);
//         slideKill(panelCollapseOne, 138);
//         slideKill(panelCollapseThree, 138);
//       } else if (target === (btn[2])) {
//         panelCollapseThree.style.display = 'block';
//         slideAdd(panelCollapseThree, 138);
//         slideKill(panelCollapseOne, 138);
//         slideKill(panelCollapseTwo, 138);
//       }
      
//     });

//   });

// };

// accordionTwo();

const accordionTwo = () => {

  const btn = document.querySelectorAll(`a[data-parent="#accordion-two"]`);
    const panelCollapseOne = document.querySelector('#collapseOne-two'),
        panelCollapseTwo = document.querySelector('#collapseTwo-two'),
    panelCollapseThree = document.querySelector('#collapseThree-two');

  const slideAdd = (panelCollapse, collapseHeight) => { //плавное появление
    let count = 0;
    let panelInterval;
    let curentHeight;
    const panelOpacityTwo = function () {
      panelInterval = requestAnimationFrame(panelOpacityTwo);
      curentHeight = count;
      count = count + 5;
      if (count <= collapseHeight) { 

        panelCollapse.style.maxHeight = count + 'px';
      } else {
        cancelAnimationFrame(panelInterval);
      }
    };
    panelOpacityTwo();
  };
  const slideKill = (panelCollapse, collapseHeightDown) => { //плавное убывание
    let count = collapseHeightDown;
    let panelInterval;
    const panelOpacityTwoo = function () {
      panelInterval = requestAnimationFrame(panelOpacityTwoo);
      count = count - 5;
      if (count <= collapseHeightDown) { 

        panelCollapse.style.maxHeight = count + 'px';
      } else {
        cancelAnimationFrame(panelInterval);
      }
    };
    panelOpacityTwoo();
  };

  btn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      panelCollapseTwo.style.maxHeight = 0 + 'px';
      panelCollapseThree.style.maxHeight = 0 + 'px';

      

      if (target === (btn[0]) && panelCollapseOne.style.maxHeight === 0 + 'px') {
          panelCollapseOne.style.display = 'block';
        slideAdd(panelCollapseOne, 140);
        slideKill(panelCollapseTwo, 140);
          slideKill(panelCollapseThree, 140);
      } else if (target === (btn[1]) && panelCollapseTwo.style.maxHeight === 0 + 'px') {
        panelCollapseTwo.style.display = 'block';
        slideAdd(panelCollapseTwo, 140);
        panelCollapseOne.style.maxHeight = 0 + 'px';
        slideKill(panelCollapseOne, 140);
          slideKill(panelCollapseThree, 140);
      } else if (target === (btn[2]) && panelCollapseThree.style.maxHeight === 0 + 'px') {
        panelCollapseThree.style.display = 'block';
        slideAdd(panelCollapseThree, 140);
        panelCollapseOne.style.maxHeight = 0 + 'px';
        slideKill(panelCollapseOne, 140);
          slideKill(panelCollapseTwo, 140);
      }
      
    });

  });

};

accordionTwo();