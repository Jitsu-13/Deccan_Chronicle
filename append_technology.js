
const appendLeft=(data,container)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.className="left_div";
        let img=document.createElement("img");
        img.src=el.img;
        let headline=document.createElement("h2");
        headline.innerText=el.headline;
        let details=document.createElement("p");
        details.innerText=el.details;
        div.append(img,headline,details);
        container.append(div)
    })
}
const appendCenter=(data,container)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.className="middle_div";
        let img=document.createElement("img");
        img.src=el.img;
        let headline=document.createElement("p");
        headline.innerText=el.headline;
        div.append(img,headline);
        container.append(div)
    })
}
const appendRight=(data,container)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.className="right_div";
        let img=document.createElement("img");
        img.src=el.img;
        let headline=document.createElement("b");
        headline.innerText=el.headline;
        div.append(headline,img);
        container.append(div)
    })
}
const appendD1=(data,container)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.className="d1_div";
        let img=document.createElement("img");
        img.src=el.img;
        let headline=document.createElement("b");
        headline.innerText=el.headline;
        div.append(img,headline);
        container.append(div)
    })
}
const appendD1_1=(data,container)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.className="d1_div";
        let icon=document.createElement("img");
        icon.src="./record-circle.svg"
        let headline=document.createElement("b");
        headline.innerText=el.para;
        div.append(icon,headline);
        container.append(div)
    })
}
const appendD2=(data,container)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.className="d2_div";
        let img=document.createElement("img");
        img.src=el.img;
        let headline=document.createElement("b");
        headline.innerText=el.headline;
        div.append(img,headline);
        container.append(div)
    })
}
const appendD2_2=(data,container)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.className="d2_div";
        let img=document.createElement("img");
        img.src=el.img;
        let headline=document.createElement("b");
        headline.innerText=el.headline;
        div.append(img,headline);
        container.append(div)
    })
}
const appendD3=(data,container)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.className="d2_div";
        let img=document.createElement("img");
        img.src=el.img;
        let headline=document.createElement("b");
        headline.innerText=el.headline;
        div.append(img,headline);
        container.append(div)
    })
}
const appendD3_3=(data,container)=>{
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.className="d2_div";
        let icon=document.createElement("img");
        icon.src=el.img;
        let headline=document.createElement("b");
        headline.innerText=el.headline;
        div.append(icon,headline);
        container.append(div)
    })
}

export {appendLeft,appendCenter,appendRight,appendD1,appendD1_1,appendD2,appendD2_2,appendD3,appendD3_3}