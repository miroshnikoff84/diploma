'use strict';

const modalWindow = require('./modules/modalWindow'),
  addBlocks = require('./modules/addBlocks'),
  accordionTwo = require('./modules/accordion'),
  accordionCalc = require('./modules/accordionCalc'),
  mySendFormCalc = require('./modules/mySendFormCalc');


modalWindow();
accordionCalc();
addBlocks();
accordionTwo();
mySendFormCalc.start();