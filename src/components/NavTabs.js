import React from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import $ from 'jquery'


function NavTabs() {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light"
      style={{ backgroundColor: "#464646"}}>
      <li className="navbar-brand text-white-50">
        <Link to="/" className="nav-link text-white-50" {...location.pathname === "/"}>
          Eric Freyer
        </Link>
      </li>
      <div className="collapse navbar-collapse navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/"
              className="nav-link text-white-50" {...location.pathname === "/"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/Portfolio"
              className="nav-link text-white-50 portfolio" 
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/Contact"
              className="nav-link text-white-50" {...location.pathname === "/Contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
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

export default NavTabs;
