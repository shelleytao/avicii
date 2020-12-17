$(document).ready(function () {
    var morePhotoItems = [];
    $.getJSON('./data/additional_photos.json', function(data) {
        for (var i = 0, len = data.length; i < len; i++) {
            morePhotoItems[i] = data[i];
        }
    })

    $("#show_more_photo_button").click(function () {
        var row = '<div class="row">'
        $.each(morePhotoItems, function(i, item) {
            row += '<div class="col">';
            row += '<img class="img-thumbnail" src="' + item.path + '" alt="">';
            row += '</div>';
        });
        row += '</div>'
        $('#photo-items-content').append(row)
        $("#show_more_photo_button").prop("disabled",true);
    });

    var moreVideoItems = [];
    $.getJSON('./data/additional_videos.json', function(data) {
        for (var i = 0, len = data.length; i < len; i++) {
            moreVideoItems[i] = data[i];
        }
    })

    $("#show_more_video_button").click(function () {
        var row = '<div class="row">'
        $.each(moreVideoItems, function(i, item) {
            row += '<div class="col">';
            row += item.path
            row += '</div>';
        });
        row += '</div>'
        $('#video-items-content').append(row)
        $("#show_more_video_button").prop("disabled",true);
    });

    $("#videos-unselected").click(function () {
        $("#videos-unselected").prop("id","videos-selected");
        $("#photos-selected").prop("id","photos-unselected");
        $("#photo-items").css("display","none");
        $("#video-items").css("display","unset");
    });

    $(document).on("click", '#photos-unselected',function(){
        $("#videos-selected").prop("id","videos-unselected");
        $("#photos-unselected").prop("id","photos-selected");
        $("#photo-items").css("display","unset");
        $("#video-items").css("display","none");
    })
})();