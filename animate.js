//On Intersection Animation
const animeobserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting == true)
        {
            entry.target.classList.add("show");
        }
        else
        {
            entry.target.classList.remove("show");
        }
    })
})
const first = document.querySelectorAll("#sec-1_text");
first.forEach((hk) => animeobserver.observe(hk));
const third = document.querySelectorAll("#sec-1_whytext");
third.forEach((hk) => animeobserver.observe(hk));
const four = document.querySelectorAll("#booknow");
four.forEach((hk) => animeobserver.observe(hk));


const animeobserver1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting == true)
        {
            entry.target.classList.add("show1");
        }
        else
        {
            entry.target.classList.remove("show1");
        }
    })
})
const second = document.querySelectorAll(".reasons");
second.forEach((hk) => animeobserver1.observe(hk));
