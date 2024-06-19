// NAVBAN HIDE/SHOW

let prevScrollPos = window.scrollY || window.pageYOffset;

window.onscroll = function () {
	const currentScrollPos = window.scrollY || window.pageYOffset;

	if (prevScrollPos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-80px"; // Adjust this value based on your navbar height
	}

	prevScrollPos = currentScrollPos;
};

// NAVBAN HIDE/SHOW ENDS HERE


// CAROUSEL BEGINS

window.addEventListener("load", () => {
	autoSlide();
})

function autoSlide() {
	setInterval(() => {
		slide(getItemActiveIndex() + 1);
	}, 6000);
}

function slide(toIndex) {
	const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
	const itemActive = document.querySelector(".carousel_item__active");

	if (toIndex >= itemsArray.length) {
		toIndex = 0;
	}

	const newItemActive = itemsArray[toIndex];

	newItemActive.classList.add("carousel_item__pos_next");
	setTimeout(() => {
		newItemActive.classList.add("carousel_item__next");
		itemActive.classList.add("carousel_item__next");
	}, 20);

	newItemActive.addEventListener("transitionend", () => {
		itemActive.className = "carousel_item";
		newItemActive.className = "carousel_item carousel_item__active";
	}, {
		once: true
	});
}

function getItemActiveIndex() {
	const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
	const itemActive = document.querySelector(".carousel_item__active");
	const itemActiveIndex = itemsArray.indexOf(itemActive);
	return itemActiveIndex;
}

// CAROUSEL ENDS HERE

// FAQ STARTS HERE

document.addEventListener("DOMContentLoaded", function () {
	var faqQuestions = document.querySelectorAll(".faq-question");

	faqQuestions.forEach(function (question) {
		question.addEventListener("click", function () {
			var answer = this.nextElementSibling;
			var icon = this.querySelector(".faq-icon");

			if (answer.style.maxHeight) {
				answer.style.maxHeight = null;
				this.classList.remove("active");
				icon.classList.replace("fa-minus", "fa-plus"); // Change icon to "+"
			} else {
				answer.style.maxHeight = answer.scrollHeight + "px";
				this.classList.add("active");
				icon.classList.replace("fa-plus", "fa-minus"); // Change icon to "-"
			}

			// Close other answers
			faqQuestions.forEach(function (otherQuestion) {
				if (otherQuestion !== question) {
					otherQuestion.nextElementSibling.style.maxHeight = null;
					otherQuestion.classList.remove("active");
					var otherIcon = otherQuestion.querySelector(".faq-icon");
					otherIcon.classList.replace("fa-minus", "fa-plus"); // Ensure other icons are "+"
				}
			});
		});
	});
});



// FAQ ENDS HERE
