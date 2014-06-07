$(function($) {

    $(".knob").knob({
        change : function (value) {
            //console.log("change : " + value);
        },
        release : function (value) {
            //console.log(this.$.attr('value'));
            console.log("release : " + value);
        },
        cancel : function () {
            console.log("cancel : ", this);
        },
        format : function (value) {
          knobValue = value;
          if(value==1) {
            $("#output").html("<h2>C<b>&#x266f;</b></h2>");
          } else if(value==2) {
            $("#output").html("<h2>D</h2>");
          } else if(value==3) {
            $("#output").html("<h2>D<b>&#x266f;</b></h2>");
          } else if(value==4) {
            $("#output").html("<h2>E</h2>");
          } else if(value==5) {
            $("#output").html("<h2>F</h2>");
          } else if(value==6) {
            $("#output").html("<h2>F<b>&#x266f;</b></h2>");
          } else if(value==7) {
            $("#output").html("<h2>G</h2>");
          } else if(value==8) {
            $("#output").html("<h2>G<b>&#x266f;</b></h2>");
          } else if(value==9) {
            $("#output").html("<h2>A</h2>");
          } else if(value==10) {
            $("#output").html("<h2>B<b>&#x266d;</b></h2>");
          } else if(value==11) {
            $("#output").html("<h2>B</h2>");
          } else {
            $("#output").html("<h2>C</h2>");
          }
        },
    });

    $("#play").click(function() {
        $("#" + knobValue)[0].load();
        $("#" + knobValue)[0].play();
    })

    $( "#output-circle" ).click(function() {
        $(this).fadeOut('normal', function(){
          $(this).fadeIn();
        });
      $('#pitch-pipe').animate({  borderSpacing: -1080 }, {
          step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('-ms-transform','rotate('+now+'deg)');
            $(this).css('-o-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
          },
          duration: 2000
      },'swing');
    });

});
