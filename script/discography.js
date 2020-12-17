$(document).ready(function () {
    var moreAlbumItems = [];
    $.getJSON('./data/additional_album.json', function(data) {
        for (var i = 0, len = data.length; i < len; i++) {
            moreAlbumItems[i] = data[i];
        }
    })

    $("#show_more_album_button").click(function () {
        var row = '<div class="row">'
        $.each(moreAlbumItems, function(i, item) {
            row += '<div class="col-md-3">';
            row += '<img class="img-thumbnail" src="' + item.cover + '" alt="">';
            row += '</div>';
            row += '<div class="col-md-9">';
            row += item.path;
            row += '</div>';
        });
        row += '</div>'
        $('#album-items-content').append(row)
        $("#show_more_album_button").prop("disabled",true);
    });

    var moreSingleItems = [];
    $.getJSON('./data/additional_single.json', function(data) {
        for (var i = 0, len = data.length; i < len; i++) {
            moreSingleItems[i] = data[i];
        }
    })

    $("#show_more_single_button").click(function () {
        var row = '<div class="row">'
        $.each(moreSingleItems, function(i, item) {
            row += '<div class="col-md-3">';
            row += '<img class="img-thumbnail" src="' + item.cover + '" alt="">';
            row += '</div>';
            row += '<div class="col-md-9">';
            row += item.path;
            row += '</div>';
        });
        row += '</div>'
        $('#single-items-content').append(row)
        $("#show_more_single_button").prop("disabled",true);
    });

    $("#single-unselected").click(function () {
        $("#single-unselected").prop("id","single-selected");
        $("#album-selected").prop("id","album-unselected");
        $("#album-items").css("display","none");
        $("#single-items").css("display","unset");
    });

    $(document).on("click", '#album-unselected',function(){
        $("#single-selected").prop("id","single-unselected");
        $("#album-unselected").prop("id","album-selected");
        $("#album-items").css("display","unset");
        $("#single-items").css("display","none");
    })
})