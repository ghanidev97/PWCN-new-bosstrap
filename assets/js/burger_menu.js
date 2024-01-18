$(document).ready(function () {
    $('.nav_burger').click(function (event) {
        $('.nav_burger,.nav,.nav_left,.nav_right').toggleClass('active_b');
        $('body').toggleClass('active_b');
    });
    $('.media_play').click(function (event) {
        $('.promo_video').toggleClass('active');
        $('body').toggleClass('active_b');
    });
    $('.promo_video').click(function (event) {
        $('.promo_video').removeClass('active');
        $('body').removeClass('active_b');
    });
});
$(document).ready(function () {
    $('.btn.online').click(function (event) {
        $('.top_list').removeClass('active');
        $('.top_list.online').toggleClass('active');
        $('.top_special .btns .btn').removeClass('active');
        $('.btn.online').toggleClass('active');
    });
    $('.btn.lvl').click(function (event) {
        $('.top_list').removeClass('active');
        $('.top_list.lvl').toggleClass('active');
        $('.top_special .btns .btn').removeClass('active');
        $('.btn.lvl').toggleClass('active');
    });
    $('.btn.rep').click(function (event) {
        $('.top_list').removeClass('active');
        $('.top_list.rep').toggleClass('active');
        $('.top_special .btns .btn').removeClass('active');
        $('.btn.rep').toggleClass('active');
    });
    $('.btn.guild').click(function (event) {
        $('.top_list').removeClass('active');
        $('.top_list.guild').toggleClass('active');
        $('.top_special .btns .btn').removeClass('active');
        $('.btn.guild').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.btn.promotions').click(function (event) {
        $('.news_wrapper').removeClass('active');
        $('.news_wrapper.promotions').toggleClass('active');
        $('.top_special .btns .btn').removeClass('active');
        $('.btn.promotions').toggleClass('active');
    });
    $('.btn.updates').click(function (event) {
        $('.news_wrapper').removeClass('active');
        $('.news_wrapper.updates').toggleClass('active');
        $('.top_special .btns .btn').removeClass('active');
        $('.btn.updates').toggleClass('active');
    });
    $('.btn.events').click(function (event) {
        $('.news_wrapper').removeClass('active');
        $('.news_wrapper.events').toggleClass('active');
        $('.top_special .btns .btn').removeClass('active');
        $('.btn.events').toggleClass('active');
    });
});