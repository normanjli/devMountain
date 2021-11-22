/*jslint browser:true */
"use strict";

const avgDailyKW = (element) => {
  let annualUse = 0;
  let months = document.getElementById(element).getElementsByTagName(`input`);

  for (let i = 0; i < months.length; i++) {
    annualUse += Number(months[i].value);
  }
  return annualUse / 365;
};

const sunShineReqmt = () => {
  switch (document.forms.solarForm.zone.selectedIndex) {
    case 0:
      return 6;
    case 1:
      return 5.5;
    case 2:
      return 5;
    case 3:
      return 4.5;
    case 4:
      return 4.2;
    case 5:
      return 3.5;
    default:
      return 0;
  }
};
const panelChoice = () => {
  return [document.forms.solarForm.panel.options[document.forms.solarForm.panel.selectedIndex].text,+document.forms.solarForm.panel.options[document.forms.solarForm.panel.selectedIndex].value]
};
const calculateSolar = ()=>{
  let dailyKW = avgDailyKW(`mpc`)
  let sunHours = sunShineReqmt()
  let minKW = (dailyKW/sunHours)*1.25
  let panelInfo=panelChoice()
  var panelsNeeded = Math.ciel((minKW*1000)/panelInfo[1])
  return panelsNeeded
}