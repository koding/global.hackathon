<?php

$dir = "images/";
if (isset($_FILES["file"])) {
    if ($_FILES["file"]["error"] > 0) {
        echo "Error: " . $_FILES["file"]["error"] . "";
    } else {
        move_uploaded_file($_FILES["file"]["tmp_name"], $dir . $_FILES["file"]["name"]);
        echo $_FILES["file"]["name"];
    }
}