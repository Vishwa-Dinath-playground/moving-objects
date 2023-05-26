const texts = [
  "Hi there!",
  "I am Vishwa Dinath",
  "I am a Full Stack Developer",
  "I am an Engineering graduate"
];
// const spanElm = document.querySelector("span");
// let width = 10;

// for (let index = 0; index < texts.length; index) {
//   let text = texts[index];
//   let i = 0;
//   let forward = true;
//   setInterval(() => {
//     if (forward) {
//       spanElm.innerText = text.substring(0, i++);
//     }
//     if (i > text.length) forward = false;
//     if (!forward) {
//       spanElm.innerText = text.substring(0, i--);
//     }
//     if (i<0) forward=true;
//   }, 200);
//   index++
// };

const spanElm = document.querySelector("h1 > span");

let i = 0;
let k = 0;
let m = 0;
let erase = false;

setInterval(()=> {
    let text = texts[k];
    i++;
    if (i % 2 == 0 && !erase) {
        m++;
        spanElm.innerText = text.substring(0, m);
        if (m >= (text.length + 10)) erase = true;
    }else if(erase){
        m--;
        spanElm.innerText = text.substring(0, m);
        if (m <= 0) {
            erase = false;
            k++;
            if (k === texts.length) k = 0;
        }
    }
}, 50);