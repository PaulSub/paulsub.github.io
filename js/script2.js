$('.multiple-items').slick({infinite:true,slidesToShow:1,slidesToScroll:1});$(document).ready(function(){$('a[href*=#]').bind("click",function(e){var anchor=$(this);$('html, body').stop().animate({scrollTop:$(anchor.attr('href')).offset().top-100},1000);e.preventDefault();});return false;});$(".size__container td").hover(function(){$(".size__container td").removeClass("size__active");var inf_class=$(this).attr("class");$("."+inf_class).addClass("size__active");},function(){$(".size__container td").removeClass("size__active");});$(".polit").click(function(){$(".polit-popap, .bg").fadeIn(500);});$(".fancybox-close, .bg").click(function(){$(".polit-popap, .bg").fadeOut(500);});var topof=$('nav').offset();var offset=topof.top;if(offset>20)$('nav').addClass('top-nav--white');$(function(){var topPos=$('nav').offset().top;$(window).scroll(function(){var top=$(document).scrollTop();if(top>20)$('nav').addClass('top-nav--white');else $('nav').removeClass('top-nav--white');});});var months=new Array();months[0]="января";months[1]="февраля";months[2]="марта";months[3]="апреля";months[4]="мая";months[5]="июня";months[6]="июля";months[7]="августа";months[8]="сентября";months[9]="октября";months[10]="ноября";months[11]="декабря";var date=new Date(),day=date.getDate(),month=date.getMonth(),tm=months[month],td=day;date.setDate(date.getDate()-1);$('.yesterday').text(date.getDate()+' '+months[date.getMonth()]);$('.today').text(td+' '+tm);$(document).ready(function(){$(".fancybox").fancybox({openEffect:'none',closeEffect:'none'});});$(document).ready(function(){$(".fancybox2").fancybox({openEffect:'none',closeEffect:'none'});});var myDate=new Date();function returnEndDate(){var inf_hour=23-myDate.getHours();var inf_min=59-myDate.getMinutes();var inf_sec=59-myDate.getSeconds();myDate.setDate(myDate.getDate());myDate.setHours(inf_hour+myDate.getHours());myDate.setMinutes(inf_min+myDate.getMinutes());myDate.setSeconds(inf_sec+myDate.getSeconds());return myDate;}var dateEnd=returnEndDate();$(function(){$('#video1').fancybox({type:'iframe',href:"https://www.youtube.com/embed/clwWiSkKe-M?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1&enablejsapi=1",iframe:{scrolling:'auto',preload:true},width:'60%',height:'60%'})});$(function(){$('#video2').fancybox({type:'iframe',href:"https://www.youtube.com/embed/n2uQelQha4I?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1&enablejsapi=1",iframe:{scrolling:'auto',preload:true},width:'60%',height:'60%'})});function randomInteger(min,max){var rand=min+Math.random()*(max+1-min);rand=Math.floor(rand);return rand;}if($(window).width()>990){var i=0;function yved(){i=1;$('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);}setTimeout(function(){setInterval(function(){i=i+1;if(i>13)i=1;$('.yved:nth-child('+i+')').fadeIn(500).delay(7000).fadeOut(500);tzCount();},20000);yved();tzCount();},20000);}function tzCount(){var num=+$('.tz-count').text();if(num>4)num--;$('.tz-count').text(num);}$(document).ready(function(){$('.online_1').text(randomInteger(5,8));$('.online_2').text(randomInteger(7,14));$('.online_3').text(randomInteger(2,6));$('.online_4').text(randomInteger(13,18));$('.online_5').text(randomInteger(5,9));$('.online_6').text(randomInteger(9,13));$('.online_7').text(randomInteger(5,8));$('.online_8').text(randomInteger(7,14));$('.online_9').text(randomInteger(2,6));$('.online_10').text(randomInteger(13,18));$('.online_11').text(randomInteger(5,9));$('.online_12').text(randomInteger(9,13));$('.online_13').text(randomInteger(9,13));});