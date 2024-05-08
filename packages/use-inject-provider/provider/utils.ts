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

function isInIframe() {
  return window.location.origin !== getParentUrl();
}

export { isInIframe };
