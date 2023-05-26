const block1 = document.createElement('div');
block1.classList.add('cursor')
document.body.append(block1);

const tmrId=null;
function dissapearing(){
    block1.style.opacity='0'
}
let xCode;
let yCode;
const bodyElm = document.querySelector('body');
bodyElm.addEventListener('mousemove',(eventData)=>{
    clearTimeout(tmrId);
    block1.style.visibility='visible';
    block1.style.opacity='1';
    xCode = eventData.clientX;
    yCode = eventData.clientY;
    block1.style.left=(xCode-50)+'px';
    block1.style.top=(yCode-50)+'px';

    // tmrId = setInterval(dissapearing,1500);
});

bodyElm.addEventListener('mouseleave',(eventData)=>{
    block1.style.visibility='hidden'
})

// block1.addEventListener('mousemove',(eventData)=>{
//     setInterval(()=>{
//         let x2 = eventData.clientX;
//         let y2 = eventData.clientY;
//         if (x===x2) block1.style.opacity='0'
//     },1500)
// })