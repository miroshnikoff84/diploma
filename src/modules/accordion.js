'use strict';

const accordionTwo = () => {
  const panelCollapseOne = document.querySelector('#collapseOne-two'),
        panelCollapseTwo = document.querySelector('#collapseTwo-two'),
        panelCollapseThree = document.querySelector('#collapseThree-two');
  
  const btn = document.querySelectorAll(`a[data-parent="#accordion-two"]`);
  btn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;

      if (target === (btn[0])) {
        panelCollapseOne.style.display = 'block';
        panelCollapseTwo.style.display = 'none';
        panelCollapseThree.style.display = 'none';
      } else if (target === (btn[1])) {
        panelCollapseOne.style.display = 'none';
        panelCollapseTwo.style.display = 'block';
        panelCollapseThree.style.display = 'none';
      } else if (target === (btn[2])) {
        panelCollapseOne.style.display = 'none';
        panelCollapseTwo.style.display = 'none';
        panelCollapseThree.style.display = 'block';
      }
    });
  });
};

module.exports = accordionTwo;