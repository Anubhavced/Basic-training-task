var arr1=[];
$(document).ready(function () {

  //assign button click event to call function to create html table dynamically
  $("#showMovie").click(function () {
      CreateHtmlTable();
//       var arr1 = Json.parse(local)
// console.log(arr1);
  });
  $("#addMovie").click(function () {
   addMovie();
//       var arr1 = Json.parse(local)
// console.log(arr1);
});
$("#deleteMovie").click(function () {
  deleteMovie();
//       var arr1 = Json.parse(local)
// console.log(arr1);
});
$("#updateMovie").click(function () {
  updateMovie();
//       var arr1 = Json.parse(local)
// console.log(arr1);
});
}

//  console.log(arr.length);
);

  function CreateHtmlTable() {

    //Clear result div
    // $("#ResultArea").html("");

    //Crate table html tag
    // var table = $("<table id=DynamicTable border=1></table>").appendTo("#ResultArea");

    //Create table header row
   

     //Get JSON data by calling action method in controller
     $.ajax({
  url: "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json",
  success:  function(result )  {
   arr = JSON.parse(result);
    console.log(arr);
    $("#ResultArea").html("");
    var table = $("<table id=DynamicTable border=1></table>").appendTo("#ResultArea");
    var rowHeader = $("<tr></tr>").appendTo(table);
    $("<td></td>").text("Title").appendTo(rowHeader);
    $("<td></td").text("Duration").appendTo(rowHeader);
    $("<td></td>").text("ImdbRating").appendTo(rowHeader);
    $("<td></td>").text("Posterurl").appendTo(rowHeader);
    $("<td></td>").text("ReleaseDate").appendTo(rowHeader);
      for(i=0 ;i<arr.length;i++ ) {
console.log(arr);
         var row = $("<tr></tr>").appendTo(table);
          $("<td></td>").text(arr[i].title).appendTo(row);
          $("<td></td>").text(arr[i].duration).appendTo(row);
          $("<td></td>").text(arr[i].imdbRating).appendTo(row);
          $("<td></td>").html(`<img src="${arr[i].posterurl}">`).appendTo(row);
          $("<td></td>").text(arr[i].releaseDate).appendTo(row);

      }}})}
    
          // //Create new row for each record
          // var row = $("<tr></tr>").appendTo(table);
          // $("<td></td>").text(result.title).appendTo(row);
          // $("<td></td>").text(value.duration).appendTo(row);
          // $("<td></td>").text(value.imdbRating).appendTo(row);
          // $("<td></td>").text(value.posterurl).appendTo(row);
          // $("<td></td>").text(value.releaseDate).appendTo(row);

function addMovie(){
  $("#ResultArea").html("");
  var fields = {};
  $("#ResultArea").html(local.length);
  // console.log();
  $('#ResultArea').append("<form action='#' method='POST'/>");
  $('#ResultArea').append("<div class= 'appm'>Save this</div>");
  $('#ResultArea').append("<input type='text' placeholder='title' name='title' id='title'/>");
  $('#ResultArea').append("<input type='text' placeholder='duration' id='duration' name='duration' class= 'address'/>");
  $('#ResultArea').append("<input type='text' placeholder='ImdbRating' id='imdbRating' name='imdbRating'  />");
  $('#ResultArea').append("<input type='file' placeholder='Posterurl' id='Posterurl' name='posterurl'  />");
  $('#ResultArea').append("<input type='text' placeholder='ReleaseDate' id='ReleaseDate' name='releaseDate'  />");
  $('#ResultArea').append("<br><button id='savebutton'>Submit</button>")+ $("#savebutton").on('click' , function () {
    // console.log("this");
    console.log($("#title").val());
    console.log($("#duration").val());
    console.log($("#imdbRating").val());
    console.log(typeof($("#Posterurl").val()));
    console.log($("#ReleaseDate").val());
    var output = []
    var obj = {};
    $('input[type="text"]').each(function(index) { 
     
        obj[$(this).attr('name')] = $(this).val()
        // output.push(obj);
        // console.log($(this).attr('name'));
    })
    $('input[type="file"]').each(function(index) { 
      var myArray = $(this).val();
      console.log(myArray);
      var arrary1 = myArray.split("\\");
      console.log(arrary1);
      obj[$(this).attr('name')] = arrary1;
      // output.push(obj);
      // console.log($(this).attr('name'));
  })
    console.log(obj);
    local.push(obj);
    console.log(local);
    $("#ResultArea").html("");
    var table = $("<table id=DynamicTable border=1></table>").appendTo("#ResultArea");
    var rowHeader = $("<tr></tr>").appendTo(table);
    $("<td></td>").text("Title").appendTo(rowHeader);
    $("<td></td").text("Duration").appendTo(rowHeader);
    $("<td></td>").text("ImdbRating").appendTo(rowHeader);
    $("<td></td>").html("Posterurl").appendTo(rowHeader);
    $("<td></td>").text("ReleaseDate").appendTo(rowHeader);
      for(i=0 ;i<local.length;i++ ) {

         var row = $("<tr></tr>").appendTo(table);
          $("<td></td>").text(local[i].title).appendTo(row);
          $("<td></td>").text(local[i].duration).appendTo(row);
          $("<td></td>").text(local[i].imdbRating).appendTo(row);
          $("<td></td>").html(`<img src="${local[i].posterurl}">`).appendTo(row);
          $("<td></td>").text(local[i].releaseDate).appendTo(row);

      }

    

      
 });
;
  $('#ResultArea').append("</form>");
}


function deleteMovie(){
  $("#ResultArea").html("");


  for(i=0; i<local.length;i++){
    local[i].id = i+1 ;
  }
  console.log(local);
  // console.log(local[0].id);
  $('#ResultArea').append("<form action='#' method='POST'/>");
  $('#ResultArea').append("<div class= 'appm'>Save this</div>");
  $('#ResultArea').append("<input type='text' placeholder='id' name='id' id='id'/>");
  $('#ResultArea').append("<br><button id='savebutton'>Submit</button>")+ $("#savebutton").on('click' , function () {
    // console.log($("#id").val());

    var ids =  $("#id").val();
    console.log(ids);
    for(var i = 0; i < local.length; i++) {
      if(local[i].id == ids) {
        local.splice(i, 1);
          break;
      }
  }

//  $("#ResultArea").html("");
  


  console.log(local.length);
  console.log(local);
//console.log(final);
$("#ResultArea1").html("");
var table = $("<table id=DynamicTable border=1></table>").appendTo("#ResultArea1");
  var rowHeader = $("<tr></tr>").appendTo(table);
  $("<td></td>").text("Id").appendTo(rowHeader);
  $("<td></td>").text("Title").appendTo(rowHeader);
  $("<td></td").text("Duration").appendTo(rowHeader);
  $("<td></td>").text("ImdbRating").appendTo(rowHeader);
  $("<td></td>").text("Posterurl").appendTo(rowHeader);
  $("<td></td>").text("ReleaseDate").appendTo(rowHeader);
    for(i=0 ;i<local.length;i++ ) {

       var row = $("<tr></tr>").appendTo(table);
   $("<td></td>").text(local[i].id).appendTo(row);
        $("<td></td>").text(local[i].title).appendTo(row);
        $("<td></td>").text(local[i].duration).appendTo(row);
        $("<td></td>").text(local[i].imdbRating).appendTo(row);
        $("<td></td>").html(`<img src="${local[i].posterurl}">`).appendTo(row);
        $("<td></td>").text(local[i].releaseDate).appendTo(row);

    }
  }
  
  
  );



}


function updateMovie(){
  $("#ResultArea").html("");

  for(i=0; i<local.length;i++){
    local[i].id = i+1 ;
  }

  // console.log("anubahv");
  $('#ResultArea').append("<input type='text' placeholder='Enter movie title name'  name='title' id='title'/>") +$('#title').on('change', function(){
    // console.log("done");

    var input,  table,filters, tr, td, i, txtValue;
    input = document.getElementById("title");
    filters = input.value.toUpperCase();
    console.log(filters);
    table = document.getElementById("DynamicTable");
    tr = table.getElementsByTagName("tr");
   
      filllter(filters ,$("#Release").val());
 
    // console.log(tr.length)
  
    // for (i = 0; i < tr.length; i++) {
    //   td = tr[i].getElementsByTagName("td")[1];
    //   if (td) {
    //     txtValue = td.textContent || td.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = "";
    //     } else {
    //       tr[i].style.display = "none";
    //     }
    //   }       
    // }
 
  });
  
  
  // $("#ResultArea").html("");

  $('#ResultArea').append("<input type='text' placeholder='Enter Releasing Year'  name='title' id='Release'/>") +$('#Release').on('change', function(){
    // console.log("done");

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("Release");
    filter = input.value.toUpperCase();
    // console.log(filter);
    table = document.getElementById("DynamicTable");
    tr = table.getElementsByTagName("tr");
    // console.log(tr.length)
    // for (i = 0; i < tr.length; i++) {
    //   td = tr[i].getElementsByTagName("td")[5];
    //   if (td) {
    //     txtValue = td.textContent || td.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = "";
    //     } else {
    //       tr[i].style.display = "none";
    //     }
    //   }       
    // }

    filllter($("#title").val(),filter);
  });


  function filllter(filters , filter) {
    // console.log(filters);
    // console.log(filter);
    table = document.getElementById("DynamicTable");
    tr = table.getElementsByTagName("tr");
    if(filter != "" && filters == ""){
console.log("2input");
 for (i = 0; i < tr.length; i++) {
  console.log(filter);
      td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    } 

    }
    else if(filters != "" && filter==""){
      console.log("1input");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filters) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
        
    } 
  
    else{
      console.log("bothinput");
      for(i= 0 ; i <tr.length;i++){
        td = tr[i].getElementsByTagName("td")[1];
        td1 = tr[i].getElementsByTagName("td")[5];
        // console.log(td);
//        console.log($("#title").val());
        // console.log(td1);
        if(td && td1){
          txtValue = td.textContent || td.innerText;
console.log(typeof(txtValue));
console.log(filters);
          txtValue1 = td1.textContent || td1.innerText;
console.log(typeof(txtValue1));
console.log(filter);
          if ( txtValue.indexOf(filters) > -1 && txtValue1.indexOf(filter) > -1) {
console.log("done");

            tr[i].style.display = "";
console.log( tr[i]);
          } else {
            tr[i].style.display = "none";
          }
        }

      }
    }

  }
  
// function filter(){
//   console.log("done");
// }

    var table = $("<table id=DynamicTable border=1></table>").appendTo("#ResultArea");
    var thead =$(" <thead></thead>").appendTo(table);
    var tbody =$(" <tbody id=one></tbody>").appendTo(table);
    var rowHeader = $("<tr></tr>").appendTo(thead);
    $("<th></th>").text("id").appendTo(rowHeader);
    $("<th></th>").text("Title").appendTo(rowHeader);
    $("<th></th>").text("Duration").appendTo(rowHeader);
    $("<th></th>").text("ImdbRating").appendTo(rowHeader);
    $("<th></th>").html("Posterurl").appendTo(rowHeader);
    $("<th></th>").text("ReleaseDate").appendTo(rowHeader);
      for(i=0 ;i<local.length;i++ ) {
   
         var row = $("<tr></tr>").appendTo(tbody);
         $("<td id=''></td>").text(local[i].id).appendTo(row);
          $("<td id=''></td>").text(local[i].title).appendTo(row);
          $("<td></td>").text(local[i].duration).appendTo(row);
          $("<td></td>").text(local[i].imdbRating).appendTo(row);
          $("<td></td>").html(`<img src="${local[i].posterurl}">`).appendTo(row);
          $("<td></td>").text(local[i].releaseDate).appendTo(row);

      }

}

// $(document).ready(function(){
         
//   $("#savebutton").on('click' , function () {
//     console.log("this");
//       // console.log($("#rname").val());
      
//  });


// })
// $.ajax({
//     url: "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json",
 
//     success:  function( result ) {
//         // $( "#demo" ).html( "<strong>" + result + "</strong> degrees" );
//         var arr = JSON.parse(result);
//         console.log(arr.length);
//         document.write(`<div id="myBtnContainer">`); 
//         // document.write(`<button class="btn1" onclick="getMovie()">Get movie</button>`);
        

// // document.write(`<table id="first"><tr><th>Title</th><th>Duration</th><th>ImdbRating</th><th>Posterurl</th><th>ReleaseDate</th></tr>`);
// // // $('#demo').html(arr[0].title + "<br>" +arr[0].duration + "<br>" +arr[0].imdbRating + "<br>" +"<img src="+arr[0].posterurl+"/>" + "<br>" +arr[0].releaseDate);
// // for(i=0 ; i< arr.length ; i++){
// // document.write(`<tr><td>${arr[i].title} </td><td>${arr[i].duration}</td><td>${arr[i].imdbRating}</td><td><img src="${arr[i].posterurl}"></td><td>${arr[i].releaseDate}</td></tr>`);
// // }
// // document.write(`</table>`);
    

//     }   
//   });
// // $('#demo').append(result.title);













      
