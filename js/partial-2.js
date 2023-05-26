let r1 = 50; 
let letters ="ABCDE"
console.log(letters.length);
class Particle {
    dx = (Math.random() * 10) * (Math.random() < 0.5 ? -1: 1);
    dy =  (Math.random() * 10) * (Math.random() < 0.5 ? -1: 1);
    width = 20 + (Math.random() * 25);
    height = this.width;
    x = Math.random() * (innerWidth - this.width);
    y = Math.random() * (innerHeight - this.height);
    elm;
    r2 = this.width/2;
    

    constructor(){
        this.elm = document.createElement('div');
        this.elm.style.position = 'absolute';
        this.elm.style.left = `${this.x}px`;
        this.elm.style.top = `${this.y}px`;
        this.elm.style.width = `${this.width}px`;
        this.elm.style.height = `${this.height}px`;

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        this.elm.style.backgroundColor = `rgb(${r},${g},${b})`;
        this.elm.style.borderRadius = `${Math.random() * 100}%`;
        // this.elm.style.borderRadius = `100%`;
        this.elm.style.transform = `rotate(${Math.random() * 361}deg)`;

        // const i = Math.floor(Math.random()*letters.length)
        // this.elm.innerText= letters.charAt(i)
        // this.elm.style.fontSize = '20px';
        // this.elm.style.display='flex'
        // this.elm.style.alignItems = 'center';
        // this.elm.style.justifyContent='center';
        document.body.append(this.elm);
    }

    move(){
        this.y += this.dy;
        this.x += this.dx;

        if (this.y >= (innerHeight - this.height) || this.y <= 0) this.dy = -this.dy;
        if (this.x >= (innerWidth - this.width) || this.x <= 0) this.dx = -this.dx;
        this.elm.style.top = `${this.y}px`;
        this.elm.style.left = `${this.x}px`;

        let xDiff = this.x+this.r2-xCode
        let yDiff = yCode-this.y-this.r2;
        let distance = Math.hypot(xDiff,yDiff);
        
        if (distance<r1+this.r2){
            this.dy=-this.dy;
            this.dx=-this.dx;
            // this.elm.style.top = `${this.y}px`;
            // this.elm.style.left = `${this.x}px`;
        }
    }   
}

const particles = [];
for(let i = 0; i< 75; i++) particles.push(new Particle());

setInterval(()=> {
    particles.forEach(particle => particle.move());
},20);

// particles.forEach(particle =>{
//     particle.addEventListener('m')
// })




// for (let i = 0; i < 5; i++) {
//     const elm = document.createElement('div');
//     elm.classList.add('element');
//     document.body.append(elm);
//     let x = Math.random()*innerWidth;
//     let y = Math.random()*innerHeight;
//     let xSpeed = Math.random()*10*(Math.random()< 0.5?-1:1);
//     let ySpeed = Math.random()*10*(Math.random()<0.5?-1:1);
//     elm.style.left=`${x}px`;
//     elm.style.top=`${y}px`;
//     const r = Math.floor(Math.random()*256)
//     const g = Math.floor(Math.random()*256)
//     const b = Math.floor(Math.random()*256)
//     elm.style.backgroundColor=`rgb(${r},${g},${b})`;
//     // elm.style.borderRadius=`${Math.random()*100}%`

//     window.setInterval(()=>{
//         x=x+xSpeed;
//         y=y+ySpeed;
//         if (x>= (innerWidth-50) || x<=0) xSpeed = -xSpeed;
//         if (y>= (innerHeight-50) || y<=0) ySpeed = -ySpeed;
//         elm.style.left=`${x}px`;
//         elm.style.top=`${y}px`;
//     },50);
// }
