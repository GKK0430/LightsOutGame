$(document).ready(
		function() {

			$(".Three").click(
					function() {
						$("#gameDataCSS").attr("href", "game.css");
						$("#gameDatajs").attr("src", "game.js");
						$(".wrap").html("");
						$(".wrap").html(
								"<div class=\"a1\"></div>"
										+ "<div class=\"a2\"></div>"
										+ "<div class=\"a3\"></div>"
										+ "<div class=\"b1\"></div>"
										+ "<div class=\"b2\"></div>"
										+ "<div class=\"b3\"></div>"
										+ "<div class=\"c1\"></div>"
										+ "<div class=\"c2\"></div>"
										+ "<div class=\"c3\"></div>");
						$(".binder").click();
						$(".Num").html("3");
					})

			$(".Four").click(
					function() {
						$("#gameDataCSS").attr("href", "game2.css");
						$("#gameDatajs").attr("src", "game2.js");
						$(".wrap").html("");
						$(".wrap").html(
								"<div class=\"a1\"></div>"
										+ "<div class=\"a2\"></div>"
										+ "<div class=\"a3\"></div>"
										+ "<div class=\"a4\"></div>"
										+ "<div class=\"b1\"></div>"
										+ "<div class=\"b2\"></div>"
										+ "<div class=\"b3\"></div>"
										+ "<div class=\"b4\"></div>"
										+ "<div class=\"c1\"></div>"
										+ "<div class=\"c2\"></div>"
										+ "<div class=\"c3\"></div>"
										+ "<div class=\"c4\"></div>"
										+ "<div class=\"d1\"></div>"
										+ "<div class=\"d2\"></div>"
										+ "<div class=\"d3\"></div>"
										+ "<div class=\"d4\"></div>");
						
						setTimeout(function() {
							$(".binder").click();
						}, 200)
						$(".Num").html("4");
					})

		})