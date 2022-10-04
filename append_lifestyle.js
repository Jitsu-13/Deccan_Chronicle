
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
        div.className="d1_div";
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
        div.className="d1_div";
        let icon=document.createElement("img");
        icon.src="./record-circle.svg"
        let headline=document.createElement("b");
        headline.innerText=el.para;
        div.append(icon,headline);
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
const appendD5=(data,container)=>{
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
const appendD5_5=(data,container)=>{
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
const appendD7=(data,container)=>{
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
const appendD7_7=(data,container)=>{
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
const appendD9=(data,container)=>{
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
const appendD9_9=(data,container)=>{
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
export { appendLeft,appendCenter,appendRight,appendD1,appendD1_1,appendD2,appendD2_2,appendD3,appendD3_3,appendD4,appendD4_4,appendD5,appendD5_5,appendD6,appendD6_6,appendD7,appendD7_7,appendD8,appendD8_8,appendD9,appendD9_9,appendD10,appendD10_10 }