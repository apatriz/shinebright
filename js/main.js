
$(document).ready(function(){
    var options = [
        {selector: '.details-list', offset: 500, callback: 'Materialize.showStaggeredList(".details-list")'
        }
    ];
    Materialize.scrollFire(options);
});