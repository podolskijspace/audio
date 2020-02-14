$(document).ready(function() {


    //слайдер на главной странице у шапки
    $('.main-slider').slick({
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    //переключатель на странице услуги
    var activeTab = null;
    $.each($('.service-navigate__list a'), function(index, el) {
        if ($(el).hasClass('active')) {
            activeTab = el;
        }
    });

    var activeIdTab = null;

    if (activeTab) {
        activeIdTab = $(activeTab).attr('data-id');
    } else {
        activeIdTab = $('.service-navigate__list a').first().addClass('active').attr('data-id');
    }

    $('[data-tab="' + activeIdTab + '"]').show();

    $('.service-navigate__list a').click(function(ev) {
        ev.preventDefault();
        $('.service-navigate__list a').removeClass('active');
        $(this).addClass('active');
        $('.service-tab').hide();
        $('[data-tab="' + $(this).attr('data-id') + '"]').show();
    });


    // слайдер наши работы
    $.each($('.portf-info .portf-item'), function(i, el) {
        console.log(i);
        $(this).find('.portf-count__current').text(i + 1);
    });


    $('.portf-info .service-tab').slick({
        arrows: false,
        fade: true
    });

    //общее кол-во слайдов
    $('.portf-info .service-tab .portf-count__all').text($(".portf-info .service-tab").slick("getSlick").slideCount);

    //переключение слайдов
    $('.portf-count__next').click(function(ev) {
        ev.preventDefault();
        $(this).parents('.service-tab').first().slick('slickNext');
    })
    $('.portf-count__prev').click(function(ev) {
        ev.preventDefault();
        $(this).parents('.service-tab').first().slick('slickPrev');
    })

    // ТАБЫ НА СТРАНИЦЕ ОТДЕЛЬНОГО ТОВАРА
    // $.ionTabs("#tabs_1", {
    //     type: 'storage'
    // });


    // СТАРНИЦА ТОВАРА ГАЛЛЕРЕЯ
    $('.single-gallery .single-gallery__item').click(function() {
        var imgUrl = $(this).find('img').attr('src');
        $('.single-gallery .single-gallery__main img').attr('src', imgUrl);
    })


    //Менюха
    const moveMenuBars = (menuSelector, menuCloseBtnSelector, activeClass) => {
        const menu = document.querySelector(menuSelector),
            menuCloseBtn = menu.querySelector('svg'),
            menuOpenBtn = document.querySelector(menuCloseBtnSelector);
        
        const toggleMenuClass = () => menu.classList.toggle(activeClass);

        menuCloseBtn.addEventListener('click', toggleMenuClass );
        menuOpenBtn.addEventListener('click', toggleMenuClass);
    } 
    moveMenuBars('.bars', '.header-menuIcon', 'bars_active')
    


});