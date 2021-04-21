$(document).ready(function(){
    //dichiaro una variabile per specificare il percorso nel quale andrò ad interagire
    var link=$('.header-right>ul>li');

    //qui uso il metodo mouseenter e gli dico tramite una funzione di trovare al suo interno l'elemento che contiene la classe dropdown e active,in modo che se la trova già attiva la va a togliere,dopodichè gli vado a dire che all'hover del mouse sul link di aggiungere la classe active.
    //usando questo metodo faccio in modo che ogni volta che vado su un altro link quello precedente viene chiuso
    link.mouseenter(function(){
        link.find('.dropdown.active').removeClass('active');
        $(this).find('.dropdown').addClass('active');
    })
   
    //qui uso il metodo click e gli dico tramite una funzione di trovare al suo interno l'elemento che contiene la classe dropdown e di rimuovere la classe active
    link.click(function(){
        $(this).find('.dropdown').removeClass('active')
    })
})