// コンパイルされた（実際に読み込まれる）jsファイル
console.log('読まれてる');

$(function(){
    // ハンバーガーメニュートグル処理
    let button = $('.js-toggle-button');
    let image  = $('.js-toggle-image');
    let nav    = $('.js-toggle-nav');

    button.on('click', function(){
        image.toggleClass('on'); // ボタン（画像）の切り替え
        nav.toggleClass('active'); // ナビメニューの表示切り替え

    });


});
