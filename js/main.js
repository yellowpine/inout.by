if($('.select-section').length) selectModule();

function selectModule(){
    var $selectBox = $('.select-section');



    (function init(){
        $selectBox.each(function(){
            var $select = $(this).find('select');
            var $selectedI = $('<span class="dropdown-placeholder">' + $select.find('option').eq(0).text() + '</span>');
            var $dropdown = $('<ul class="dropdown"></ul>');
            $selectedI.appendTo($(this));
            $dropdown.appendTo($(this));
            $select.hide();

            $select.find('option').each(function(){
                $('<li data-val="' + $(this).val() + '">' + $(this).text() + '</li>').appendTo($dropdown);
            });
        });

        event();
    })();

    function event() {
        $(document).on('click', '.dropdown-placeholder', function () {
            toggleDropdown($(this).closest('.select-section'));
        });

        $(document).on('click', '.dropdown li', function () {
            var section = $(this).closest('.section');
            $('.dropdown-placeholder').text($(this).text());

            if($(this).data().val !== 'all'){
                section.find('.elem').hide();
                section.find('.elem[data-filter="' + $(this).data().val + '"]').show();
            } else {
                section.find('.elem').show();
            }
            toggleDropdown();
        });

        $(document).on('click', function (e) {
            var target = $(e.target);

            if(!target.hasClass('select-section') && !target.parents().hasClass('select-section')){
                toggleDropdown();
            }
        });
    }

    function toggleDropdown(elem) {
        if(!elem) elem = $('.select-section.open');
        elem.toggleClass('open');
    }
}


$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        arrows: false
      });
  });
