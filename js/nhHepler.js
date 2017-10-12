console.log('plugin start')
setTimeout(function(){

    var insertHtml = "<div style='width: 100%; height: 80px; line-height: 80px;" +
        " background-color: rgba(255,0,0,.5);text-align: center'>" +
        "Thank you for using Nicehash Hepler! Author: Kemosabe" +
        "</div>";
    $('body').prepend(insertHtml);

},300);