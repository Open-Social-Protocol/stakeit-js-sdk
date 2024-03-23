function isInIframe() {
  return window.location !== window.parent?.location;
}

export { isInIframe };
