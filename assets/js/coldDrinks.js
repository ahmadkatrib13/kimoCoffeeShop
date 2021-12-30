
var pageName = "coldDrinks"

$(function () {
    $.getJSON("../assets/data/products.json", function (data) {

        let render = (key, value) => {
            $(`<ol class="body__main--categoryInfo">
        <li><a href="../products/products_${value.categorie}.html">${value.name}</a></li>
        <div class="main--dottedLine"></div>
        <li>${value.price}$</li>
        </ol>`).appendTo(`.${pageName}`);
        };

        $.each(data, (key, value) => {
            if(value.categorie === pageName){
                render(key, value);
            }
        })

        $("#searchButton").click(() => {
            $(`.${pageName}`).empty();
            let searchValue = $("#searchInput").val();
            $.each(data, (key, value) => {
                if(value.categorie === pageName){
                    if (value.name.toLowerCase().includes(searchValue.toLowerCase()))
                    render(key, value);
                }
            })
            if($.trim($(`.${pageName}`).html())=='') $(`.${pageName}`).html("couldn't find anything") ;
        })
    });
});