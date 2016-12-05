// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});

// {
//   "manifest_version": 2,

//   "name": "Getting started example",
//   "description": "This extension shows a Google Image search result for the current page",
//   "version": "1.0",

//   "browser_action": {
//     "default_icon": "icon.png",
//     "default_popup": "popup.html"
//   },
//   "permissions": [
//     "activeTab",
//     "https://ajax.googleapis.com/"
//   ]
// }