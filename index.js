function initMap() {
  const office = {lat: 45.46146867097297, lng: -122.7930872108052};

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: office,
  });

  const marker = new google.maps.Marker({
    position: office,
    map: map,
  });
}

$(function () {
  var $testimonials = $("#testimonials");
  var testimonials = [];
  testimonials[1] = '"I rarely seek other medical care for my soft tissue medical condition because it is chronic. However, the provider has recomended seeking medical attention when there is something out of the norm for me."';
  testimonials[2] = '"Kim is the best ever."';
  testimonials[0] = '"Kim is the best massage therapist I\'ve ever had. I feel relief for weeks after a massage with her. She is thoughtful and direct when deciding which techniques to use depending on what is ailing me at the time."';
  testimonials[3] = '"Great skill - knowledge in many areas of the body - different techniques when needed. Friendly, funny, overall great experience."';
  testimonials[4] = '"Having weekly massage with Kim has literally changed my mom’s life! At 86, she has many painful physical challenges and serious mobility issues. Since working with Kim, literally EVERYTHING has improved. What she provides is far greater than just fleeting relaxation. Kim’s approach to massage encourages overall health, wellbeing and deep healing.  I’m most impressed that she tailors each session to deal with what is happening that particular day with mom’s pain while always working to improve mom’s overall quality of life. I credit her holistic approach and multifaceted expertise with the great progress my mom has made over that past few years. If she misses even one week with Kim - it really shows. I am forever grateful for what Kim has done for my mom. She is an amazing gift and I highly recommend her as a massage therapist."'
  var position = -1;

  !function loop() {
    position = (position + 1) % testimonials.length;
    if (position < 4) {
      $testimonials.html(testimonials[position])
      .fadeIn(3000)
      .delay(7500)
      .fadeOut(3000, loop);
      function myFunction(x) {
        if(x.matches){
          document.getElementById("testimonials").style.marginTop = "30px";
          document.getElementById("testimonials").style.height = "90px";
        }
        else {
          document.getElementById("testimonials").style.marginTop="12px";
          document.getElementById("testimonials").style.height="18px";
        }
      }
      var x = window.matchMedia ("(min-width:601px)")
      myFunction(x)
      x.addListener(myFunction)
    }
    else {
      $testimonials.html(testimonials[position])
      .fadeIn(3000)
      .delay(45000)
      .fadeOut(3000, loop);
      function myFunction(x) {
        if(x.matches){
          document.getElementById("testimonials").style.marginTop = 0;
          document.getElementById("testimonials").style.height = "120px";
        }
        else {
          document.getElementById("testimonials").style.marginTop="5px";
          document.getElementById("testimonials").style.height="25px";
        }
      }
      var x = window.matchMedia ("(min-width:601px)")
      myFunction(x)
      x.addListener(myFunction)
    }
  }();
});
