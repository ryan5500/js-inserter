chrome.runtime.sendMessage({ action: 'getJs' }, function(js) {
    if (js) {
        $('body').append(js);
    }
});
