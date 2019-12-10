let dogeArray = ['Much Wow', 'SUCH GREAT!', 'So Profit!', 'Many Happy!', 'WOW!', 'Such Amaze!', 'Many Winning!', 'SO EXCITE!!!'];


function rando(min, max){
return Math.random() * (max - min) + min;
}

function windowHeight(){
    return window.innerHeight
}

function windowWidth(){
    return window.innerWidth
}

console.log(dogeArray.length)

function suchDoge(){
document.body.innerHTML = '<span id="doge"></span>';
}

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
          '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
          '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
          '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
          '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
          '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
          '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
          '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
          '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
          '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

function muchDoge() {
    suchDoge()
  var elem = document.getElementById("doge");   
  var id = setInterval(frame, 1500);
  function frame() {
      document.getElementById('doge').innerHTML = dogeArray[Math.floor(Math.random() * dogeArray.length)] 
      elem.style.color = colorArray[Math.floor(Math.random()* colorArray.length)];
      elem.style.top = rando(0 , windowHeight()); + "px"; 
      elem.style.left = rando(0, windowWidth()) + "px";
      elem.style.bottom = rando(0, windowHeight()) + "px"; 
      elem.style.right = rando(0, windowWidth()) + "px";
      elem.style.font = "bold 20px Comic Sans MS, sans-serif";

    }
}



muchDoge()