// localstorageに関わる関数を持つオブジェクト
var Storage = {
    getJs: function() {
        var isInsertJs = localStorage.getItem('js-inserter-is-insert-js');
        if (isInsertJs) {
            return localStorage.getItem('js-inserter-js-text');
        } else {
            return null;
        }
    }
};


chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    callback(Storage.getJs());
});



// ボタンによってjsの挿入をon/offする
var buttonState = false;

function disableBrowserAction() {
    chrome.browserAction.setIcon({ path: "imgs/inactive.png" });
    localStorage.removeItem('js-inserter-is-insert-js');
    chrome.tabs.executeScript(null, { file: "show_inactive_alert.js" });
}

function enableBrowserAction() {
    chrome.browserAction.setIcon({ path: "imgs/active.png" });
    localStorage.setItem('js-inserter-is-insert-js', true);
    chrome.tabs.executeScript(null, { file: "show_active_alert.js" });
    chrome.tabs.executeScript(null, { file: "contentscript.js" });
}

function updateState() {
    if (buttonState === false) {
        buttonState = true;
        enableBrowserAction();
    } else {
        buttonState = false;
        disableBrowserAction();
    }
}

chrome.browserAction.onClicked.addListener(updateState);
