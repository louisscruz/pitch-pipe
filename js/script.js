$(function($) {

    //KNOB FUNCTIONS

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

        //OUTPUT FROM VALUE

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
        }
    });

    //ANIMATIONS
    $("#output-circle").click(function() {
        $("#pitch-pipe").animate({  borderSpacing: -1080 }, {
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

    //AUDIO FUNCTIONALITY

    $("#output-circle").click(function() {
        if(knobValue==1) {
          $("#Cs")[0].play();
        } else if(knobValue==2) {
          $("#D")[0].play();
        } else if(knobValue==3) {
          $("#Ds")[0].play();
        } else if(knobValue==4) {
          $("#E")[0].play();
        } else if(knobValue==5) {
          $("#F")[0].play();
        } else if(knobValue==6) {
          $("#Fs")[0].play();
        } else if(knobValue==7) {
          $("#G")[0].play();
        } else if(knobValue==8) {
          $("#Gs")[0].play();
        } else if(knobValue==9) {
          $("#A")[0].play();
        } else if(knobValue==10) {
          $("#Bf")[0].play();
        } else if(knobValue==11) {
          $("#B")[0].play();
        } else {
          $("#C")[0].play();
        }
    });

});
