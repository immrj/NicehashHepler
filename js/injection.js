var injection = {
    autoPost: false,

    bindEvents: function () {
        var self = this;

        $('.fix-price').on('change', function () {
            if(isNaN(this.value)){
                $(this).val('')
                $(this).focus()
            }
            if(this.value > 0.025){
                var r = confirm("价格过高，确定继续？");
                if(!r){
                    $(this).focus()
                }
            }else if(this.value <= 0){
                alert('输入错误！');
                $(this).val('').focus()
            }
        })

        $('.query-rate').on('change', function () {
            if(isNaN(this.value)){
                $(this).val('')
                $(this).focus()
            }
            if(this.value <= 0){
                alert('输入错误！');
                $(this).val('').focus()
            }
        })

        $('#auto-post').on('change', function(){
            if($(this).prop('checked')){
                self.autoPost = true;
                self.getPools();
                $('.auto-sub-info').slideDown()
                $('#nhh-main .setting').height('330px');
            }else{
                self.autoPost = false;
                $('.auto-sub-info').slideUp()
                $('#nhh-main .setting').height('260px');
            }
        })

        $('.sub-btn').on('click', function () {
            self.checkData()
        })

    },

    getAglo: function () {
        var aglos = $($('.marketplace select')[0]).children().clone();
        $('#nhh-main .algo').empty().append(aglos);
    },

    getPools: function () {
        var pools = $($('select[name=pool]')[0]).children().clone();
        pools.slice(0, -1)
        $('.auto-sub-info .pools').empty().append(pools);
    },

    getCurrentFixedPrice: function () {
        var self = this;
        var $eufixBtns = $($('.marketplace .eu .add .button')[1]);
        var $usafixBtns = $($('.marketplace .usa .add .button')[1]);
        if($eufixBtns){
            $eufixBtns.click();
            $usafixBtns.click();
            var $euPrice = $('.eu input[name=fixedPrice]');
            var $usaPrice = $('.usa input[name=fixedPrice]');
            var x = setTimeout(function () {
                if($euPrice.val()){
                    $('.euPrice').text($euPrice.val());
                    $('.usaPrice').text($usaPrice.val());
                }else{
                    alert('can not get price !')
                }
                clearTimeout(x);
            }, 3000)
        }
    },

    checkData: function () {
        if(this.autoPost){

        }else{

        }
    },

    init: function () {
        var insertHtml =
            "<div id='nhh-main' class='nhh-hide'>" +
                "<div class='nhh-title'>Thank you for using Nicehash Hepler!&emsp;By <a href='mailto:j_1230223@sina.com'>Kemosabe</a></div>" +
                "<div class='nhh-content'>" +
                    "<div class='nhh-sub-title'>设置（固定模式）</div>" +
                    "<div class='setting'>" +
                        "<div class='row'>" +
                            "<div class='left'>" +
                                "<label>EU固定价格</label>" +
                                "<div>" +
                                    "<span class='fixed euPrice'>N/A</span><span class='unit'>BTC/GB/day</span>" +
                                "</div>" +
                            "</div>" +
                            "<div class='right'>" +
                                "<label>USA固定价格</label>" +
                                "<div>" +
                                    "<span class='fixed usaPrice'>N/A</span><span class='unit'>BTC/GB/day</span>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='row'>" +
                            "<div class='left'>" +
                                "<label>算法</label>" +
                                "<div>" +
                                    "<select class='algo'>" +
                                    "</select>" +
                                "</div>" +
                            "</div>" +
                            "<div class='right'>" +
                                "<label>自动提交</label>" +
                                "<div>" +
                                    "<input id='auto-post' type='checkbox'>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='row'>" +
                            "<div class='left'>" +
                                "<label>价格阈值（BTC）</label>" +
                                "<div>" +
                                    "<input class='fix-price' type='text' placeholder='最高固定价格'>" +
                                "</div>" +
                            "</div>" +
                            "<div class='right'>" +
                                "<label>查询频率（秒）</label>" +
                                "<div>" +
                                    "<input class='query-rate' type='text' placeholder='查询固定价格间隔时间，推荐30秒'/>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='auto-sub-info nhh-hide'>" +
                            "<div class='row'>" +
                                "<div class='left'>" +
                                    "<label>矿池</label>" +
                                    "<div>" +
                                        "<select class='pools'>" +
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
        $($('body')[0]).prepend(insertHtml);

        $('#nhh-main').slideDown();

        this.bindEvents();

        this.getAglo();

        this.getCurrentFixedPrice();
    }
}
setTimeout(function () {
    injection.init();
}, 3000)
