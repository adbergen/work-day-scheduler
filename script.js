$(document).ready(function () {




  function time() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }

  setInterval(time, 1000);





});