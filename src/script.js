'use strict';

const modalWindow = () => {
  const btnAlertModal = (btn, popupWindow, popupWindowContent, form) => {

    btn.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        if (form) {
          for (const elem of form.elements) {
            if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
              elem.value = '';
              if (elem.style.border === '2px solid red') {
                elem.style.border = '';
              }
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

      const countPopupNone = () => {
        popupWindow.style.display = 'none';
      };
      let target = event.target;
      if (target.matches('.popup-close')) {
        countPopupNone();
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          countPopupNone();
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

  

};

modalWindow(); 

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

const accordion = () => {
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

accordion();