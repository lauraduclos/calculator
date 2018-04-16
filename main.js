$(document).ready(function () {

	$(".item").find("input").on("keyup keydown keypress change", function () {

		var input = $(this),
			this_row = input.closest(".item"),
			population = parseFloat(the_row.find(".qty_p").val()),
			center = parseFloat(the_row.find(".qty_c").val()),
			pop_percent = parseFloat(the_row.data("pop_percent"))
		post_total = parseFloat(population * center)
		// total_after = addTariff(total_before, tariff)

		the_row.find(".post_total").find("span").text(post_total)

		var post_total = 0

		$(".post_total").each(function () {
			var this_post_total = parseFloat($(this).find("span").text());
			post_total = population + centers;

		});

		$("#post_total").find("span").text(post_total);
	});


})