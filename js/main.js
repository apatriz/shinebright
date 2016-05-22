
$(document).ready(function () {
    var options = [
        {selector: '#work-experience', offset: 500, callback: 'Materialize.showStaggeredList("#work-experience")'},
        {selector: '#education', offset: 500, callback: 'Materialize.showStaggeredList("#education")'},
        {selector: '#skills', offset: 500, callback: 'Materialize.showStaggeredList("#skills")'},
        {selector: '#contact', offset: 400, callback: 'Materialize.showStaggeredList("#contact")'}
        

        
    ];
    Materialize.scrollFire(options);
    
  
});