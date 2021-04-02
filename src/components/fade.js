import React from "react";
import $ from 'jquery'

function Fade() {
  return (
    <div className="fadeIn fadeDiv">
      <h1>Okay...Here we go!</h1>
    </div>
  );
}

$(document).ready(function () {
  $(".fadeIn").hide();
  $("#portfolio").click(function (e) {
    $(".fadeIn").show();
    if ($(".fadeIn").css("opacity") === 0) {
      $(".fadeIn").css("opacity", 1);
    } else {
      $(".fadeIn").css("opacity", 0);
    }
    if ($("#middleDiv").css("opacity") === 1) {
      $("#middleDiv").css("opacity", 0);
    } else {
      $("middleDiv").css("opacity", 1);
    }
    e.preventDefault();
    var linkUrl = $(this).attr("href");
    setTimeout(
      function (url) {
        window.location = url;
      },
      8000,
      linkUrl
    );
  });
});

export default Fade
