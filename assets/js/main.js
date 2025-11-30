(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
			/* ================================
       Mobile Menu Js Start
    ================================ */

			$("#mobile-menu").meanmenu({
				meanMenuContainer: ".mobile-menu",
				meanScreenWidth: "1199",
				meanExpand: ['<i class="far fa-plus"></i>'],
			});

			$("#mobile-menus").meanmenu({
				meanMenuContainer: ".mobile-menus",
				meanScreenWidth: "19920",
				meanExpand: ['<i class="far fa-plus"></i>'],
			});

			$documentOn.on("click", ".mean-expand", function () {
				let icon = $(this).find("i");

				if (icon.hasClass("fa-plus")) {
					icon.removeClass("fa-plus").addClass("fa-minus");
				} else {
					icon.removeClass("fa-minus").addClass("fa-plus");
				}
			});

			/* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

			// Open offcanvas
			$(".sidebar__toggle").on("click", function () {
				$(".offcanvas__info").addClass("info-open");
				$(".offcanvas__overlay").addClass("overlay-open");

				// Hide sticky item
				$(".sidebar-sticky-item").fadeOut().removeClass("active");
			});

			// Close offcanvas
			$(".offcanvas__close, .offcanvas__overlay").on("click", function () {
				$(".offcanvas__info").removeClass("info-open");
				$(".offcanvas__overlay").removeClass("overlay-open");

				// Show sticky item
				$(".sidebar-sticky-item").fadeIn().addClass("active");
			});

			/* ================================
        Body Overlay Js Start
        ================================ */

			$(".body-overlay").on("click", function () {
				$(".offcanvas__area").removeClass("offcanvas-opened");
				$(".df-search-area").removeClass("opened");
				$(".body-overlay").removeClass("opened");

				// Show sticky item when overlay clicked
				$(".sidebar-sticky-item").fadeIn().addClass("active");
			});

			/* ================================
        Offcanvas Link Click (Optional)
        ================================ */

			$(".offcanvas a").on("click", function () {
				$(".sidebar-sticky-item").fadeIn().addClass("active");
			});

			/* ================================
       Sticky Header Js Start
    ================================ */

			$windowOn.on("scroll", function () {
				if ($(this).scrollTop() > 250) {
					$("#header-sticky").addClass("sticky");
				} else {
					$("#header-sticky").removeClass("sticky");
				}
			});

			// Register GSAP Plugins
			// gsap
			// .registerPlugin
			// ScrollTrigger,
			// ScrollSmoother,
			// CustomEase,
			// ScrollToPlugin
			// ();
			// Smooth active
			// var device_width = window.screen.width;

			// if (device_width > 767) {
			// 	if (
			// 		document
			// 			.querySelector("#has_smooth")
			// 			.classList.contains("has-smooth")
			// 	) {
			// 		const smoother = ScrollSmoother.create({
			// 			smooth: 0.9,
			// 			effects: device_width < 1025 ? false : true,
			// 			smoothTouch: 0.1,
			// 			normalizeScroll: {
			// 				allowNestedScroll: true,
			// 			},
			// 			ignoreMobileResize: true,
			// 		});
			// 	}
			// }

			/* ================================
       Video & Image Popup Js Start
    ================================ */

			$(".img-popup").magnificPopup({
				type: "image",
				gallery: {
					enabled: true,
				},
			});

			$(".video-popup").magnificPopup({
				type: "iframe",
				callbacks: {},
			});

			/* ================================
       Counterup Js Start
    ================================ */

			$(".count").counterUp({
				delay: 15,
				time: 4000,
			});

			/* ================================
       Wow Animation Js Start
    ================================ */

			new WOW().init();

			/* ================================
       Nice Select Js Start
    ================================ */

			if ($(".single-select").length) {
				$(".single-select").niceSelect();
			}

			/* ================================
       Parallaxie Js Start
    ================================ */

			if ($(".parallaxie").length && $(window).width() > 991) {
				if ($(window).width() > 768) {
					$(".parallaxie").parallaxie({
						speed: 0.55,
						offset: 0,
					});
				}
			}

			/* ================================
      Hover Active Js Start
    ================================ */

			$(
				".counter-box, .service-card-item, .choose-list li, .feature-box-style-3, .about-wrapper-5 .about-icon-item, .service-box-style-5, .counter-box-style-5, .work-process-box-style-4, .contact-info-box"
			).hover(
				// Function to run when the mouse enters the element
				function () {
					// Remove the "active" class from all elements
					$(
						".counter-box, .service-card-item, .choose-list li, .feature-box-style-3, .about-wrapper-5 .about-icon-item, .service-box-style-5, .counter-box-style-5, .work-process-box-style-4, .contact-info-box"
					).removeClass("active");
					// Add the "active" class to the currently hovered element
					$(this).addClass("active");
				}
			);

			/* ================================
     Button Hover Js Start
    ================================ */

			if (typeof gsap !== "undefined") {
				const hoverBtns = gsap.utils.toArray(".wt-hover-btn-wrapper");
				const hoverBtnItems = gsap.utils.toArray(".wt-hover-btn-item");

				if (hoverBtns.length && hoverBtnItems.length) {
					hoverBtns.forEach((btn, i) => {
						const $btn = $(btn);

						$btn.on("mousemove", function (e) {
							const relX = e.pageX - $btn.offset().left;
							const relY = e.pageY - $btn.offset().top;

							gsap.to(hoverBtnItems[i], {
								duration: 0.6,
								x: ((relX - $btn.width() / 2) / $btn.width()) * 60,
								y: ((relY - $btn.height() / 2) / $btn.height()) * 60,
								ease: "power2.out",
							});
						});

						$btn.on("mouseleave", function () {
							gsap.to(hoverBtnItems[i], {
								duration: 0.6,
								x: 0,
								y: 0,
								ease: "power2.out",
							});
						});
					});
				}
			}

			/* ================================
     Scrolldown Js Start
    ================================ */
			$("#scrollDown").on("click", function () {
				setTimeout(function () {
					$("html, body").animate({ scrollTop: "+=1000px" }, "slow");
				}, 1000);
			});

			/* ================================
      Brand Slider Js Start
    ================================ */
			if ($(".brand-slider").length > 0) {
				const brandSlider = new Swiper(".brand-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},

					breakpoints: {
						1399: {
							slidesPerView: 6,
						},
						1199: {
							slidesPerView: 5,
						},
						991: {
							slidesPerView: 4,
						},
						767: {
							slidesPerView: 3,
						},
						575: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 2,
						},
					},
				});
			}

			//>> Testimonial Slider Start <<//
			if ($(".testimonial-slider").length > 0) {
				const TestimonialSlider = new Swiper(".testimonial-slider", {
					spaceBetween: 20,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".cuss-swiper-pagination",
						clickable: true,
					},
					breakpoints: {
						1199: {
							slidesPerView: 1,
						},
						991: {
							slidesPerView: 1,
						},
						767: {
							slidesPerView: 1,
						},
						575: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> business-slide-wrap Start <<//
			if ($(".business-slide-wrap").length > 0) {
				const businessSlideWrap = new Swiper(".business-slide-wrap", {
					spaceBetween: 20,
					speed: 1300,
					loop: true,
					centeredSlides: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".cus-swiper-pagination3",
						clickable: true,
					},
					breakpoints: {
						1199: {
							slidesPerView: 3.5,
						},
						991: {
							slidesPerView: 2.9,
						},
						767: {
							slidesPerView: 2.1,
						},
						575: {
							slidesPerView: 1.8,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}
			//>> business-slide-wrap Start <<//
			if ($(".business-slide-wrap03").length > 0) {
				const businessSlideWrap = new Swiper(".business-slide-wrap03", {
					spaceBetween: 20,
					speed: 1300,
					loop: true,
					centeredSlides: false,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".cus-swiper-pagination3",
						clickable: true,
					},
					breakpoints: {
						1399: {
							slidesPerView: 4,
						},
						1199: {
							slidesPerView: 3.5,
						},
						991: {
							slidesPerView: 2.8,
						},
						767: {
							slidesPerView: 2.3,
						},
						575: {
							slidesPerView: 1.4,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//New Slide add benax
			//>> Testimonial Slider Start <<//
			if ($(".testimonial-slider01").length > 0) {
				const TestimonialSlider01 = new Swiper(".testimonial-slider01", {
					spaceBetween: 0,
					speed: 1300,
					centeredSlides: true,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					pagination: {
						el: ".cus-swiper-pagination",
						clickable: true,
						renderBullet: function (index, className) {
							// Limit bullets to max 4
							if (index < 4) {
								return '<span class="' + className + '"></span>';
							}
							return ""; // don't render extra bullets
						},
					},

					breakpoints: {
						1199: {
							slidesPerView: 5.2,
						},
						991: {
							slidesPerView: 4.2,
						},
						767: {
							slidesPerView: 3.2,
						},
						575: {
							slidesPerView: 2.2,
						},
						0: {
							slidesPerView: 1.1,
							spaceBetween: 20,
						},
					},
				});
			}

			/* ================================
        Mouse Cursor Animation Js Start
    ================================ */

			// if ($(".mouseCursor").length > 0) {
			//     function itCursor() {
			//         var myCursor = jQuery(".mouseCursor");
			//         if (myCursor.length) {
			//             if ($("body")) {
			//                 const e = document.querySelector(".cursor-inner"),
			//                     t = document.querySelector(".cursor-outer");
			//                 let n, i = 0, o = !1;
			//                 window.onmousemove = function(s) {
			//                     if (!o) {
			//                         t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
			//                     }
			//                     e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
			//                     n = s.clientY;
			//                     i = s.clientX;
			//                 };
			//                 $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
			//                     e.classList.add("cursor-hover");
			//                     t.classList.add("cursor-hover");
			//                 });
			//                 $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
			//                     if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
			//                         e.classList.remove("cursor-hover");
			//                         t.classList.remove("cursor-hover");
			//                     }
			//                 });
			//                 e.style.visibility = "visible";
			//                 t.style.visibility = "visible";
			//             }
			//         }
			//     }
			//     itCursor();
			// }

			/* ================================
        Back To Top Button Js Start
    ================================ */
			// $windowOn.on('scroll', function() {
			//     var windowScrollTop = $(this).scrollTop();
			//     var windowHeight = $(window).height();
			//     var documentHeight = $(document).height();

			//     if (windowScrollTop + windowHeight >= documentHeight - 10) {
			//         $("#back-top").addClass("show");
			//     } else {
			//         $("#back-top").removeClass("show");
			//     }
			// });

			// $documentOn.on('click', '#back-top', function() {
			//     $('html, body').animate({ scrollTop: 0 }, 800);
			//     return false;
			// });

			/* ================================
       Search Popup Toggle Js Start
    ================================ */

			if ($(".search-toggler").length) {
				$(".search-toggler").on("click", function (e) {
					e.preventDefault();
					$(".search-popup").toggleClass("active");
					$("body").toggleClass("locked");
				});
			}

			/* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
			if ($("#smooth-wrapper").length && $("#smooth-content").length) {
				gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

				gsap.config({
					nullTargetWarn: false,
				});

				let smoother = ScrollSmoother.create({
					wrapper: "#smooth-wrapper",
					content: "#smooth-content",
					smooth: 2,
					effects: true,
					smoothTouch: 0.1,
					normalizeScroll: false,
					ignoreMobileResize: true,
				});
			}

			/* ================================
       Text Anim Js Start
    ================================ */

			if ($(".text-anim").length) {
				let staggerAmount = 0.03,
					translateXValue = 20,
					delayValue = 0.1,
					easeType = "power2.out",
					animatedTextElements = document.querySelectorAll(".text-anim");

				animatedTextElements.forEach((element) => {
					let animationSplitText = new SplitText(element, {
						type: "chars, words",
					});

					// ScrollTrigger দিয়ে section এ ঢুকলে animation শুরু হবে
					ScrollTrigger.create({
						trigger: element,
						start: "top 85%",
						onEnter: () => {
							gsap.from(animationSplitText.chars, {
								duration: 1,
								delay: delayValue,
								x: translateXValue,
								autoAlpha: 0,
								stagger: staggerAmount,
								ease: easeType,
							});
						},
					});
				});
			}
		}); // End Document Ready Function

     /* ================================
       Preloader Js Start
    ================================ */

    //  function loader() {
    //     $(window).on('load', function() {
    //         // Animate loader off screen
    //         $(".preloader").addClass('loaded');                    
    //         $(".preloader").delay(600).fadeOut();                       
    //     });
    // }
    // loader();


  
  })(jQuery); // End jQuery

