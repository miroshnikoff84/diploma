'use strict';
const modalWindow = () => {
  const btnAlertModal = (btn, popupWindow, popupWindowContent, form) => {

    btn.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();

        if (form) {
          for (const elem of form.elements) { //вытаскиваем из формы инпуты
            if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
              elem.value = ''; //очищаем инпуты
              if (elem.style.border === '2px solid red') {
                elem.style.border = '';
              }
              //убираем required
              if (elem.hasAttribute('required')) {
                elem.removeAttribute('required');
              }
            }
          }
        }
        popupWindow.style.display = 'block';
        popupWindowContent.style.cssText = `border: 2px solid #90c406; box-shadow: 2px 4px 10px #222`;
      });
    });

    popupWindow.addEventListener('click', (event) => {
      const popupNone = () => {
        popupWindow.style.display = 'none';
      };
      let target = event.target;
      if (target.matches('.popup-close')) {
        event.preventDefault();
        popupNone();
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popupNone();
        }
      }
    });
  };
  //Popup-call
  const popupCall = () => {
    const popupCall = document.querySelector('.popup-call'),
      callBtn = document.querySelectorAll('.call-btn'),
      popupContentCall = document.querySelectorAll('.popup-content')[0],
      callForm = document.querySelectorAll('.capture-form')[1];

    btnAlertModal(callBtn, popupCall, popupContentCall, callForm);
  };
  popupCall();

  //Popup-discount
  const popupDiscount = () => {
    const btnDiscount = document.querySelectorAll('.discount-btn'),
      popupDiscount = document.querySelector('.popup-discount'),
      popupContentDiscount = document.querySelectorAll('.popup-content')[1],
      discountForm = document.querySelectorAll('.capture-form')[2];

    btnAlertModal(btnDiscount, popupDiscount, popupContentDiscount, discountForm);
  };
  popupDiscount();
};

modalWindow();

//addBlocks
const addBlocks = () => {
  const shadowBlocks = document.querySelectorAll(`.col-xs-12.col-sm-6.col-md-4`),
    btnAddSentence = document.querySelector('.add-sentence-btn');


  btnAddSentence.addEventListener('click', (event) => {
    event.preventDefault();
    shadowBlocks.forEach((elem) => {
      if (elem.matches('.visible-sm-block') || elem.matches('.hidden')) {
        elem.classList.remove('visible-sm-block', 'hidden');
        btnAddSentence.style.cssText = `transform: scale(0)`;
      }

    });

  });

};

addBlocks();

//accordionTwo

const accordionTwo = () => {

  const btnAccordionTwo = document.querySelectorAll(`a[data-parent="#accordion-two"]`),
    collapseOne = document.querySelector('.collapseOne'),
    collapseTwo = document.querySelector('.collapseTwo'),
    collapseThree = document.querySelector('.collapseThree');


  const sailOpacityTwo = (panelCollapse) => { //плавное появление
    let count = 30;
    let panelInterval;
    const panelOpacityTwo = function () {
      panelInterval = requestAnimationFrame(panelOpacityTwo);
      count++;
      if (count <= 100) { //уменьшаем прозрачность
        panelCollapse.style.opacity = count + '%';
      } else {
        cancelAnimationFrame(panelInterval);
      }
    };
    panelOpacityTwo();
  };

  btnAccordionTwo.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();

      if (elem.closest('#headingOne-two')) {

        if (collapseOne.style.display === 'none') {
          collapseOne.style.display = 'block';
          sailOpacityTwo(collapseOne);
          collapseTwo.style.display = 'none';
          collapseThree.style.display = 'none';

        } else {
          collapseOne.style.display = 'block';
        }
      }

      if (elem.closest('#headingTwo-two')) {

        if (collapseTwo.style.display === 'block') {
          collapseTwo.style.display = 'block';
        } else {
          collapseOne.style.display = 'none';
          collapseTwo.style.display = 'block';
          sailOpacityTwo(collapseTwo);
          collapseThree.style.display = 'none';
        }
      }

      if (elem.closest('#headingThree-two')) {

        if (collapseThree.style.display === 'block') {
          collapseThree.style.display = 'block';
        } else {
          collapseOne.style.display = 'none';
          collapseTwo.style.display = 'none';
          collapseThree.style.display = 'block';
          sailOpacityTwo(collapseThree);
        }
      }
    });

  });

};

accordionTwo();





