const checked = document.getElementById('checked');
const topSection = document.getElementById('top-section');
const heading2 = document.querySelector('.dark-h2');
const followers = document.querySelector('.total-followers');


const cardBody = document.querySelectorAll('.social-media-cardBody');
const heading5 = document.querySelectorAll('.heading-5');
const heading6 = document.querySelectorAll('.heading-6');
const boldHeading = document.querySelectorAll('.dark-h1');
const overviewHeading = document.querySelector('.overview-heading');
const pageView = document.querySelectorAll('.page-view');
const overviewCardBody=document.querySelectorAll('.overview-cardBody');
const overviewNumbers = document.querySelectorAll('.numbers');

const textChange=()=>{
    const lightMode = document.getElementById('light-mode');
    if(lightMode.innerHTML ==="Light Mode"){
        lightMode.innerHTML =`<p style='color:hsl(228, 34%, 66%)'>Dark Mode</p>`;
    } 
    else{
        lightMode.innerHTML ="Light Mode";
    }
}
checked.addEventListener('change',()=>{
    document.body.classList.toggle('dark');
    topSection.classList.toggle('dark');
    heading2.classList.toggle('dark');
    followers.classList.toggle('dark');
    textChange();
    
    cardBody.forEach(cardBG=>{
        cardBG.classList.toggle('dark');
    })
    heading5.forEach(h5=>{
        h5.classList.toggle('dark');
    })
    heading6.forEach(h6=>{
        h6.classList.toggle('dark');
    })
    pageView.forEach(pv=>{
        pv.classList.toggle('dark');
    })
  
    boldHeading.forEach(heading=>{
        heading.classList.toggle('dark');
    })
    overviewHeading.classList.toggle('dark');
    overviewCardBody.forEach(overBG =>{
        overBG.classList.toggle('dark');
    })
    overviewNumbers.forEach(num=>{
        num.classList.toggle('dark');
    })
    
})