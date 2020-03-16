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

  //Popup-check
  const popupCheck = () => {
    const btnCheck = document.querySelectorAll('.gauging-button'),
      popupCheck = document.querySelector('.popup-check'),
      popupContentCheck = document.querySelectorAll('.popup-content')[2],
      checkForm = document.querySelectorAll('.capture-form')[3];

    btnAlertModal(btnCheck, popupCheck, popupContentCheck, checkForm);
  };
  popupCheck();

  //Popup-consultation
  const popupConsultation = () => {
    const btnConsultation = document.querySelectorAll('.consultation-btn'),
      popupConsultation = document.querySelector('.popup-consultation'),
      popupContentConsultation = document.querySelectorAll('.popup-content')[3],
      consultationForm = document.querySelectorAll('.capture-form')[4];

    btnAlertModal(btnConsultation, popupConsultation, popupContentConsultation, consultationForm);
  };
  popupConsultation();
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

//accordionCalc

const accordionCalc = () => {
  const btnAccordion = document.querySelectorAll(`a[data-parent="#accordion"]`),
    collapseOneId = document.getElementById('collapseOne'),
    collapseTwoId = document.getElementById('collapseTwo'),
    collapseThreeId = document.getElementById('collapseThree');
  let collapseFourId = document.getElementById('collapseFour');

  btnAccordion.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      //One
      if (elem.closest('#headingOne')) {
        if (collapseOneId.style.display === 'none') {
          collapseOneId.style.display = 'block';
          collapseTwoId.style.display = 'none';
          collapseThreeId.style.display = 'none';
          collapseFourId.style.display = 'none';

        } else {
          collapseOneId.style.display = 'block';
        }
      }
      //Two
      if (elem.closest('#headingTwo') || elem.matches('.btnOne')) {

        if (collapseTwoId.style.display === 'block') {
          collapseTwoId.style.display = 'block';

        } else {
          collapseOneId.style.display = 'none';
          collapseTwoId.style.display = 'block';
          collapseThreeId.style.display = 'none';
          collapseFourId.style.display = 'none';
        }
      }
      //Three
      if (elem.closest('#headingThree') || elem.matches('.btnTwo')) {

        if (collapseThreeId.style.display === 'block') {
          collapseThreeId.style.display = 'block';

        } else {
          collapseOneId.style.display = 'none';
          collapseTwoId.style.display = 'none';
          collapseThreeId.style.display = 'block';
          collapseFourId.style.display = 'none';
        }
      }
      //Four
      if (elem.closest('#headingFour') || elem.matches('.btnThree')) {

        if (collapseFourId.style.display === 'block') {
          collapseFourId.style.display = 'block';

        } else {
          collapseOneId.style.display = 'none';
          collapseTwoId.style.display = 'none';
          collapseThreeId.style.display = 'none';
          collapseFourId.style.display = 'block';
        }
      }

    });

  });

};

accordionCalc();