
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
const appendD4=(data,container)=>{
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
const appendD4_4=(data,container)=>{
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
const appendD6=(data,container)=>{
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
const appendD6_6=(data,container)=>{
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
const appendD8=(data,container)=>{
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
const appendD8_8=(data,container)=>{
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
const appendD10=(data,container)=>{
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
const appendD10_10=(data,container)=>{
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
export { appendLeft,appendCenter,appendRight,appendD2,appendD2_2,appendD4,appendD4_4,appendD6,appendD6_6,appendD8,appendD8_8,appendD10,appendD10_10 }