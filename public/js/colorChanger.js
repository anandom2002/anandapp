function randomRGB() {
    var x = Math.floor((Math.random() * 254) + 1);
    return x;
    }

  setInterval(function(){
      document.getElementById('anand').style.color  = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
      document.querySelector('.content .left h1').style.borderColor = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
      document.querySelector('.abt-main .abt-left h1 #name').style.color = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
            }, 500);