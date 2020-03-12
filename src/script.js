'use strict';

const modalWindow = () => {
  const btnAlertModal = (btn, popupWindow, popupWindowContent, form) => {

    let count = 0;
    btn.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
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
        count = 0;
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