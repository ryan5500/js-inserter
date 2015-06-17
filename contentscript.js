chrome.runtime.sendMessage({ action: 'getJs' }, function(js) {
    if (js) {
        $(function() {
            var script = document.createElement("script");
            script.innerHTML = js;
            document.body.insertBefore(script, document.body.firstChild);
        });
    }
});
