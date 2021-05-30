let big_img = document.getElementById('big-img')
let navbarElement = document.getElementById('dropdownEl')
let logoEl = ($('h1.logo'))
let scroller = $('#scroller')
let logo1 = $('.logo1');
logo1.hide()
scroller.on('click',function() {
    let scroll = $('html, body').animate({scrollTop: '+=150px'}, 200)

    if ('clicked') {
        scroller.hide()
    } 
  

})

scroller.on('mouseover', function() {
    scroller.text = 'ciao'
})

if(big_img && location.href.split('/').pop() == 'index.html' || location.href.split('/').pop() == '')
{   
    const header = document.querySelector('header');
    window.addEventListener("scroll",function(){
        header.classList.toggle('sticky', window.scrollY > 0);
        logoEl.text('Benvenuto').addClass("text-light");
        let pagecontrol = $('#cast').addClass('page-control');
        scroller.hide()
        logo1.show()

        if (window.scrollY < 10) {
            logoEl.html('<h1 class="logoUpdate text-center ">Benvenuto nel mio <span class="custom-title">portfolio!</span></h1>').removeClass("text-light")
            $('#cast').removeClass('page-control');
            logo1.hide()

            scroller.show()
        }
    })

    const navbar_header = document.querySelector('nav.nav-header')
    document.getElementById('toggle').addEventListener('click' , function() {
        navbar_header.classList.toggle('active');
        navbarElement.classList.toggle('compare')

    })

} 


let newTitle = $('h5.modal-title');
let newBody = $('a#modal-body')
let modalFollow = $('img.prova');
let arr = Object.values(modalFollow)
function modal() {
    arr.forEach(element => 
        { 
            
            if (element.name) {
            element.addEventListener('click',function() {
                let el = element.name;
                let removeHref = $('a#modal-body')[0].removeAttribute("href")
                if (el == 1) {
                    removeHref
                    newTitle.text('Visita la mia pagina Linkedin!');
                    $('a#modal-body')[0].setAttribute("href", "https://www.linkedin.com/in/gianlucanaddeo/");
                    newBody.text("Cliccami per visitare la mia pagina Linkedin!")
                }
                else if (el == 2) {
                    removeHref
                    newTitle.text('Per contattarmi via e-mail!');
                    $('a#modal-body')[0].setAttribute("href", "mailto: geiden93@gmail.com");
                    newBody.text("Cliccami o Entra per essere inoltrato all'invio dell'email")
                }
                else if (el == 3) {
                    removeHref                    
                    newTitle.text('Visita il mio profilo Github e i miei lavori!');
                    $('a#modal-body')[0].setAttribute("href","https://github.com/Jaden93/");
                    newBody.text('Cliccami o Entra per visitare il mio profilo Github')

                }
            })
        }

        })
}

modal()


let i = 0;
let speed = 90;
let text = ['Benvenuto nel mio sito!']
let el = document.getElementsByClassName('text')[0];

if(el) {
function autoText(){
    if(i < text[0].length){
        let newText = el.textContent  += text[0].charAt(i);   
        i++ 
        setTimeout(autoText,speed);
    } 
    
    }
    autoText()
}




const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('click', function(){
        icon.parentNode.classList.toggle('active');
    })
});



// navbarElement.addEventListener('click', function() {
// })

let next = $('.next');

       
    next.mouseover(function(){
        $('.active').toggle()
        $('.active').addClass('transition'+" "+'effect')
   });

        next.mouseout(function(){
         $('.active').toggle()
        
    });


     if (location.href.split('/').pop() == 'contact.html') {
  let premuto = $('#inviato')[0];
     let hasInput = $('form')
   let loader = $('.loader')
     let textSubmit = $('p.customSubmit')
     textSubmit.removeClass('customSubmit')
    loader.hide()
    
     let arrInput = Object.values(hasInput)[0]
     for (i=0; i<3; i++) 
     { 
         if (arrInput[i].value == '') {
             premuto.style = "pointer-events: none";
             premuto.value = "Compila i campi per attivarmi";
            

         } 
            
             arrInput.addEventListener('input', updateValue);
             function updateValue(e) {
                 if (arrInput[0].value !== '' && arrInput[1].value !== '' && arrInput[1].value.includes('@') && arrInput[2].value !== '') {
                     premuto.style = "pointer-events: cursor";
                     textSubmit.addClass('customSubmit')
                     premuto.value = "Clicca per inviare"
                 }

             }
        



     }
    premuto.addEventListener("click", function() {

       
        loader.show()
        window.addEventListener("load", vanish) 
        function vanish() {
            loader.addClass("dissapear")        
        } 
        setTimeout(function(){
            window.location.href = 'index.html';
         }, 3000);

        })

}    



//Il tuo messaggio è stato spedito, a breve verrai indirizzato nella homepage



// drag for home 
let a = $('.home')
if(location.href.split('/').pop() == 'index2.html' || 'contact.html') {
    $('.home').draggable({
    
        containment: 'parent',
        cursor: 'move',
        revert: true
       
      });
      
      $('.drop-point').droppable({
        accept: '.home',
        drop: land
      });
      
      function land ( event, ui ) {
        window.location.href = "./index.html";
        ui.draggable.draggable( 'disable' );
        ui.draggable.position({of: $(this), my: 'left', at: 'left'});
        ui.draggable.draggable( 'option', 'revert', false );
      }
    
    
    
    function myFunction(x) {
        x.classList.toggle("change");
        $("#mobile-menu").toggleClass("menu-hidden", 200, "easeOutQuint");
      
    };



    function dropdownContact(x) {
        x.classList.toggle("change");
        $("#mobile-menu2").toggleClass("menu-hidden", 200, "easeOutQuint")
      
    };

}

  

// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })



// TEXT APPEARS

let textAppear = $('#test')
let textAppear1 = $('#test1')
let textAppear2 = $('#test2')
let textAppear3 = $('#test3')

let texDissapear =  $('#textapp')
let texDissapear1 =  $('#textapp1')
let texDissapear2 =  $('#textapp2')
let texDissapear3 =  $('#textapp3')


textAppear.on('mouseover',function() {
    texDissapear.show();
  
    
    if(textAppear.mouseout(function (){
        texDissapear.hide();
   
    }));
})

textAppear1.on('mouseover',function() {
    texDissapear1.show();
    
    if(textAppear1.mouseout(function (){
        texDissapear1.hide();
    }));
})

textAppear2.on('mouseover',function() {
    texDissapear2.show();
    
    if(textAppear2.mouseout(function (){
        texDissapear2.hide();
    }));
})

textAppear3.on('mouseover',function() {
    texDissapear3.show();
    
    if(textAppear3.mouseout(function (){
        texDissapear3.hide();
    }));
})



