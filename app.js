// THIS IS FOR SWIPER ARROW STARTS HERE ----------------------------->>>>>>

const arrows = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=>{
    const itemNumber = movielist[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber - (4+clickCounter) + (4-ratio) >=0){
            movielist[i].style.transform =`translateX(${
                movielist[i].computedStyleMap().get("transform")[0].x.value - 350
            }px)`
        }
        else{
            movielist[i].style.transform ="translateX(0)";
            clickCounter = 0;
        }
    });
    console.log(movielist[i].querySelectorAll("img").length);
});



// SWIPER ARROW ENDS HERE ------------------------------->>>>>>>>>>>>>>



// HERE TOGGLE CODE STARTS DARK MODE OR LIGHT MODE -------------->>>>>
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})

// HERE TOGGLE CODE ENDS  -------------->>>>>

