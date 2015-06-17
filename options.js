$(function() {
    var jsText = localStorage.getItem('js-inserter-js-text');

    if (jsText) { $('#js-text').val(jsText); }

    $(document).on('click', '#put', function() {
        var jsText = $('#js-text').val();
        localStorage.setItem('js-inserter-js-text', jsText);

        alert("設定を保存しました。右上に追加された赤いボタンをタップし、緑にするとjsの挿入が始まります。");
    });
});
