$(document).ready(function() {
  // init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	// new ScrollMagic.Scene({triggerElement: "#parallax-1"})
	// 				.setTween("#parallax-1 > .section__image.red", {y: "10%", ease: Linear.easeNone})
	// 				.addTo(controller);

  // new ScrollMagic.Scene({triggerElement: "#parallax-1"})
	// 				.setTween("#parallax-1 > .section__image.layer-1", {y: "50%", ease: Linear.easeNone})
	// 				.addTo(controller);

	// new ScrollMagic.Scene({triggerElement: "#parallax-1"})
	// 				.setTween("#parallax-1 > .section__content", {y: "800%", ease: Linear.easeNone})
	// 				.addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax-1"})
					.setTween("#parallax-1 > .section__image.layer-2", {y: "50%", ease: Linear.easeNone})
					.addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax-1"})
					.setTween("#parallax-1 > .section__image.layer-3", {y: "75%", ease: Linear.easeNone})
					.addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax-1"})
					.setTween("#parallax-1 > .section__image.layer-4", {y: "110%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax-1"})
					.setTween("#parallax-1 > .section__image.layer-5", {y: "150%", ease: Linear.easeNone})
					.addTo(controller);


});
