var checkPaywall = setInterval(function() {
  var modal = document.querySelector('.tp-modal');
  
  if(modal) {
    var modalBackground = document.querySelector('.tp-backdrop');
    var pageBody = document.querySelector('body');
    
    modal.style.display = 'none';
    modalBackground.style.display = 'none';
    pageBody.style.overflow = 'visible!important';

    clearInterval(checkPaywall);
  } else {
    console.log('No paywall detected.');
  }
}, 1000);

var readingEnabler = setInterval(function() {
  var modalOpenLayer = document.querySelector('.tp-modal-open');
  var suscriptionModal = document.querySelector('.full-suscriptor-container');
  var paywallContent = document.querySelector('.content-not-granted-paywall');
  
  if(modalOpenLayer) {
    modalOpenLayer.classList.remove('tp-modal-open');
    console.log('Paywall modal disabled. Happy reading!');
  }
  
  if(suscriptionModal && paywallContent) {
    suscriptionModal.style.display = 'none';
    paywallContent.style.display = 'block';
    console.log('Paywall disabled. Happy reading!');
  }

  if(modalOpenLayer && paywallContent) {
    clearInterval(readingEnabler);
  }

}, 1000);

// Remove all listeners
var librePressDisabler = setTimeout(function() {
  clearInterval(checkPaywall);
  clearInterval(readingEnabler);
}, 15000);
