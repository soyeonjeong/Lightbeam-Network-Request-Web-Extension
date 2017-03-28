let {WebRequest} = Cu.import("resource://gre/modules/WebRequest.jsm", {});

WebRequest.onBeforeRequest.addListener(logURL);

function logURL(e) {
  console.log("LOADING: " + e.url);
}
