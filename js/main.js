/* keyup if statement (where to enter?)
if (event.which === 13)
	{addExpense();}
*/

// Add new expense to list
function addExpense() {
	if (event.type === 'click' || (event.type === 'keyup' && event.which === 13)) {
	var text = $("#new-text").val();
	var date = $("#new-date").val();
	var amount = $("#new-amount").val();
	$('#unpaidList').append('<li><button class="delete">x</button><a href="#" datetime="'+date+'" data-amount="'+amount+'">'+text+'</a><input type="checkbox"></li>');
	$('#new-text').val("");
}
}

// Delete expense from list
function deleteExpense() {
	$(this).parent('li').remove();
}

// Ready function
$(document).ready(function() {
	$('#unpaidList').sortable();
	$('#add').on('click keyup', addExpense);
	$('.delete').on('click', deleteExpense);


/* Removed styling for now
	$('.widget li').mouseenter(function(e) {
		e.preventDefault();
		$('.widget li').removeClass('highlight');
		$(this).addClass('highlight');
		$(this).sortable({ appendTo: document.body });
		$(this).mouseleave(function() {
			$(this).removeClass('highlight');
		});
    });
*/
});