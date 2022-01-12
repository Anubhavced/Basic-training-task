var products = [
    new procuctsItem("Bike","Bike1","../bfour.png",500),new procuctsItem("Blazer","Blazer2","../blone.png",1500),new procuctsItem("Car","Car2","../two.png",5400),new procuctsItem("Blazer","Blazer1","../bltwo.png",3500),new procuctsItem("Bike","Bike2","../bone.png",4500),new procuctsItem("Shirt","Shirt1","../stwo.png",5600),new procuctsItem("Bike","Bike3","../btwo.png",6500),new procuctsItem("Car","Car3","../five.png",7500),new procuctsItem("Mobile","Mobile1","../fone.png",8500),new procuctsItem("Car","Car4","../four.png",9500),new procuctsItem("Mobile","Mobile2","../ftwo.png",5100),new procuctsItem("Car","Car1","../one.png",5200),new procuctsItem("Shirt","Shirt2","../sone.png",5300),new procuctsItem("Car","Car5","../three.png",5400),new procuctsItem("Shirt","Shirt3","../sthree.png",5400),new procuctsItem("Blazer","Blazer3","../blthree.png",2500),new procuctsItem("Bike","Bike4","../bthree.png",5500),
]
function procuctsItem(Category,Name,Image,Price) {
    this.Category = Category;
    this.Name = Name;
    this.Image = Image;
    this.Price = Price;
}
// $(function() {
//     $(".btn").click(function() {
//        // remove classes from all
//        $(".btn").removeClass("active");
//        // add class to the one we clicked
//        $(this).addClass("active");
//     });
//  });
console.log(products.length);
// var carts = [];
// console.log(carts.length);
document.write(`<div id="myBtnContainer">`);
var bucategory =[];
for(i = 0 ;i< products.length ;i++){  
    if(!bucategory.includes(`${products[i].Category}`)){
        document.write(`<button class="btn" product-filter= "${products[i].Category}" > ${products[i].Category}</button>`);
        bucategory.push(`${products[i].Category}`);
    }
}

var numItems = 0
document.write(`</div>`);
document.write(`<h1>Our Products</h1>`);
document.write(`<div class="container" id="main">`);
for( i = 0 ;i< products.length ;i++){
    document.write(`<div class="products ${products[i].Category}" ><h2>${products[i].Name}</h2>`);
    document.write(`<img src="${products[i].Image}">`);
    document.write(`<div id="inner"><h2>${products[i].Price}</h2></div></div>`);
    numItems = numItems + products[i].Price;
}
document.write(`</div>`);
document.write(`<div class="filter">`);
document.write(`</div>`);
$('.filter').html(`<h1><br>Rs.${numItems}</h1>`);
var value = [];
var arr = [];
var back =[];
var str = "";
$(document).ready(function(){  
    $('.btn').click(function(){
       $(this).attr('class', 'active');
         cate =$(this).attr('product-filter');
        //  var checked = $(this).attr('class');
        if(!value.includes(cate)){      
        value.push(cate);
        // console.log(value);
    }else{
        $(this).attr('class', 'btn');
        value.splice($.inArray(cate, value), 1);
        // console.log(value);
    }
    console.log(value.length);
    var show = "";
    var count = 0 ;
    var numItems = 0
    for(i=0; i<value.length; i++){
        // $('.products').filter('.value[i]').show('100000000');
        // var show = show+$('.products').filter('.'+value[i]).show('100000000');
        // $('.products').not('.'+value[i]).hide('100000000');

      
        if(count == 0){
            show = show + "." +value[i];

            count++;     
        }else{
            show = show +","+"."+ value[i]   
        }
            for(j=0 ; j<products.length ; j++){
                if(products[j].Category == value[i]){
                    numItems = numItems + products[j].Price;
                }
            }     
    }
    console.log(numItems);   
    $('.products').not(show).fadeOut(1000);;
    $('.products').filter(show).fadeIn(1000);;
    // console.log($('.products').filter("."+active).length);
    $('.filter').html(`<h1>Rs.${numItems}</h1>`);
 
}
    )})
    // var str = $('.active').text();
    // var arr = JSON.parse(str);
    // console.log(str);










//     if($('.btn').hasClass('active'))
//     {
    
//  var str  = $('.active').text();
//  console.log(str);
//      var arr = str.split(" ");
//      console.log(arr);
//      for(j=1; j<arr.length;j++)
//      {
//          for(i=0;i<products.length;i++){
//              if(arr[j] == products[i].Category ){
//             console.log( products[i].Category);
//          } 
//          }
//          // $('.products').filter('.'+arr[i]).show('100000000');
//      }
// //       $('.products').not('.'+value).hide('100000000');
// //   $('.products').filter('.'+value).show('100000000');else{
//     $('.products').hide('10000000');
// }
   
