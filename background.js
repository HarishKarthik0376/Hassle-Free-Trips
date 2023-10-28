//background change
let vid1 = document.getElementById("sec-1");
let vid2 = document.getElementById("sec-2");
let vid3 = document.getElementById("sec-3");
let vid4 = document.getElementById("sec-4");
let vid5 = document.getElementById("sec-5");

//buttons to change background
let change1 = document.getElementById("vid1");
let change2 = document.getElementById("vid2");
let change3 = document.getElementById("vid3");
let change4 = document.getElementById("vid4");
let change5 = document.getElementById("vid5");

//changebuttonscolor
    
    const button = document.querySelectorAll(".slide");
    document.getElementById("vid1").classList.add("on");
    var color =  function change(onclck)
    {
        button.forEach((button)=> {
            button.classList.remove("on");
        })
        button[onclck].classList.add("on");
    }
    button.forEach((button,i)=>
    {
        button.addEventListener("click",function(){
            color(i);
        })
    })

//eventlistners
change1.addEventListener("click",function()
{
    vid1.style.display = "block";
    vid2.style.display = "none";
    vid3.style.display = "none";
    vid4.style.display = "none";
    vid5.style.display = "none";
})
change2.addEventListener("click",function()
{
    vid2.style.display = "block";
    vid1.style.display = "none";
    vid3.style.display = "none";
    vid4.style.display = "none";
    vid5.style.display = "none";
})
change3.addEventListener("click",function()
{
    vid3.style.display = "block";
    vid2.style.display = "none";
    vid1.style.display = "none";
    vid4.style.display = "none";
    vid5.style.display = "none";
    // let a = document.querySelectorAll(".options");
    // a.forEach((a)=>{
    //     a.classList.remove("match");
    //  })
})
change4.addEventListener("click",function()
{
    vid4.style.display = "block";
    vid2.style.display = "none";
    vid3.style.display = "none";
    vid1.style.display = "none";
    vid5.style.display = "none";
})
change5.addEventListener("click",function()
{
    vid5.style.display = "block";
    vid2.style.display = "none";
    vid3.style.display = "none";
    vid4.style.display = "none";
    vid1.style.display = "none";
})
//popular section

document.getElementById("box1").addEventListener("mouseover",function()
{
    
    document.getElementById("afterhover").style.display = "block";
    document.getElementById("country").style.display = "none";
})
document.getElementById("box1").addEventListener("mouseleave",function()
{
    document.getElementById("country").style.display = "block";
    document.getElementById("afterhover").style.display = "none";
})
document.getElementById("box2").addEventListener("mouseover",function()
{
    
    document.getElementById("afterhover2").style.display = "block";
    document.getElementById("country2").style.display = "none";
})
document.getElementById("box2").addEventListener("mouseleave",function()
{
    document.getElementById("country2").style.display = "block";
    document.getElementById("afterhover2").style.display = "none";
})
document.getElementById("box3").addEventListener("mouseover",function()
{
    
    document.getElementById("afterhover3").style.display = "block";
    document.getElementById("country3").style.display = "none";
})
document.getElementById("box3").addEventListener("mouseleave",function()
{
    document.getElementById("country3").style.display = "block";
    document.getElementById("afterhover3").style.display = "none";
})
document.getElementById("box4").addEventListener("mouseover",function()
{
    
    document.getElementById("afterhover4").style.display = "block";
    document.getElementById("country4").style.display = "none";
})
document.getElementById("box4").addEventListener("mouseleave",function()
{
    document.getElementById("country4").style.display = "block";
    document.getElementById("afterhover4").style.display = "none";
})
document.getElementById("box5").addEventListener("mouseover",function()
{
    
    document.getElementById("afterhover5").style.display = "block";
    document.getElementById("country5").style.display = "none";
})
document.getElementById("box5").addEventListener("mouseleave",function()
{
    document.getElementById("country5").style.display = "block";
    document.getElementById("afterhover5").style.display = "none";
})

