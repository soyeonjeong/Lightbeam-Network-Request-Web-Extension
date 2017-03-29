function logURL(requestUrl) {
  console.log("Loading: " + requestUrl.url);
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);
