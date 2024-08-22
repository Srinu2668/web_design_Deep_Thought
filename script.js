let right_swipe=document.querySelector(".head_bar img");
let right_bar=document.querySelector(".right_bar");
let head_bar=document.querySelector(".head_bar");
let block1=document.querySelector(".block1");
let lists=document.querySelector(".lists");

let url="https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json";
let close=true;

right_swipe.addEventListener("click",()=>
{
    if(close)
    {
        right_bar.style.width="392px";
        head_bar.style.width="392px";
        block1.style.display="none";
        right_swipe.style.rotate="180deg"
        lists.style.display="block";
        close=false;
    }
    else
    {
        right_bar.style.width="132px";
        head_bar.style.width="132px";
        block1.style.display="flex";
        right_swipe.style.rotate="360deg"
        lists.style.display="none";
        close=true;
    }  
});

console.log("hielow");


let data;
async function fetchData() 
{
    let response = await fetch("./deepThought.json");
    console.log(response);
    data=await response.json();
    console.log(data);
    sendding();
    // console.log(data.category);
}
fetchData();

let sendding=()=>
{
    let asset_title=document.querySelector("section .asset_title p");
    asset_title.innerText=data.title;
    let title_p=document.querySelector("#title");
    title_p.innerText=data.tasks[0].task_title;
    let theory=document.querySelector("#theory");
    theory.innerText=data.tasks[0].task_description;
    let title_bar_p=document.querySelector(".card1 .title_bar p");
    title_bar_p.innerText=data.tasks[0].assets[0].asset_title;
    let desc=document.querySelector(".desc")
    desc.innerHTML=`<span>Description: </span>${data.tasks[0].task_description}`;
    let card2_title_bar_p=document.querySelector(".card2 .title_bar p");
    card2_title_bar_p.innerText=data.tasks[0].assets[1].asset_title;
    let card2_desc_p=document.querySelector(".card2 .desc");
    card2_desc_p.innerHTML=`<span>Description: </span>${data.tasks[0].assets[1].asset_description}`;
    let card3_title_bar_p=document.querySelector(".card3 .title_bar p");
    card3_title_bar_p.innerText=data.tasks[0].assets[2].asset_title;
    let card3_desc_p=document.querySelector(".card3 .desc");
    card3_desc_p.innerHTML=`<span>Description: </span>${data.tasks[0].assets[2].asset_description}`;
    let card4_title_bar_p=document.querySelector(".card4 .title_bar p");
    card4_title_bar_p.innerText=data.tasks[0].assets[3].asset_title;
    let card4_desc_p=document.querySelector(".card4 .desc");
    card4_desc_p.innerHTML=`<span>Description: </span>${data.tasks[0].assets[3].asset_description}`;
}

