let timerOn = false;
let startTime;
let coins = 0;
let m_Timer = 0;
let lastPassed = 0;
let addCoin = 0;
let barWidth = 100;
let barHeight = 12;
let img;
let imgNatural;
let imgHappy;
let imgSad;
let imgAngry;
let imgConcentrate;
let imgBear;
let imgToys;
let imgDoll;
let barStop = true;
let barIncrease = barWidth += 100;
let dollCost = 3;
let bearCost = 5;
let toysCost = 7;
stopBar = 0.01;



function preload() {

  img = loadImage('AssetsImages/bergen.jpg');
  imgNatural = loadImage('AssetsImages/natural.jpg');
  imgHappy = loadImage('AssetsImages/happy.jpg');
  imgAngry = loadImage('AssetsImages/angry.jpg');
  imgSad = loadImage('AssetsImages/sad.jpg');
  imgConcentrate = loadImage('AssetsImages/concentrate.jpg');
  imgToys = loadImage('AssetsImages/toys.jpg');
  imgBear = loadImage('AssetsImages/bear.jpg');
  imgDoll = loadImage('AssetsImages/doll.jpg');
  if (getItem('coins')) coins = getItem('coins')

}


function setup() {
  createCanvas(800, 600);
  barWidth = width;
  let startButton = createButton('Start');
  startButton.size(120, 50);
  startButton.position(450, 100, 120, 50);
  startButton.mousePressed(startTimer);

  let stopButton = createButton('Stop');
  stopButton.size(120, 50)
  stopButton.position(650, 100, 120, 50);
  stopButton.mousePressed(stopTimer);
  let addTime5 = createButton('+5 min')
  addTime5.size(120, 50)
  addTime5.position(650, 200, 120, 50)
  addTime5.mousePressed(addTime5button)

  let addTime10 = createButton('+10 min')
  addTime10.size(120, 50)
  addTime10.position(450, 200, 120, 50)
  addTime10.mousePressed(addTime10button)

  let addTime0 = createButton('0 min')
  addTime0.size(120, 50)
  addTime0.position(650, 300, 120, 50)
  addTime0.mousePressed(addTime0button)

  let addTime25 = createButton('+25 min')
  addTime25.size(120, 50)
  addTime25.position(450, 300, 120, 50)
  addTime25.mousePressed(addTime25button)

  let shopItem1 = createButton('Bear');
  shopItem1.position(30, 550);
  shopItem1.mousePressed(addBear);
  shopItem1.size(100);


  let shopItem2 = createButton('Doll');
  shopItem2.position(150, 550);
  shopItem2.mousePressed(addDoll);
  shopItem2.size(100);

  let shopItem3 = createButton('Allot of toys');
  shopItem3.position(270, 550);
  shopItem3.mousePressed(addToys);
  shopItem3.size(100);



  if (imgBear) barWidth += 100.1;
  if (imgToys) barWidth += 8.1;
  if (imgDoll) barWidth += 0.1;
}

function draw() {
  background(img);
  line(400, 600, 400, 1);
  textSize(18)
  fill(0, 0, 0)
  text("Coins:", 10, 20);

  if (barWidth < 1) {
    textSize(100)
    fill(255, 0, 0)
    text("Game Over", 200, 450,)
  }

  textSize(20)

  image(imgBear, 30, 450, 100, 100)
  image(imgDoll, 150, 450, 100, 100)
  image(imgToys, 270, 450, 100, 100)

  if (barWidth > 600) image(imgHappy, 120, 200, 180, 180)
  if (barWidth < 600) image(imgNatural, 120, 200, 180, 180)
  if (barWidth < 200) image(imgAngry, 120, 200, 180, 180)
  if (barWidth < 50) image(imgSad, 120, 200, 180, 180)
  if (barWidth > 0 && barStop == true) {

    barWidth -= 0.08;
  }


  fill(0, 150, 255);
  rect(75, height / 5 - barHeight / 1, barWidth / 3, barHeight);
  let min = floor(m_Timer / 60)
  let sec = m_Timer - (min * 60)

  if (timerOn == true && m_Timer > 1) {
    barStop = false;
    m_Timer -= deltaTime / 1000
    image(imgConcentrate, 120, 200, 180, 180)
    timePassed = Math.floor((Date.now() - startTime) / 1000)
    if (timePassed % 60 == 0 && timePassed != lastPassed) {
      coins++
      lastPassed = timePassed
    }  
    storeItem('coins', coins)
  }
  fill(250, 0, 0)
  fill(0)
  text('Coins:', 450, 20)
  text(coins, 515, 20)
  text(coins, 70, 20)
  fill(255, 255, 255)
  //--------------- TIMER
  rect(550, 10, 120, 80)
  fill(0, 0, 0)
  text("START", 482, 130)
  text("STOP", 688, 130)
  text("+5", 688, 230)
  text("+10", 488, 230)
  text("+25", 488, 330)
  text("0", 698, 330)
  //--------------- Happeness bar
  text("Happiness", 160, 90)
  text(min + ":" + (floor(sec).toString().padStart(2, '0')), 590, 55);
}

function startTimer() {
  timerOn = true;
  startTime = Date.now();
  image(imgNatural, 120, 200, 180, 180)

}
function stopTimer() {
  timerOn = false;
  barStop = true;

}
function addTime5button() {
  m_Timer += 300;
}
function addTime10button() {
  m_Timer += 600;
}
function addTime25button() {
  m_Timer += 1500;
}
function addTime0button() {
  m_Timer = 0;
}
function addToys() {
  if (imgToys && barWidth < 850) {
    barWidth += 8.1;
  }
}
function addBear() {
  if (imgBear && barWidth < 850) {
    barWidth += 20.1;
  }
}
function addDoll() {

  if (imgDoll && barWidth < 850) {
    barWidth += 0.1;
  }
}
function addDoll() {
  if (imgDoll && barWidth < 850 && coins >= dollCost) {
    barWidth += 125.1;
    coins -= dollCost;
  }
}
function addBear() {
  if (imgBear && barWidth < 850 && coins >= bearCost) {
    barWidth += 160.1;
    coins -= bearCost;
  }
}
function addToys() {
  if (imgToys && barWidth < 850 && coins >= toysCost) {
    barWidth += 234.1;
    coins -= toysCost;
  }
}