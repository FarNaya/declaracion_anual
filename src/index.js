import "bootstrap";
import "./sass/main.scss";
import Swal from 'sweetalert2';
require("@fancyapps/fancybox");
require("slick-carousel");


$( document ).ready(function() {

    
    $( ".close" ).hide();
    $( ".alertas-list" ).hide();
    $( ".open" ).click(function() {
    $( ".alertas-list" ).slideToggle( "fast", function() {
    $( ".open" ).hide();
    $( ".close" ).show();
    });
    });
    $( ".close" ).click(function() {
    $( ".alertas-list" ).slideToggle( "fast", function() {
    $( ".close" ).hide();
    $( ".open" ).show();
    });
    });
 

    });