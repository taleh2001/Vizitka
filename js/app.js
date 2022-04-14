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
    
    
    
    
    
    
    
    
    
    
    
    
});