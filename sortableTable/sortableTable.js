/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(document).ready(function(){
	var rows = $("tbody > tr")

 $('th').on('click', function(e){
 	var col = e.currentTarget.cellIndex;
 	


 	
 $('tbody').html(
 	rows.sort(function(a,b){
 		var keyA = $(a)[0].children[col].innerText;
		var keyB = $(b)[0].children[col].innerText;
		return Number(keyA) ? Number(keyA) > Number(keyB) : keyA > keyB;
 	})
 	)
 })

})


// var $wrapper = $('.testWrapper');

// $wrapper.find('.test').sort(function (a, b) {
//     return +a.dataset.percentage - +b.dataset.percentage;
// })
// .appendTo( $wrapper );
// });


// var $table=$('table');

// var rows = $table.find('tr').get();
// rows.sort(function(a, b) {
// var keyA = $(a).attr('myAttribute');
// var keyB = $(b).attr('myAttribute');
// // if (keyA < keyB) return 1;
// if (keyA > keyB) return -1;
// return 0;
// });
// $.each(rows, function(index, row) {
// $table.children('tbody').append(row);
// });
