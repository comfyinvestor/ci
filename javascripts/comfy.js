
//lafirenza.js
//What am I doinnn?


//var main = function() {

	//event listener for submitting a form
//	$('form').submit(function(event) {
//		var $input = $(event.target).find('input');
//		var comment = $input.val();
//
//		if (comment != "") {
//			var html = $('<li>').text(comment); //creates new li element
//			html.prependTo('#comments'); //prepends it to comments
//			$input.val("");
//		}
//
//		return false; //ends execution of the function.. function needs to return something
//	});
//}

//$(document).ready(main); //when the document is ready, call the main function










$("#stock").submit(function(){

//$("#stock").submit(function(){
    var mystock = $("#stock").innerHTML;
    var $mystock2 = $(event.target).find('#stock');
    debugger;

    console.log(mystock);
    console.log($mystock2);
    // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("searchedstock", mystock);
    // Retrieve
    document.getElementById("stock").innerHTML = localStorage.getItem("searchedstock");
} else {
    document.getElementById("stock").innerHTML = "Sorry, your browser does not support Web Storage...";
}

return false; //ends execution of the function.. function needs to return something

});


