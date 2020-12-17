$(document).ready(function () {
    //do some interactions
    var $btns =  $('#title > div').click(function(){
        // do whatever you want done when clicked
        if(this.id == 'all') {
            $('#merch-items-content .row > div').show();
        }
        else {
            // show only the elements with the id matching the class
            var $el = $('.' + this.id).show();
            $('#merch-items-content .row > div').not($el).hide();
        }
    });
});