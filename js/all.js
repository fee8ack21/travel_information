// drop menu 
var selectA = document.querySelector('.select-a');
var body = document.querySelector('body');

function dropMenu() {
    body.classList.toggle('item-show');
};

selectA.addEventListener('click', dropMenu, false);

body.addEventListener('click', function (e) {
    if (e.target.id != 'select-a' && e.target.id != 'select-a-p' && e.target.id != 'select-a-img') {
        body.classList.remove('item-show')

    }
})

// go top
var goTop = document.querySelector('.go-top')
goTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}, false)

// ajax
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var sceneData = JSON.parse(this.responseText);
        console.log(sceneData)
        // 
        var lingyaButton = document.querySelector('.lingya-button');
        var lingyaLi = document.querySelector('.lingya-li');
        var sanminButton = document.querySelector('.sanmin-button');
        var sanminLi = document.querySelector('.sanmin-li');
        var meinongButton = document.querySelector('.meinong-button');
        var meinongLi = document.querySelector('.meinong-li');
        var dashuButton = document.querySelector('.dashu-button');
        var dashuLi = document.querySelector('.dashu-li');
        // 
        lingyaButton.addEventListener('click', lingyaInfo, false);
        lingyaLi.addEventListener('click', lingyaInfo, false);
        lingyaLi.addEventListener('click', dropMenu, false);
        // 
        sanminButton.addEventListener('click', sanminInfo, false);
        sanminLi.addEventListener('click', sanminInfo, false);
        sanminLi.addEventListener('click', dropMenu, false);
        // 
        meinongButton.addEventListener('click', meinongInfo, false);
        meinongLi.addEventListener('click', meinongInfo, false);
        meinongLi.addEventListener('click', dropMenu, false);
        // 
        dashuButton.addEventListener('click', dashuInfo, false);
        dashuLi.addEventListener('click', dashuInfo, false);
        dashuLi.addEventListener('click', dropMenu, false);

        lingyaInfo()
        pageSelect()
        function lingyaInfo() {
            var list = document.querySelector('.main-main section .list');
            document.querySelector('.list').innerHTML = '';
            for (var i = 0; i < sceneData.result.records.length; i++) {
                if (sceneData.result.records[i].Zone == "苓雅區") {
                    list.innerHTML += '<li class="list-li"><div class="info-img" style="background-image: url(' + sceneData.result.records[i].Picture1 + ')">' + sceneData.result.records[i].Name + '</div>' + '<ul class="info-list"><li title="' + sceneData.result.records[i].Opentime + '"><img src="img/icons_clock.png" alt="">' + sceneData.result.records[i].Opentime + '</li><li title="' + sceneData.result.records[i].Add + '"><img src="img/icons_pin.png" alt="">' + sceneData.result.records[i].Add + '</li><ul class="info-inner-list"><li style="overflow:visible;" title="' + sceneData.result.records[i].Tel + '"><img src="img/icons_phone.png" alt="">' + sceneData.result.records[i].Tel + '</li><li title="' + sceneData.result.records[i].Ticketinfo + '"><img src="img/icons_tag.png" alt="">' + sceneData.result.records[i].Ticketinfo + '</li></ul></ul></li>'
                    document.querySelector('.main-main h2').style['color'] = '#8a82cc';
                    document.querySelector('.main-main h2').innerHTML = "苓雅區";
                }
            }
            currentPage = 1;
            pageSelect()
        }

        // 
        function sanminInfo() {
            var list = document.querySelector('.main-main section .list');
            document.querySelector('.list').innerHTML = '';
            for (var i = 0; i < sceneData.result.records.length; i++) {
                if (sceneData.result.records[i].Zone == "三民區") {
                    list.innerHTML += '<li class="list-li"><div class="info-img" style="background-image: url(' + sceneData.result.records[i].Picture1 + ')">' + sceneData.result.records[i].Name + '</div>' + '<ul class="info-list"><li title="' + sceneData.result.records[i].Opentime + '"><img src="img/icons_clock.png" alt="">' + sceneData.result.records[i].Opentime + '</li><li title="' + sceneData.result.records[i].Add + '"><img src="img/icons_pin.png" alt="">' + sceneData.result.records[i].Add + '</li><ul class="info-inner-list"><li style="overflow:visible;" title="' + sceneData.result.records[i].Tel + '"><img src="img/icons_phone.png" alt="">' + sceneData.result.records[i].Tel + '</li><li title="' + sceneData.result.records[i].Ticketinfo + '"><img src="img/icons_tag.png" alt="">' + sceneData.result.records[i].Ticketinfo + '</li></ul></ul></li>'
                    document.querySelector('.main-main h2').style['color'] = '#ffa782';
                    document.querySelector('.main-main h2').innerHTML = "三民區";
                }
            }
            currentPage = 1;
            pageSelect()
        }

        // 
        function meinongInfo() {
            var list = document.querySelector('.main-main section .list');
            document.querySelector('.list').innerHTML = '';
            for (var i = 0; i < sceneData.result.records.length; i++) {
                if (sceneData.result.records[i].Zone == "美濃區") {
                    list.innerHTML += '<li class="list-li"><div class="info-img" style="background-image: url(' + sceneData.result.records[i].Picture1 + ')">' + sceneData.result.records[i].Name + '</div>' + '<ul class="info-list"><li title="' + sceneData.result.records[i].Opentime + '"><img src="img/icons_clock.png" alt="">' + sceneData.result.records[i].Opentime + '</li><li title="' + sceneData.result.records[i].Add + '"><img src="img/icons_pin.png" alt="">' + sceneData.result.records[i].Add + '</li><ul class="info-inner-list"><li style="overflow:visible;" title="' + sceneData.result.records[i].Tel + '"><img src="img/icons_phone.png" alt="">' + sceneData.result.records[i].Tel + '</li><li title="' + sceneData.result.records[i].Ticketinfo + '"><img src="img/icons_tag.png" alt="">' + sceneData.result.records[i].Ticketinfo + '</li></ul></ul></li>'
                    document.querySelector('.main-main h2').style['color'] = '#f5d005';
                    document.querySelector('.main-main h2').innerHTML = "美濃區";
                }
            }
            currentPage = 1;
            pageSelect()
        }
        // 

        function dashuInfo() {
            var list = document.querySelector('.main-main section .list');
            document.querySelector('.list').innerHTML = '';
            for (var i = 0; i < sceneData.result.records.length; i++) {
                if (sceneData.result.records[i].Zone == "大樹區") {
                    list.innerHTML += '<li class="list-li"><div class="info-img" style="background-image: url(' + sceneData.result.records[i].Picture1 + ')">' + sceneData.result.records[i].Name + '</div>' + '<ul class="info-list"><li title="' + sceneData.result.records[i].Opentime + '"><img src="img/icons_clock.png" alt="">' + sceneData.result.records[i].Opentime + '</li><li title="' + sceneData.result.records[i].Add + '"><img src="img/icons_pin.png" alt="">' + sceneData.result.records[i].Add + '</li><ul class="info-inner-list"><li style="overflow:visible;" title="' + sceneData.result.records[i].Tel + '"><img src="img/icons_phone.png" alt="">' + sceneData.result.records[i].Tel + '</li><li title="' + sceneData.result.records[i].Ticketinfo + '"><img src="img/icons_tag.png" alt="">' + sceneData.result.records[i].Ticketinfo + '</li></ul></ul></li>'
                }
            }
            document.querySelector('.main-main h2').innerHTML = "大樹區";
            document.querySelector('.main-main h2').style['color'] = '#559ac8';
            currentPage = 1;
            pageSelect()
        }

        // 
        var currentPage = 1;
        function pageSelect() {

            var itemsPerPage = 4;
            var len = document.querySelectorAll('.main-main section .list .list-li').length
            for (let i = 0; i < len; i++) {
                if (i < itemsPerPage * currentPage && i > (itemsPerPage * currentPage) - 5) {
                    document.querySelectorAll('.main-main section .list .list-li')[i].style['display'] = 'block';
                } else {
                    document.querySelectorAll('.main-main section .list .list-li')[i].style['display'] = 'none';
                }
            }
            document.querySelector('.page-select').innerHTML = '';
            for (let i = 1; i < Math.ceil(len / itemsPerPage) + 1; i++) {
                document.querySelector('.page-select').innerHTML += '<a href="#">' + i + '</a>'
            }
            for (let i = 0; i < document.querySelectorAll('.main-main .page-select a').length; i++) {
                if (document.querySelectorAll('.main-main .page-select a')[i].textContent == currentPage) {
                    document.querySelectorAll('.main-main .page-select a')[i].classList.add('click-disabled')
                }
            }
        }
        document.querySelector('.main-main .page-select').addEventListener('click', function (e) {
            e.preventDefault()
            if (e.target.nodeName == 'A') {
                currentPage = e.target.textContent;
                pageSelect();
            }
        })
    }
};
xhttp.open("GET", "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json", true);
xhttp.send();
