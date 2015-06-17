// localstorageに関わる関数を持つオブジェクト
var Storage = {
    getJs: function() {
        return localStorage.getItem('js-inserter-js-text');
    }
};


chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    callback(Storage.getJs());
});
