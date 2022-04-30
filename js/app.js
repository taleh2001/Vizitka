$(function(){
    
    
    /* Filter
    =========================================*/
    let filter = $("[data-filter]");
    
    filter.on("click", function(event){
        event.preventDefault(); // что бы экран не прыгал на верх при нажатии на ссылку
        
        let cat = $(this).data('filter');
        
        if(cat == 'all'){
            $("[data-cat]").removeClass('hide')
        }else{
            $("[data-cat]").each(function(){
            let workCat = $(this).data('cat');
            
            if(workCat != cat){
                $(this).addClass('hide');
            }else{
                $(this).removeClass('hide');
                }
            });     
            }  
        });
    
    /* Modal
    =========================================*/
    
    const modalCall = $("[data-modal]");
    const modalClose = $("[data_close]");
    
    modalCall.on("click", function(event){
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');// получаем data-modal при клике
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
        setTimeout(function(){
            $(modalId).find('.modal__dialog').css({
            transform: "rotateX(0)"
        });   
        }, 200);
        
        $('#worksSlider').slick('setPosition');
        
      
    })
    
    
    modalClose.on("click", function(event){
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal');// получаем data-modal при клике
        
        
            modalParent.find('.modal__dialog').css({
            transform: "rotateX(90deg)"
        });   
        
        
        setTimeout(function(){
            modalParent.removeClass('show');
        $("body").removeClass('no-scroll');  
        }, 200);
        
        
        
    })
    
    $(".modal").on("click", function(){
        let $this = $(this);
        $this.find('.modal__dialog').css({
            transform: "rotateX(90deg)"
        }); 
        
        setTimeout(function(){
            $this.removeClass('show');
            $("body").removeClass('no-scroll');  
        }, 200);
        
        
    })
    
    $(".modal__dialog").on("click", function(event){
        event.stopPropagation();
        
    }) 
    
    /* vendor : https://kenwheeler.github.io/slick/
    =========================================*/
    
    $('[data-slider="slick"]').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          arrows: false, // убираем кнопки
          dots: true // добавляем круглежки
    });
    
    $('.slickPrev').on("click", function(event){
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick("slickPrev");
    });
    
    $('.slickNext').on("click", function(event){
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        
        currentSlider.slick("slickNext");
    });
    
});

// Это плавный переход на якорь
$(document).ready(function(){// якорь работает. при нажатии на ссылку плавный переход

  $("#nav").on("click","a", function (event) {

      //отменяем стандартную обработку нажатия по ссылке

      event.preventDefault();


      //забираем идентификатор бока с атрибута href

      var id  = $(this).attr('href'),


      //узнаем высоту от начала страницы до блока на который ссылается якорь

          top = $(id).offset().top;

       

      //анимируем переход на расстояние - top за 1500 мс

      $('body,html').animate({scrollTop: top}, 1500);

  });
    
    $("#footer__nav").on("click","a", function (event) {

      //отменяем стандартную обработку нажатия по ссылке

      event.preventDefault();


      //забираем идентификатор бока с атрибута href

      var id  = $(this).attr('href'),


      //узнаем высоту от начала страницы до блока на который ссылается якорь

          top = $(id).offset().top;

       

      //анимируем переход на расстояние - top за 1500 мс

      $('body,html').animate({scrollTop: top}, 1500);

  });
    
    /* Мобильная навигация
    =================================*/
    
    const navToggle = $("#navToggle");
    const nav = $("#nav");
    
        navToggle.on("click", function(event){
        event.preventDefault();
            
        nav.toggleClass("show");
        
        
    });

});
