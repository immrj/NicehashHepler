var injection = {
    init: function () {
        var insertHtml = "<div id='nhh-main hide'>Thank you for using Nicehash Hepler! Author: Kemosabe</div>";
        $('body').prepend(insertHtml);
        $('#nhh-main').slideDown();
    }
}
injection.init();
