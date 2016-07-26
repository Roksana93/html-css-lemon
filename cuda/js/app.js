(function($){
  $.fn.tabs = function(){
    var nav = $(this).find('.tabs-nav'),
      navLis = $(this).find('.tabs-nav li'),
      content = $(this).find('.tabs-content'),
      contentLis = $(this).find('.tabs-content li');
    $(navLis[0]).addClass('active');
    $(contentLis[0]).addClass('active');
    $.each(navLis, function(i){
      $(this).addClass('tab-nav-'+i);
    });
    $.each(contentLis, function(i){
      $(this).addClass('tab-content-'+i);
    });
    navLis.on('click', function(){
      var data = $(this).attr('class');
      var index = data.lastIndexOf('-');
      data = parseInt(data.substr(index+1));
      console.log(data);
      var contentLi = $(contentLis[data]);
      navLis.removeClass('active');
      contentLis.removeClass('active');
      contentLi.addClass('active');
      $(this).addClass('active');
    });
  }
})(jQuery);
// это ваш селектор с инициализацией табов
$('.tabs').tabs();

$('input, textarea').on('focus', function(){ // событие фоку
  $(this).next('label').css({   // спрятали label, который идет после input или textarea
    display: 'none'
  });
});
$('input, textarea').on('blur', function(){ // событие blur срабатывает, когда input или textarea лишается фокуса
  if ($(this).val()==='') { // если содержимое элемента равно пустой строке (ничего не ввели или стерли текст)
    $(this).next('label').css({ // тогда показываем label
      display: 'inline-block'
    });
  } else {
    $(this).next('label').css({ // иначе скрываем
      display: 'none'
    });
  }
});