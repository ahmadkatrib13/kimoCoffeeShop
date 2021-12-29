
$(function () {
    $.getJSON("assets/data/products.json", function (data) {

        let render = (key, value) => {
            $(`<ol class="body__main--categoryInfo">
        <li><a href="./products/${key}.html">${value.name}</a></li>
        <div class="main--dottedLine"></div>
        <li>${value.price}$</li>
    </ol>`).appendTo(`.${value.categorie}`);
        };
        $.each(data, (key, value) => {
            render(key, value);
        })

        $("#searchButton").click(() => {
            $(".hotDrinks").empty();
            $(".coldDrinks").empty();  
            $(".desserts").empty();  
            let searchValue = $("#searchInput").val();
            $.each(data, (key, value) => {
                if (value.name.toLowerCase().includes(searchValue.toLowerCase()))
                render(key, value);
            })
            if($.trim($(".hotDrinks").html())=='') $(".hotDrinks").html("couldn't find anything") ;
            if($.trim($(".coldDrinks").html())=='') $(".coldDrinks").html("couldn't find anything") ;
            if($.trim($(".desserts").html())=='') $(".desserts").html("couldn't find anything") ;
        })
    });
});