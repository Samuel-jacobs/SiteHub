//function for opening nav
function openNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.width = "250px";
			//document.body.style.backgroundColor = "green";
		} else {
			document.getElementById("myNav").style.width = "100%";
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 

//function for opening nav
function closeNav() {
	let x = window.matchMedia("(max-width: 768px)");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.width = "0%";
			//document.body.style.backgroundColor = "green";
		} else {
			document.getElementById("myNav").style.width = "100%";
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 

//back to top button 
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//loading function
		/*var myVar;
			
			function loadingFunction() {
				myVar = setTimeout(showPage, 2000);
			}
			
			function showPage() {
				document.getElementById("loader").style.display = "none";
				document.getElementById("main").style.display = "block";
				document.getElementById("header").style.display = "block";
			} */