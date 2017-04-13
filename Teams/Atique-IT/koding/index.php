<!DOCTYPE html>
<!--
    Created by: Atique-IT
    Date: Dec 6, 2014 - Dec 7, 2014
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Image Upload and Slide Show</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script src="custom.js"></script>

        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <div class="heading">
            <div class="heading_bg">
                <div class="heading_bg_area">
                    <div class="logo"><img src="img/general.png" alt="logo"></div>
                    <h1>Atique-IT Team</h1>
                    <div style="clear:both"></div>
                </div>
            </div>
            <div class="header_slo">
                JQuery Photo upload and Image Gallery
                <div class="toggole_title">
                    <div id="flip">Click for help </div>
                    <div style="clear:both"></div>
                    <div id="panel">
                        <p class="first_info">To upload image, drag an image and drom this box thats name: "<b>Drag an Image & Drop Here</b>" </p>
                        <p class="first_info2">Here is Showing all images that's you uploaded bye drag and drop panel.</p>
                        <p class="first_info4">Here is showing images thats you upload right now using drag and drop panel.</p>
                        <p class="first_info3">Click here for showing image Slide Show thats you uploaded!</p>   

                    </div>
                </div>
            </div>
        </div>

        <div id="dragandrophandler">Drag an Image & Drop Here</div>
        <br><br>

        <div id="status1"></div>

        <div class="show_btn">
            <button id="show_slide">Click for Slide Show</button>
        </div>

        <div id="slideshow">
            <div style="clear:both !important;"></div>
        </div>

    </body>
</html>
