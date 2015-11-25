chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.tabs.executeScript(null, {
        file: "site-js/" + request.site.hostname + request.site.pathname.replace(new RegExp(/\//g), '&').replace(/\.\w+$/, '') + ".js"
    });
    sendResponse({
        msg: "ok"
    })
});
