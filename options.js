$(function() {
    var jsText = localStorage.getItem('js-inserter-js-text');

    if (jsText) { $('#js-text').val(jsText); }

    $(document).on('click', '#put', function() {
        var jsText = $('#js-text').val();
        localStorage.setItem('js-inserter-js-text', jsText);

        alert("設定を保存しました。次に開くページからjsが挿入されるようになります。");
    });
});
