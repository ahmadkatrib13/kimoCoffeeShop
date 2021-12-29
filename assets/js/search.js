$(function(){
    
    $("#searchButton").click(()=>{
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
})