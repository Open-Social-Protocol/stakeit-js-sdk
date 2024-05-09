// 获取iframe url
// 不跨域：parent.location或top.location
// 跨域：document.referrer
function getParentUrl() {
  let url = window.location.origin;
  if (parent !== window) {
    try {
      url = parent.location.href;
        }
    catch (e) {
      url = document.referrer;
     }
   }
  return url;
}

function isIOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

function isInIframe() {
  return window.location.origin !== getParentUrl();
}

export { isInIframe, isIOS };
