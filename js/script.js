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
          if(value==1) {
            return 'C#'
          } else if(value==2) {
            return 'D'
          } else if(value==3) {
            return 'D#'
          } else if(value==4) {
            return 'E'
          } else if(value==5) {
            return 'F'
          } else if(value==6) {
            return 'F#'
          } else if(value==7) {
            return 'G'
          } else if(value==8) {
            return 'G#'
          } else if(value==9) {
            return 'A'
          } else if(value==10) {
            return 'Bb'
          } else if(value==11) {
            return 'B'
          } else {
            return 'C'
          }
        },
    });
});
