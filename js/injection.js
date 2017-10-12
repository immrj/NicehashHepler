var injection = {

    showSetting: function () {
        var c = setTimeout(function () {

        }, 50000)
    },


    init: function () {
        var insertHtml =
            "<div id='nhh-main' class='hide'>" +
                "<div class='title'>Thank you for using Nicehash Hepler!&emsp;By <a href='mailto:j_1230223@sina.com'>Kemosabe</a></div>" +
                "<div class='content'>" +
                    "<div class='sub-title'>设置（固定模式）</div>" +
                    "<div class='setting'>" +
                        "<div class='row'>" +
                            "<div class='left'>" +
                                "<label>算法</label>" +
                                "<div>" +
                                    "<select class='algo'>" +
                                        "<option value='0'>Scrypt</option>" +
                                        "<option value='1'>SHA256</option>" +
                                        "<option value='2'>ScryptNf</option>" +
                                        "<option value='3'>X11</option>" +
                                        "<option value='4'>X13</option>" +
                                        "<option value='5'>Keccak</option>" +
                                        "<option value='6'>X15</option>" +
                                        "<option value='7'>Nist5</option>" +
                                    "</select>" +
                                "</div>" +
                            "</div>" +
                            "<div class='right'>" +
                                "<label>自动提交</label>" +
                                "<div>" +
                                    "<input type='checkbox'>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='row'>" +
                            "<div class='left'>" +
                                "<label>价格</label>" +
                                "<div>" +
                                    "<input type='text' placeholder='最高固定价格'>" +
                                "</div>" +
                            "</div>" +
                            "<div class='right'>" +
                            "</div>" +
                        "</div>" +
                        "<div class='auto-sub-info hide'>" +
                            "<div class='row'>" +
                                "<div class='left'>" +
                                    "<label>矿池</label>" +
                                    "<div>" +
                                        "<select class='algo'>" +
                                            "<option value='0'>LXM</option>" +
                                            "<option value='1'>2</option>" +
                                            "<option value='2'>3</option>" +
                                            "<option value='3'>4</option>" +
                                            "<option value='4'>5</option>" +
                                            "<option value='5'>4</option>" +
                                            "<option value='6'>3</option>" +
                                            "<option value='7'>2</option>" +
                                        "</select>" +
                                    "</div>" +
                                "</div>" +
                                "<div class='right'>" +
                                    "<label>限定速率</label>" +
                                    "<div>" +
                                        "<input type='text' placeholder='最小值：0.2 GH/s'>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                            "<div class='row'>" +
                                "<div class='left'>" +
                                    "<label>金额</label>" +
                                    "<div>" +
                                        "<input type='text' placeholder='最小值：0.005 BTC'>" +
                                    "</div>" +
                                "</div>" +
                                "<div class='right'>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='row'>" +
                            "<div class='left'>" +
                                "<label>&nbsp;</label>" +
                                "<div><button type='button' class='am-btn am-btn-primary sub-btn'>确定</button></div>" +
                            "</div>" +
                            "<div class='right'>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='res'>" +

                    "</div>" +
                "</div>" +
            "</div>";
        $('body').prepend(insertHtml);

        $('#nhh-main').slideDown();

        this.showSetting();
    }
}

injection.init();
