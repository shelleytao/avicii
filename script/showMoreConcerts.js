$(document).ready(function () {
    // show 11 items first, then read and add more from json file
    var limit = 11;
    var initalItems= [];
    var restItems = [];
    var restIndex = 0;
    $.getJSON('./data/concerts.json', function(data) {
        for (var i = 0, len = data.length; i < len; i++) {
            if (i > limit) {
                restItems[restIndex] = data[i];
                restIndex++;
            }else{
                initalItems[i] = data[i];
            }
        }
        var row = ''
        $.each(initalItems, function(i, item) {
            row += '<tr>';
            row += '<td>' + item.Date + '</td>';
            row += '<td>' + item.Time + '</td>';
            row += '<td>' + item.Venue + '</td>';
            row += '<td>' + item.Location + '</td>';
            row += '<td>' + '<a href="' + item.WTB + '" >' + 'Link' +'</a>' + '</td>';
            row += '</tr>';
        });
        $('tbody').append(row)
    })

        $("#show_more_button").click(function () {
            var row = ''
            $.each(restItems, function(i, item) {
                row += '<tr>';
                row += '<td>' + item.Date + '</td>';
                row += '<td>' + item.Time + '</td>';
                row += '<td>' + item.Venue + '</td>';
                row += '<td>' + item.Location + '</td>';
                row += '<td>' + '<a href="' + item.WTB + '" >' + 'Link' +'</a>' + '</td>';
                row += '</tr>';
                
            });
            $('tbody').append(row);
            $("#show_more_button").prop("disabled",true);
        });
});