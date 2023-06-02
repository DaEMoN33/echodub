console.log('Script loaded!');
// Mobile nav menu toggle

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// STRIPE PRICING Monthly / Annual Toggle

let inp = document.getElementById("pricingtoggle");
if (inp !== null) {
  inp.addEventListener("click", myFunction);
}

let base_url = "https://echodub.ai"

function myFunction() {
  var x = document.getElementById("premium-pricing");
  if(x.innerHTML === "11"){
     x.innerHTML = (118 / 12).toFixed(2);
  }else{
    x.innerHTML = "11";
    //  "118";
  }
  var x = document.getElementById("premium-term");
  if(x.innerHTML === "/ month (\$118 annually)"){
     x.innerHTML = "/ month";
  }else{
    x.innerHTML = "/ month (\$118 annually)";
  }
  var act = document.getElementById("premium-action");
  if (act !== null) {
    if(act.action === base_url + "/create-checkout-session/2/") {
      act.action = base_url + "/create-checkout-session/1/";
    }else{
      act.action = base_url + "/create-checkout-session/2/";
    }
  }

  var y = document.getElementById("enterprise-pricing");
  if(y.innerHTML === "20" ){
     y.innerHTML = (216 / 12).toFixed(0);
  }else{
    y.innerHTML = "20";
    // "216";
  }
  var y = document.getElementById("enterprise-term");
  if(y.innerHTML === "/ month (\$216 annually)"){
     y.innerHTML = "/ month";
  }else{
    y.innerHTML = "/ month (\$216 annually)";
  }
  var act = document.getElementById("enterprise-action");
  if (act !== null) {
    if(act.action === base_url + "/create-checkout-session/4/") {
      act.action = base_url + "/create-checkout-session/3/";
    }else{
      act.action = base_url + "/create-checkout-session/4/";
    }
  }

}

// Video sound ON / OFF

// Initially show the volume icon and text because the video is muted
document.getElementById('volume-icon').style.display = 'block';
document.getElementById('volume-text').style.display = 'block';

document.getElementById('homepagevideo').addEventListener('click', function (e) {
  if (this.muted) {
    this.muted = false;
    // Hide the volume icon and text when the video is unmuted
    document.getElementById('volume-icon').style.display = 'none';
    document.getElementById('volume-text').style.display = 'none';
  } else {
    this.muted = true;
    // Show the volume icon and "Click to Unmute" text when the video is muted
    document.getElementById('volume-icon').style.display = 'block';
    document.getElementById('volume-text').innerText = "Click to Unmute";
    document.getElementById('volume-text').style.display = 'block';
  }
});