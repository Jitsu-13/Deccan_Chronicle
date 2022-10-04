

import navbar from './componets/navbar.js';

let nav=document.getElementById('navbar');

nav.innerHTML=navbar();
let arr_lifestyle=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rk2iu50kqejb96bo47d7d4jap5-20220929112953.jpeg",
        para1: "Gujaratis' Navaratri nights all about dance, devotion, joy",
        para2: "'Garba', 'Dandiya' dances are forms of worshipping 'Ambe Maa'"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-nk35mh2nt2n0qfu0v84t072d72-20220928124433.jpeg",
        para1: "Warming may lead to more frequent, longer-lasting droughts in India: Study",
        para2: "For India, nearly 50 per cent of the population is projected to be exposed to a severe drought lasting 1 year or longer in a 30-year"
    },
];


function renderDOMlifestyle(data){

    let container=document.getElementById("lifestyle");

    data.forEach((el)=> {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let parah3=document.createElement("h3");
        parah3.innerText=el.para1;

        let parap=document.createElement("p");
        parap.innerText=el.para2;

        div.append(img,parah3,parap);
        container.append(div)
    })

}
renderDOMlifestyle(arr_lifestyle);



let arr_mid=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-eh5rhdio7ldu6chjhcrou170r0-20190425222610.jpeg",
        para: "Sudden, heavy workouts causing heart ailments among youth: Docs"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0rperakk9dujacp8r6gu0tsp66-20220924215912.jpeg",
        para: "Book Review | Man of contradictions who galvanised Hindi literature"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-nk35mh2nt2n0qfu0v84t072d72-20220928084727.jpeg",
        para: "DC Impact: Sand stocks in Jammikunta of Karimnagar closed"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-fkif9kai9qig22o9ci60rt3u45-20220927125236.jpeg",
        para: "Now, CMFRI comes up with natural remedy for fatty liver disease"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-9b4q6uchcus8aqmu5uii4tsf83-20220807004547.jpeg",
        para: "Khosta-2 virus raises alarm; nothing to fear: Scientists"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0rperakk9dujacp8r6gu0tsp66-20220924214602.jpeg",
        para: "Book Excerpt Washington's war against Huawei put Beijing on the backfoot"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0rperakk9dujacp8r6gu0tsp66-20220924213743.jpeg",
        para: "Book Review | The cobbler's contribution"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rednubg548dqk0f30b48q3v7v3-20220922171047.jpeg",
        para: "Living life on her own terms"
    },
]


function renderDOMmid(data){

    let container=document.getElementById("mid");
    data.forEach((el) => {
        let div=document.createElement("div");
        
        let img=document.createElement("img");
        img.src=el.image;

        let para=document.createElement("p");
        para.innerText=el.para

        div.append(img,para);
        container.append(div);
    })

}
renderDOMmid(arr_mid);



let arr_last=[
    {
        para:"Bike taxi services run in Hyderabad without helmets",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-g0kj4eqhpopm3qrb4uagoa2p16-20210919010419.jpeg"
    },
    {
        para:"Woman gets husband 'married' to his ex-lover",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-6gmm3rjmijm3fvavarm7pp1ln2-20170902005956.jpeg"
    },
    {
        para:"Woman cop saves life with CPR as stampede breaks out at Gymkhana grounds",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rednubg548dqk0f30b48q3v7v3-20220922211927.jpeg"
    },
    {
        para:"Dead woman' comes back home two days after 'burial'",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/c54036d054c7c8253415ffcdfe34e2a9058cc7a4-tc-img-thumb.jpg"
    },
    {
        para:"Pack of 11 stray dogs attack medico at Chest Hospital in |Hyderabad",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-blettn0hj8o3gok43isvb63oa4-20211001165615.jpeg"
    },
    {
        para:"Depression among animals fail to get attention, say experts",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0es59phtqumvlngmmtuh1sqo92-20220716004333.jpeg"
    },
    {
        para:"Don't give kids antibiotics, docs warn parents",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-14ipgp97jj28hpvpls0itnmhg3-20190725101934.jpeg"
    },
    {
        para:"How to Get Thick Eyebrows: 10 Simple Ways To Do",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-3l9hd2sro89cco1lv6r0kducu3-20220825135126.jpeg"
    },
    {
        para:"12 Best Juices for Weight Loss",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-3l9hd2sro89cco1lv6r0kducu3-20220825141053.jpeg"
    },
    {
        para:"Submit report on errant pubs, Telangana HC tells top cops",
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-22lfn4t30kpebjc2ppp8b8bv02-20211227094405.jpeg"
    },
]


function renderDOMlast(data){
    let container=document.getElementById("last");
    data.forEach((el) => {
        let div=document.createElement("div");

        let para=document.createElement("h3");
        para.innerText=el.para;

        let image=document.createElement("img");
        image.src=el.image;

        div.append(para,image);
        container.append(div);

    })
}
renderDOMlast(arr_last);


let arr_gallery=[
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-5c1droacmv2cna13ff287lhjo0-20200429082552.Medi.jpeg",
        para:"My life in Covid-19 quarantine"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rcf7i7ej6lusuevh8j9d3rg7f1-20200314144258.Medi.jpeg",
        para:"Framing the Mundane"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-lm5svqiloml481tidqq5t09s82-20200209162556.Medi.jpeg",
        para:"The best pictures from New York Fashion Week"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-i2h2i9buncmtmekijibjlr84d0-20200308125825.Medi.jpeg",
        para:"A selection of photographer TK Sandeep's work"
    },

];


function renderDOMgallery(data){

    let container=document.getElementById("moregallery");
    data.forEach((el) => { 
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let para=document.createElement("p");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })

}
renderDOMgallery(arr_gallery);





let arr_fashion=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rgfdkcjnh1vh7094dnnhkbe1h1-20220217083459.jpeg",
        para: "Get the posh hair"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-nq5l86432mrog69lbqsq5cs0m4-20220806004332.jpeg",
        para: "Stories Set in Stones"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-botj45runr95un2ebtjubhehf4-20180112054644.jpeg",
        para: "How to Use Coconut Oil on Your Face Overnight?"
    },
];


function renderDOMfashion(data){
    let container=document.getElementById("enter");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderDOMfashion(arr_fashion);



let arr_health=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-cibqh1ks36qf2qh88tp4ga12i0-20220321163541.jpeg",
        para: "Inside the mind of a bully"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-ji25k12rsth3gg17dnlqh33k30-20211223121542.jpeg",
        para: "Increased risk of serious blood clots up up to six months after COVID-19: Study"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-96sb0rhlb2mgrslr2psji7vht1-20220715123814.jpeg",
        para: "Marma therapy is an ancient healing technique"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-c5l1d3bh9m4qgmunqtg5es0mt5-20171227072053.jpeg",
        para: "Rare heart surgery performed on a Dextrocardia patient"
    },
];


function renderDOMhealth(data){
    let container=document.getElementById("healthfirst");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderDOMhealth(arr_health);


let arr_healthBottom=[
    {
        image:"https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-eqq44eoltdpsal1gvcqqns8p34-20161009015236.jpeg",
        para:"Ayurvedic remedies to combat monsoon related illness"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-14ipgp97jj28hpvpls0itnmhg3-20190725101934.jpeg",
        para:"Don't give kids antibiotics, docs warn parents"
    }
];


function renderDOMhealthbottom(data){
    let container=document.getElementById("healthsecond");
    data.forEach((el)=>{
        let div=document.createElement("div")
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para

        div.append(img,para);
        container.append(div);
    })
}

renderDOMhealthbottom(arr_healthBottom)




let arr_culture=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-9up0hue5dhvrv4u2qfl75ubpo7-20210710232403.jpeg",
        para: "Bonalu not just a festival, it's purification, say historians"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-8gk6tt4662p670p92v0b7hu5t7-20220902192222.jpeg",
        para: "Don't get spiked"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-a6evhudunkpi3qp2smqcqkt113-20220503105640.jpeg",
        para: "Elon Musk makes first public appearance at Met Gala post Twitter takeover"
    },
];


function renderDOMculture(data){
    let container=document.getElementById("enterone");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderDOMculture(arr_culture);



let arr_food=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-bvu6f5n9korom8ajf167kbqmp2-20210919175345.jpeg",
        para: "Finger food goodness"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-sgk1up8ukth7k895t3jicv8611-20210725181618.jpeg",
        para: "Exploring the regional flavours of India"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-8mua4to87cue854mmf1shniag4-20190620101512.jpeg",
        para: "Greek yogurt: yay or nay?"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-agn048sljsuhi26r6vuk6hm6s3-20170314065755.jpeg",
        para: "Hyderabad's freelance biryani chefs in big demand"
    },
];


function renderDOMfood(data){
    let container=document.getElementById("foodfirst");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderDOMfood(arr_food);


let arr_foodBottom=[
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-aj29p4im7l2qqjcq6u9jpv0hn4-20211202000027.jpeg",
        para:"Mandi biryani replacing the popular Hyderabadi biryani?"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-1el4m6i422j88qp3ndsfbu6df1-20220214152120.jpeg",
        para:"Flavours of South India"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-qghrk9hijcefe1148k5qe39081-20210407180309.jpeg",
        para:"Cooking up a change"
    }
];


function renderDOMfoodbottom(data){
    let container=document.getElementById("foodsecond");
    data.forEach((el)=>{
        let div=document.createElement("div")
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para

        div.append(img,para);
        container.append(div);
    })
}

renderDOMfoodbottom(arr_foodBottom)



let arr_relationship=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-b1iq3de1r9d3g48v5cksjbbtt5-20211211190230.jpeg",
        para: "Negging: The toxic dating trend"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-kreqqufsgvrk4prrreia3f8tr3-20211207181700.jpeg",
        para: "1 am bisexual, ready to move out'"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-2a22matjvqpnqfaku21es8dr67-20190613181513.jpeg",
        para: "Draw your boundaries"
    },
];


function renderDOMrelationship(data){
    let container=document.getElementById("entertwo");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderDOMrelationship(arr_relationship);



let arr_envo=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-nrtn6sq0ip8md6ch8logcniej4-20220703013817.jpeg",
        para: "Plastic use may trouble TS amid Bonalu"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-g81pocghs07k36ke8b4e3a3re4-20180503040256.jpeg",
        para: "No single-use plastic from July 1: Centre"
    },
    {
        image: "https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-e1f67n3hq6qnulfne3rjlk78r5-20160502172936.jpeg",
        para: "Post NGT order, Mamasani Kunta to be surveyed"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-4uevr26cdlhg1uk9schsih6v91-20180807013646.jpeg",
        para: "Vizag traders ignore plastic-free call"
    },
];


function renderDOMenvo(data){
    let container=document.getElementById("envofirst");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderDOMenvo(arr_envo);


let arr_envoBottom=[
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-91o1m7h9a5qur7eao2ril72gp6-20191229020314.jpeg",
        para:"Climate change is making weather forecast difficult, admits IMD DG"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-cbg70t0lgege75qkl44n4o92n3-20220518105342.jpeg",
        para:"Global pollution kills 9 million people a year, study finds"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-h4s2a4nd45tttagk7ml09mvv24-20220303144533.jpeg",
        para:"No more Great Indian Bustard in AP"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-ce5c7dsc3krefthg97go3e6cg7-20170320024133.jpeg",
        para:"High decibel noise deafens Hyderabad's residents"
    }
];


function renderDOMenvobottom(data){
    let container=document.getElementById("envosecond");
    data.forEach((el)=>{
        let div=document.createElement("div")
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para

        div.append(img,para);
        container.append(div);
    })
}

renderDOMenvobottom(arr_envoBottom)



let arr_book=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0rperakk9dujacp8r6gu0tsp66-20220910194920.jpeg",
        para: "Book Review | Mazda & the allure of Persian mythology..."
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0rperakk9dujacp8r6gu0tsp66-20220917192305.jpeg",
        para: "Book Review | The success and sacrifice of India's last political hero"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0rperakk9dujacp8r6gu0tsp66-20220910201036.jpeg",
        para: "Book Review | Let's make peace with China and Pak, cozy up to Russia"
    },
];


function renderDOMbook(data){
    let container=document.getElementById("enterthree");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderDOMbook(arr_book);



let arr_travel=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-e3p7q68dn74aae4bf3kq0vupt0-20220210131522.jpeg",
        para: "Terrific Gem At Teekoy!"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-g3jklb3tsgrq49tetn9dv9a3n2-20220514193420.jpeg",
        para: "When I came face to face with sharks in Durban"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-d9v1fd505jdo8p4k7p004sh8t0-20210922183920.jpeg",
        para: "Everest Twins to Swiss Alps next"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rgbn1md3qeh0rd0qdf9e9rton4-20220328160005.jpeg",
        para: "Business Class, Five-Star back as Indians splurge post Covid"
    },
];


function renderDOMtravel(data){
    let container=document.getElementById("travelfirst");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderDOMtravel(arr_travel);


let arr_travelBottom=[
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-gv1mflmqh04i0hf1g5938mho93-20161212060441.jpeg",
        para:"Top wildlife sanctuaries in India"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-mmsv9284jdcvaf1j27djvuk832-20210621070800.jpeg",
        para:"Leisure travel picks up momentum as Indians start coming out of homes"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-j4v1bmtnvqfkb3nhuqaod2e6d5-20220226130638.jpeg",
        para:"The lure of love across centuries"
    },
    
];


function renderDOMtravelbottom(data){
    let container=document.getElementById("travelsecond");
    data.forEach((el)=>{
        let div=document.createElement("div")
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para

        div.append(img,para);
        container.append(div);
    })
}

renderDOMtravelbottom(arr_travelBottom)


let arr_viral=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-lpe4glih4va5b0c72g09etn400-20220720105232.jpeg",
        para: "Unsocial media"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-55opjagf0jejtmare7jdqigs16-20210827171834.jpeg",
        para: "Chemicals are not all bad"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-qo4lkc94037m2ug36rq5r9q8a6-20200816112516.jpeg",
        para: "Flipkart issues apology over its Women's Day message promoting kitchen appliances"
    },
];


function renderDOMviral(data){
    let container=document.getElementById("enterviral");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderDOMviral(arr_viral);



let arr_focus=[
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-0rperakk9dujacp8r6gu0tsp66-20220910203715.jpeg",
        para: "Dr Roy's Confident Group Glitters on SlIMA 2022"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-jsqi3136e8feqj93a77kavaea0-20220909121007.jpeg",
        para: "Diabetic foot ulcer treatment at Park Endocrinology: aims to avoid"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-jsqi3136e8feqj93a77kavaea0-20220909115359.jpeg",
        para: "Coccaa to utilize Make in India initiative to create local opportunities"
    },
    {
        image: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-jsqi3136e8feqj93a77kavaea0-20220909113325.jpeg",
        para: "Comedy Culture is all things filmy and entertainment"
    },

];


function renderfocus(data){
    let container=document.getElementById("focusfirst");
    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para;

        div.append(img,para);
        container.append(div);
    })
}
renderfocus(arr_focus);


let arr_focusBottom=[
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-8clogihjipbrgohjojhue1piv5-20220823121601.jpeg",
        para:"CSS Founder: Best Website Design Firm in Bangalore Supporting Digital India Mission"
    },
    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-9buc6vcd3vmoujkcl5g67t2bc7-20220802201453.jpeg",
        para:"Financial Crisis Overcoming Fear and Stress"
    },

    {
        image:"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-coovnp6v3uhohtqn2megd484f4-20220714194152.jpeg",
        para:"How Instant Feedback is helping newage Retail Businesses"
    },
    
];


function renderFocus(data){
    let container=document.getElementById("focussecond");
    data.forEach((el)=>{
        let div=document.createElement("div")
        let img=document.createElement("img");
        img.src=el.image;
        let para=document.createElement("h3");
        para.innerText=el.para

        div.append(img,para);
        container.append(div);
    })
}
renderFocus(arr_focusBottom)

