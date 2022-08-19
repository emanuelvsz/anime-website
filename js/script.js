 
    let header = document.getElementById('header');

    var tam = header.clientHeight;
    var calcTamSearch = tam/2 + (tam/2 * 0.1) + "px";

    document.getElementById('h-item-logo').style.height = tam + "px";
    document.getElementById('h-item-routes').style.height = tam + "px";
    document.getElementById('h-item-search').style.height = tam + "px";
    document.getElementById('search-btn').style.height = calcTamSearch;
    document.getElementById('search-icon').style.height = calcTamSearch;
    console.log(header.clientHeight)