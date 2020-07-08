(function($) {
  "use strict";


  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit', function() {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });


  $('.validate-form .input100').each(function() {
    $(this).focus(function() {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
      if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    } else {
      if ($(input).val().trim() == '') {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
  }

  $('#inp-cert-save').click(function() {
    var title = $("#input-cert-title").val();
    var desc = $("#input-cert-desc").val();
    var inst = $("#input-cert-inst").val();
    var s_m = $("#input-start-month").val();
    var s_y = $("#input-start-year").val();
    var e_m = $("#input-end-month").val();
    var e_y = $("#input-end-year").val();
    var cert_card =
      '<div class="col-md-5 card mb-4 certificate">' +
      '<div class="row no-gutters edit-row">' +
      '<div class="offset-md-6 col-md-6 edit">' +
      '<a href="#" class="p-r-4">Edit</a>' +
      '<a href="#" class="p-l-3">Delete</a>' +
      '</div>' +
      '</div>' +
      '<div class="row no-gutters">' +
      '<div class="col-md-3">' +
      '<img src="images/diploma.svg" class="card-img p-2" alt="...">' +
      '</div>' +
      '<div class="col-md-9">' +
      '<div class="card-body">' +
      '<h6 class="card-title">' + title + '</h6>' +
      '<p class="card-text"><small class="text-muted">' + s_y + '-' + e_y + '</small></p>' +
      '</div></div></div></div>'
    $('#certifications').append(cert_card);
  });

  $('#input-start-year').change(function() {
    var exp_year = $('#input-end-year');
    exp_year.empty();
    var selected_year = $('#input-start-year').val();
    for (var i = selected_year; i <= 2030; i++) {
      var code = '<option>' + i + '</option>'
      exp_year.append(code);
    }
  });

  $(document).ready(function() {
    var year = $('.year');
    var curr_year = (new Date()).getFullYear();
    for (var i = curr_year; i >= 1950; i--) {
      var code = '<option>' + i + '</option>'
      year.append(code);
    }

    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var month = $('.month');
    for(var i = 0;i<12;i++){
      var code = '<option value = '+(i+1)+'>' + months[i] + '</option>';
      month.append(code);
    }
  });

})(jQuery);
