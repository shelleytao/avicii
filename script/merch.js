$(document).ready(function () {
    var $btns =  $('#title > div').click(function(){
        // add border bottom to the one being clicked 
        // and remove the other ones
        $('#' + this.id).css("border-bottom","0.1rem solid")
        $('#title > div').not('#' + this.id).css("border-bottom","0.5rem")
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