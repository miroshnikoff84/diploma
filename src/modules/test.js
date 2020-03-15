// 'use strict';

// const accordionTwo = () => {
//   const panelCollapseOne = document.querySelector('#collapseOne-two'),
//         panelCollapseTwo = document.querySelector('#collapseTwo-two'),
//         panelCollapseThree = document.querySelector('#collapseThree-two');
  
//   const btn = document.querySelectorAll('.panel-heading'),
//     linkText = document.querySelectorAll(`a[data-toggle="collapse"]`),
//     inCollapse = document.querySelectorAll('.collapse');

//   for (let i = 0; i < btn.length; i++){
//     btn[i].style.cursor = 'pointer';
//   }

//   // const animAcc = (panel) => {
    
//   //     let start = Date.now();

//   //     let timer = setInterval( ()=> {
//   //       let timePassed = Date.now() - start;

//   //       panel.style.height = timePassed / 5 + 'px';

//   //       if (timePassed > 2000) {
//   //         clearInterval(timer);
//   //       } 

//   //     }, 20);
//   // };

//   btn.forEach((elem) => {
//     elem.addEventListener('click', (event) => {
//       event.preventDefault();
//       let target = event.target;
//       inCollapse[4].style.overflow = 'hidden';
//       let height = 0;

//       if (target === (btn[4]) || target === (linkText[7])) {
//         let timer = setInterval(() => {
//           let maxHeight = 136;
            
          
//           inCollapse[4].style.height = height + 'px';
//           //     inCollapse[4].style.cssText = `height: ${height}px;
//           // overflow: hidden;
//           // `;
            
//             console.log(height);
          
            
//           if (height > maxHeight) {
//             clearInterval(timer);
//         }
          
//         }, 24);
        
        
      
//       }
        
      
//     });
//   });



  
//   console.log(btn);
//   console.log(linkText);
//   console.log(inCollapse);
//   // btn.forEach((elem) => {
//   //   elem.addEventListener('click', (event) => {
//   //     event.preventDefault();
//   //     let target = event.target;

//   //     if (target === (btn[0])) {
//   //       panelCollapseOne.style.display = 'block';
//   //       panelCollapseTwo.style.display = 'none';
//   //       panelCollapseThree.style.display = 'none';
//   //     } else if (target === (btn[1])) {
//   //       panelCollapseOne.style.display = 'none';
//   //       panelCollapseTwo.style.display = 'block';
//   //       panelCollapseThree.style.display = 'none';
//   //     } else if (target === (btn[2])) {
//   //       panelCollapseOne.style.display = 'none';
//   //       panelCollapseTwo.style.display = 'none';
//   //       panelCollapseThree.style.display = 'block';
//   //     }
//   //   });
//   // });
// };

// accordionTwo();

// // const btn = document.querySelectorAll(`a[data-parent="#accordion-two"]`);
// // var disc = document.querySelectorAll('.test_disc');

// // for (var i = 0; i < btn_title.length; i++) {
// //   btn[i].addEventListener('click', fun_open);

// //   function fun_open(event) {
// //     for (var i = 0; i < btn_title.length; i++) {
// //       disc[i].classList.remove('test_disc_show');
// //       if (btn_title[i] == event.currentTarget) {
// //         disc[i].classList.toggle('test_disc_show');
// //       }
// //     }

// //   }

// // }