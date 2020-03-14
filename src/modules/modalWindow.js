'use strict';

const modalWindow = () => {
  const btnAlertModal = (btn, popupWindow, popupWindowContent, form) => {
    

    btn.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
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
  

module.exports = modalWindow;