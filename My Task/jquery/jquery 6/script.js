var value = [];

var arr1 = [];
$(document).ready(function () {

  $.ajax({
    url: "https://raw.githubusercontent.com/Anubhavced/data/main/productdata1.json",
    success:  function(result ){
      var arr = JSON.parse(result);
      // console.log(arr);
      var prosec = $("<div id=productSection></div>").appendTo("#ResultArea");
      for(i=0; i<arr.length;i++){
        console.log(arr1.push(arr[i]))
  $(`<div id=${i}></div>`).appendTo(prosec);
    $(`<img src="${arr[i].url}">`).appendTo(`#${i}`);
    $(`<h2>Product : ${arr[i].name}</h2>`).appendTo(`#${i}`);
    $(`<h4> Price : ${arr[i].price}</h4>`).appendTo(`#${i}`);
    $(`<button id=btn${i} class=btn onclick=addTableInView(this.id)>Add to Cart</button>`).appendTo(`#${i}`);
      }      
    } 
});
})
console.log(arr1);
var count= 0 ;
function addTableInView(clicked_id) {
  // console.log(arr);
  $(this).attr('class', 'active');
          cate =clicked_id;
          // console.log(typeof(clicked_id));
         //  var checked = $(this).attr('class');
         if(!value.includes(cate.slice(3))){      
         value.push(cate.slice(3));
        //  console.log(value);
      }else{
        //  $(this).attr('class', 'btn');
        //  value.splice($.inArray(cate, value), 1);
        console.log(typeof(1));
        console.log(typeof(arr1[cate.slice(3)].quantity));
        arr1[cate.slice(3)].quantity = parseInt(arr1[cate.slice(3)].quantity) + 1 ;
         console.log(arr1);
      }

      // console.log(value);
      $("#tbody").html("");
      for(i = 0 ; i<value.length ; i++){

      if(count == 0){
        count++;
      var prosec = $("<div >").appendTo("#ResultArea1");
      var prosec = $("<div id=total>").appendTo("#ResultArea1");
      var main = $(`<table >`).appendTo(prosec);
      var thead = $(`<thead>`).appendTo(main);
      var tr = $(`<tr>`).appendTo(thead);
      $("<td></td>").text("Serial No.").appendTo(tr);
      $("<td></td").text("Image").appendTo(tr);
      $("<td></td").text("Products").appendTo(tr);
      $("<td ></td>").text("Price").appendTo(tr);
      $("<td></td>").text("Quantity").appendTo(tr);
      
      var tbody = $(`<tbody id=tbody></tbody>`).appendTo(main);


      var tr = $(`<tr></tr>`).appendTo(tbody);
      $("<td></td>").text(i+1).appendTo(tr);
      // console.log($('#0').val);
    $("<td></td").html(`<img src="${arr1[value[i]].url}">`).appendTo(tr);
    $("<td></td>").text(arr1[value[i]].name).appendTo(tr);
    $("<td></td>").text(arr1[value[i]].price).appendTo(tr);
    $("<td></td").text(arr1[value[i]].quantity).appendTo(tr);
    $("<td></td").html(`<button id=del${i} onclick=deleteTable(this.id)>Delete</button`).appendTo(tr);
      // $(`<td></td>`).appendTo(tr);
      }
      else{
        // console.log("hello");
        // console.log(i);
      
        var tr = $(`<tr></tr>`).appendTo("#tbody");
        $("<td></td>").text(i+1).appendTo(tr);
        // console.log($('#0').val);
      $("<td></td").html(`<img src="${arr1[value[i]].url}">`).appendTo(tr);
      $("<td></td>").text(arr1[value[i]].name).appendTo(tr);
      $("<td></td>").text(arr1[value[i]].price).appendTo(tr);
      $("<td></td").text(arr1[value[i]].quantity).appendTo(tr);
      $("<td></td").html(`<button onclick=deleteTable() >Delete</button`).appendTo(tr);
        // $(`<td></td>`).appendTo(tr);
      }
    }
  
    calculatePrice();
}

function calculatePrice(){
  // console.log("total");
  var total= 0 ;
  // console.log($('#tbody tr').length);
  table = document.getElementById("tbody");
  tr = table.getElementsByTagName("tr");
  for(i=0; i<$('#tbody tr').length; i++){
    td = tr[i].getElementsByTagName("td")[4];
    td1 = tr[i].getElementsByTagName("td")[3];
    // total = td + td1
   var a = parseInt(td.innerText);
    var b = parseInt(td1.innerText);
    console.log(a);
    console.log(b);
    console.log(typeof(total));
    total = total + (a*b);
    
    // console.log(total);
    // console.log(typeof(parseInt(td.innerText)));
    // console.log(a);
    // console.log(typeof(td));
    // var a=10;
    // var b=parseInt(td.innerText);
    // console.log(a*b);
    // console.log(parseInt(td.innerText)*9);
  }
  $("#ResultArea2").html("");
  var ttl = $("<h3>").appendTo("#ResultArea2");
    ttl.text("Total is :" + total).appendTo(ttl);
  console.log(total);
}
function deleteTable(clicked_id){
  console.log(clicked_id)
}