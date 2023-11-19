let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bxs-color');
let listItem = document.querySelectorAll('.list-item');

btn.onclick = function(){
    sidebar.classList.toggle('active');
}

searchBtn.onclick = function(){
    sidebar.classList.toggle('active');
}

