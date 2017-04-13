jQuery(document).ready(function ($) {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });
});



var dir = "images/";
var fileextension = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];
$.ajax({
    url: dir,
    success: function (data) {
        $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + "), a:contains(" + (fileextension[2]) + "), a:contains(" + (fileextension[3]) + "), a:contains(" + (fileextension[4]) + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///koding/", "");
            $(".first_info3").hide();
            $(".first_info4").hide();
            $("#slideshow").append($("<div><img src=" + dir + filename + "  class=\"single_img\" height=\"450\" width=\"300\"  /></div>"));
        });
    }
});

jQuery(document).ready(function ($) {
    $('#show_slide').click(function () {
        $("#status1").empty();
        $(".statusbar").hide();
        $("#slideshow").empty();
        $("#slideshow").show();
        $(".show_btn").hide();
        $(".first_info3").hide();
        $(".first_info4").hide();
        $(".first_info2").show();
        var dir = "images/";
        var fileextension = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];
        $.ajax({
            url: dir,
            success: function (data) {
                $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + "), a:contains(" + (fileextension[2]) + "), a:contains(" + (fileextension[3]) + "), a:contains(" + (fileextension[4]) + ")").each(function () {
                    var filename = this.href.replace(window.location.host, "").replace("http:///koding/", "");
                    $("#slideshow").append($("<div><img src=" + dir + filename + "  class=\"single_img\" height=\"450\" width=\"300\"  /></div>"));
                });
            }
        });

    });
});

jQuery(document).ready(function ($) {
    $(".show_btn").hide();
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
    }, 3000);
});

function handleFileUpload(files, obj)
{
    $("#status1").empty();
    $(".statusbar").remove();
    for (var i = 0; i < files.length; i++)
    {
        var fd = new FormData();
        fd.append('file', files[i]);

        var status = new createStatusbar(obj);
        status.setFileNameSize(files[i].name, files[i].size);
        if (files[i].type == 'image/png' || files[i].type == 'image/jpeg' || files[i].type == 'image/jpg' || files[i].type == 'image/bmp' || files[i].type == 'image/gif') {
            sendFileToServer(fd, status);
        } else {
            $(".statusbar").remove();
            $("#status1").html("<div class='upl_error'>You can not upload this type of file (" + files[i].type + ")!<div>");
        }

    }
}
function sendFileToServer(formData, status)
{
    var uploadURL = "upload.php";
    //                var extraData = {}; //Extra Data.
    var jqXHR = $.ajax({
        xhr: function () {
            var xhrobj = $.ajaxSettings.xhr();
            if (xhrobj.upload) {
                xhrobj.upload.addEventListener('progress', function (event) {
                    var percent = 0;
                    var position = event.loaded || event.position;
                    var total = event.total;
                    if (event.lengthComputable) {
                        percent = Math.ceil(position / total * 100);
                    }
                    status.setProgress(percent);
                }, false);
            }
            return xhrobj;
        },
        url: uploadURL,
        type: "POST",
        contentType: false,
        processData: false,
        cache: false,
        data: formData,
        success: function (data) {

            status.setProgress(100);
            $("#status1").append("<div class='current_image'><img src='images/" + data + "' class='single_img' /></div>");
            $("#slideshow").hide();
            $(".show_btn").show();
            $(".first_info2").hide();
            $(".first_info3").show();
            $(".first_info4").show();
        }

    });

    status.setAbort(jqXHR);
}

var rowCount = 0;
function createStatusbar(obj)
{
    rowCount++;
    var row = "odd";
    if (rowCount % 2 == 0)
        row = "even";
    this.statusbar = $("<div class='statusbar " + row + "'></div>");
    this.filename = $("<div class='filename'></div>").appendTo(this.statusbar);
    this.size = $("<div class='filesize'></div>").appendTo(this.statusbar);
    this.progressBar = $("<div class='progressBar'><div></div></div>").appendTo(this.statusbar);
    this.abort = $("<div class='abort'>Abort</div>").appendTo(this.statusbar);
    obj.after(this.statusbar);


    this.setFileNameSize = function (name, size)
    {
        var sizeStr = "";
        var sizeKB = size / 1024;
        if (parseInt(sizeKB) > 1024)
        {
            var sizeMB = sizeKB / 1024;
            sizeStr = sizeMB.toFixed(2) + " MB";
        }
        else
        {
            sizeStr = sizeKB.toFixed(2) + " KB";
        }

        this.filename.html(name);
        this.size.html(sizeStr);
    }
    this.setProgress = function (progress)
    {
        var progressBarWidth = progress * this.progressBar.width() / 100;
        this.progressBar.find('div').animate({width: progressBarWidth}, 10).html(progress + "% ");
        if (parseInt(progress) >= 100)
        {
            this.abort.hide();
        }
    }
    this.setAbort = function (jqxhr)
    {
        var sb = this.statusbar;
        this.abort.click(function ()
        {
            jqxhr.abort();
            sb.hide();
        });
    }
}

jQuery(document).ready(function ($)
{

    var obj = $("#dragandrophandler");
    obj.on('dragenter', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
        $(this).css('border', '2px solid #0B85A1');
    });
    obj.on('dragover', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
    });
    obj.on('drop', function (e)
    {
        $(this).css('border', '2px dotted #0B85A1');
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;

        handleFileUpload(files, obj);
    });
    $(document).on('dragenter', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
    });
    $(document).on('dragover', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
        obj.css('border', '2px dotted #0B85A1');
    });
    $(document).on('drop', function (e)
    {
        e.stopPropagation();
        e.preventDefault();
    });


});

jQuery(function ($) {
    $('#cbp-fwslider').cbpFWSlider();

});