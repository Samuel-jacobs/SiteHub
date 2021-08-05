
//button to scroll to the top  
		//Get the button
		var mybutton = document.getElementById("topBtn");

		// When the user scrolls down 20px from the top of the document, show the button
		window.addEventListener("scroll", function() {scrollFunction()});

		function scrollFunction() {
			if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
			mybutton.style.display = "block";
			} else {
			mybutton.style.display = "none";
			};
		};

		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		};


/*hide the navbar when you scroll down and show it when you scroll up*/
		var prevScrollpos = window.pageYOffset;
		window.addEventListener("scroll", function() {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
		} else {
		document.getElementById("navbar").style.top = "-50px";
		}
		prevScrollpos = currentScrollPos;
		})	
