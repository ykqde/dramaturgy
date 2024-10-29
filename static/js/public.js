
//手机导航
$(".head .menu").click(function(){
	$(".navB").addClass('active');
});
$(".navB .colse").click(function(){
	$(".navB").removeClass('active');
});
$(".navB .ul1 li span").click(function(){
	$(this).siblings("dl").slideToggle();
	$(this).parent().siblings().find("dl").slideUp();
	$(this).toggleClass("active");
	$(this).parent().siblings().find("span").removeClass('active');
});
//语言
$(".head .lang .A").bind("click", function () {
    $(this).parent().find('.ul0').slideDown();
    $(this).parent().siblings().find('.ul0').slideUp();
    $(this).parent().parent().siblings().find('.ul0').slideUp();
    event.stopPropagation();
})
$('.head .lang ul li').click(function () {
    $(this).parent().slideUp();
    var val = $(this).html()
    $(this).parent().parent().find('.A').html(val);
});
$(".slide h5").bind("click", function () {
    $(this).parent().find('.ul0').slideDown();
    $(this).parent().siblings().find('.ul0').slideUp();
    $(this).parent().parent().siblings().find('.ul0').slideUp();
    event.stopPropagation();
})
$('.slide ul li').click(function () {
    $(this).parent().slideUp();
    var val = $(this).html()
    $(this).parent().parent().find('h5').html(val);
});
$(document).bind("click", function () {
    $('.head .lang .ul0').slideUp();
	$('.slide .ul0').slideUp();
})
//返回顶部
$(".renter").on("click", function () {
	$('body,html').animate({ scrollTop: 0 });
})
//head
$(window).scroll(function(){
  if($(window).scrollTop()>0){
	  $(".head").addClass("active");
  }else{
	  $(".head").removeClass("active");
  };
});
//banner
$('.banner').slick({
	dots: true,
	arrows: false,
	speed:1000,
	autoplay:true,
	autoplaySpeed:4000,
	fade:true
});
//
$('.links .list ul').slick({
	dots: false,
	arrows: true,
	//autoplay:true,
	slidesToShow: 5,
	slidesToScroll: 1,
	adaptiveHeight:true,
	lazyLoad: 'progressive',
});
$('.Notice .list ul').slick({
	dots: false,
	arrows: true,
	//autoplay:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight:true,
	lazyLoad: 'progressive',
});
//
$('.fuwu1 .img').slick({
	dots: false,
	arrows: true,
	//autoplay:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight:true,
	lazyLoad: 'progressive',
});
//
$('.fuwu_p ._pr ul').slick({
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.fuwu_p ._pl ul', //关联小图
	autoplay:true,
	autoplaySpeed:5000
});
$('.fuwu_p ._pl ul').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.fuwu_p ._pr ul',//关联大图
	//centerMode: true,
	focusOnSelect: true, //右侧跟随左侧切换
	vertical:true, //垂直方向
	autoplay:true,
	autoplaySpeed:5000
});
//
jQuery(".fuwu5").slide({trigger:"click"});
//
$('.fuwu_p .colse').click(function () {
    $(this).parent().parent().removeClass("active");
});
$('.fuwu0 ul li').click(function () {
    $('.fuwu_p').addClass("active");
});
$(".daoh ul li span").click(function(){
	$(this).siblings("dl").slideToggle();
	$(this).parent().siblings().find("dl").slideUp();
	$(this).parent().toggleClass("active");
	$(this).parent().siblings().find("span").removeClass('active');
});
$(".daoh ul li font").click(function(){
	$(this).siblings("._dl").slideToggle();
	$(this).parent().siblings().find("._dl").slideUp();
	$(this).parent().toggleClass("active");
	$(this).parent().siblings().find("font").removeClass('active');
});
//wow
$(function() {
	var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0, //距离可视区域多少开始执行动画
    mobile: true, //是否在移动设备上执行动画
    live: true, //异步加载的内容是否有效
  });
  wow.init();

});































