
window.onload = function () {
    var listTitle = document.getElementById("list-title");
    var listItems = document.getElementById("list-items");
    
    if (indexList.length > 0) {
        indexList.forEach((item, index) => {
            var listTitleItem = '';
            if (index == 0) {
                setData(item);
                listTitleItem = '<div class="list-title-item list-title-item-active">' + item.title + '</div>';
            } else {
                listTitleItem = '<div class="list-title-item">' + item.title + '</div>';
            }
            
            $(".list-title").append(listTitleItem);

            
        });
        
    }

    // 底部悬浮
    if(xuanfu.length > 0){
        var xuanfuHtml = '';
        xuanfu.forEach((i,x)=>{
            xuanfuHtml += '<div class="swiper-slide" onclick="goLink(\''+i.android+'\',\''+i.ios+'\')"><img src="'+i.img+'" class="float-img"></div>'
        })
        $("#swiper3-wrapper").append(xuanfuHtml);
        var mySwiper3 = new Swiper('#swiper3', {
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            loop: true,
        })
    }

    $(".list-title-item").click(function () {

        var listTitle = $(".list-title-item");
        var index = 0;
        for (var i = 0; i < listTitle.length; i++) {
            if ($(this).text() == listTitle[i].innerText) {
                $(this).addClass("list-title-item-active");
                $(".list-title-slider").attr("style", "width:calc(25%);left:" + i * 25 + "%");
                index = i;
            } else {
                listTitle[i].classList.remove("list-title-item-active");
            }
        }
        var item = indexList[index];
        setData(item);
        
       
    });
    


   
}

function setData(item){
    $(".list-items").empty();
       
   var  listDownItem = '<div class="list-tabs list-tabs-active"><div class="list-container">';
    //第一部分
    if(item.data1 && item.data1.length > 0){
        item.data1.forEach((i, x) => {
            listDownItem += '<div class="list-item"><div class="item-logo"><img class="item-img" src="' + i.img + '" alt=""></div>'
            listDownItem += ' <p class="item-name">' + i.title + '</p><div class="item-down"><img class="item-down-img" src="./images/icon_download.png" alt=""><p class="item-down-text" onclick="goLink(\''+i.android+'\',\''+i.ios+'\')">下载</p></div></div>'
        });
    }
    listDownItem += '</div>';
    // 中间横幅
    if(item.zhong && item.zhong.length > 0){
        listDownItem += '<div class="list-swiper swiper-container" id="swiper1"><div class="swiper-wrapper">'
        item.zhong.forEach((i,x)=>{
            listDownItem += '<div class="swiper-slide" onclick="goLink(\''+i.android+'\',\''+i.ios+'\')"><img class="header-img c1" src="'+i.img+'" alt=""></div>';
        })
        listDownItem += '</div></div>';
    }
    //第二部分
    if(item.data2 && item.data2.length > 0){
        listDownItem += '<div class="list-container" id="3fdd2">';
        item.data2.forEach((i, x) => {
            listDownItem += '<div class="list-item"><div class="item-logo"><img class="item-img" src="' + i.img + '" alt=""></div>'
            listDownItem += ' <p class="item-name">' + i.title + '</p><div class="item-down"><img class="item-down-img" src="./images/icon_download.png" alt=""><p class="item-down-text" onclick="goLink(\''+i.android+'\',\''+i.ios+'\')">下载</p></div></div>'
        });
        listDownItem += '</div>';
    }
    // 下横幅
    if(item.xia && item.xia.length > 0){
        listDownItem += '<div class="list-swiper swiper-container" id="swiper2"><div class="swiper-wrapper">'
        item.zhong.forEach((i,x)=>{
            listDownItem += '<div class="swiper-slide" onclick="goLink(\''+i.android+'\',\''+i.ios+'\')"><img class="header-img c1" src="'+i.img+'" alt=""></div>';
        })
        listDownItem += '</div></div>';
    }

    listDownItem += '</div>';
    $(".list-items").append(listDownItem);
    //加载swiper
    if(item.zhong && item.zhong.length > 0){
        var mySwiper1 = new Swiper('#swiper1', {
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            loop: true,
            width: window.innerWidth,
        })
    }

    if(item.xia && item.xia.length > 0){
        var mySwiper2 = new Swiper('#swiper2', {
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            loop: true,
        })
    }

    
}
function goLink(a,i) {
    let u = navigator.userAgent;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS) {
        window.open(i, "_blank");
    } else {
        window.open(a, "_blank");
    }
};

