$.ajax({
    type: "GET",
    url: "https://api.harvardartmuseums.org/image?q=width:>500&apikey=a35af484-c468-4ceb-8054-5aa044a7f8b6",
    dataType: "json",
    async: false,
    success: function (data) {
        // console.log(data.records[0].baseimageurl);
        $(".img_obj").append("<img src ='" + data.records[0].baseimageurl + "' />");
    },
    error: function (request, status, error) {
        console.log("code:" + request.status);
        console.log("message:" + request.responseText);
        console.log("error:" + error);
    }
});


var random = Math.floor(Math.random() * $('.item').length);
$('.item').hide().eq(random).show();