console.log("test.js run.............");


$("#test").on("click", function () {
    alert("CLICK");

    $.getJSON("http://10.0.2.2:3000/URLNAME쓰기", function (data) {
        var productsImg = data.results.length;
       console.log(data);
       console.log(data.results.attFileNm);

       for(var i = 0; i < data.results.length; i++) {
           console.log(i);
           $(".products").append("<li><img src="+data.results[i].attFileNm+"></li>");
       }
    });
});