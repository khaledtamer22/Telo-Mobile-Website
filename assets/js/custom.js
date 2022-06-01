// $(window).on('load', (function () {
	// $(".preloader video").fadeOut(2000, function () {
	// 	$(this).parent().fadeOut(500, function () {
	// 		$(this).remove();
	// 		$("body").css('overflow', 'auto');
	// 		$(".section-one").addClass("fade")
	// 	})
	// })
// }));
$(window).scroll(function () {
	if ($(this).scrollTop() > ($("section").height() * 3.1) && $(this).scrollTop() < ($("section").height() * 4)) {
		$("#resizing-text").addClass("resizing-text-shown");
		$("#resizing-text").removeClass("resizing-text-hidden")
	} else {
		$("#resizing-text").addClass("resizing-text-hidden");
		$("#resizing-text").removeClass("resizing-text-shown")
	}
});
$(".model-1").click(function () {
	$(".model-1").addClass("selected");
	$(".model-1-text").text("Model 1 selected");
	$(".model-2-text").text("Model 2 not selected");
	$(".model-2").removeClass("selected")
});
$(".model-2").click(function () {
	$(".model-2").addClass("selected");
	$(".model-2-text").text("Model 2 selected");
	$(".model-1-text").text("Model 1 not selected");
	$(".model-1").removeClass("selected")
});
$(".ram-12").click(function () {
	$(".ram-12").addClass("selected");
	$(".ram-16").removeClass("selected")
});
$(".ram-16").click(function () {
	$(".ram-16").addClass("selected");
	$(".ram-12").removeClass("selected")
});
$(".rom-256").click(function () {
	$(".rom-256").addClass("selected");
	$(".rom-512").removeClass("selected")
});
$(".rom-512").click(function () {
	$(".rom-512").addClass("selected");
	$(".rom-256").removeClass("selected")
});
$(".red-circle").click(function () {
	$(".phone-img").attr("src", "assets/images/Image46.svg")
});
$(".blaze-blue-circle").click(function () {
	$(".phone-img").attr("src", "assets/images/bluemobile2.png")
});
if ($(window).width() < 767) {
	$("section").removeClass("mb-250");
	$("section").removeClass("mt-250");
	$(window).on('load', (function () {
		$(".preloader img").fadeOut(2000, function () {
			$(this).parent().fadeOut(500, function () {
				$(this).remove();
				$("body").css('overflow', 'auto');
				$(".section-one").addClass("fade")
			})
		})
	}))
}
if ($(window).width() >= 1024) {
	$nav1Height = ($(".nav1").height());
	$(".mynav2").css('margin-top', $nav1Height);
	var rellax = new Rellax('.rellax');
	$(function () {
		var controller = new ScrollMagic.Controller();
		var tween = TweenMax.to("#animate", 1, {
			scale: (3.1),
			width: '100%',
			ease: Linear.easeNone
		});
		var secheight = $("section").height();
		var vheight = $("section").height() * 3.55;
		var scene = new ScrollMagic.Scene({
			triggerElement: "#multiDirect",
			duration: secheight / 0.9,
			offset: vheight
		}).setTween(tween).setPin("#animate").addTo(controller)
	});
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-two-1');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 4.8;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-two-2');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 4.9;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-two-3');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 5;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-four');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 2;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-four-video');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 5;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-five');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.3;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-five-video');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.150;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-five-bottom');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.2;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-six');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.2;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-six-image');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.150;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-seven');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.180;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-img-seven');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.150;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-seven-bottom');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.150;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-eight');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.150;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-img-eight');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.2;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-eight-bottom');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top)) / 1.150;
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-ten');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top) / 1.140);
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-ten-2');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top) / 1.120);
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-ten-3');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top) / 1.120);
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-ten-4');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top) / 1.140);
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-eleven');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top) / 1.120);
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-14');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top) / 1.150);
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-15');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top) / 1.1);
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 800)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-15-img');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top) / 1.080);
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl = $(document),
			fadeElem = $('.fade-scroll-sec-16');
		documentEl.on('scroll', function () {
			var currScrollPosition = documentEl.scrollTop();
			fadeElem.each(function () {
				var $this = $(this);
				var eleOffsetTop = (($(this).offset().top) / 1.110);
				if (currScrollPosition > eleOffsetTop) {
					$this.css('opacity', 0 + (currScrollPosition - eleOffsetTop) / 700)
				}
			})
		})
	})
	$(function () {
		var documentEl2 = $(document),
			fadeElem2 = $('.fade-scroll-img-four');
		documentEl2.on('scroll', function () {
			var currScrollPosition2 = documentEl2.scrollTop();
			fadeElem2.each(function () {
				var $this = $(this);
				var eleOffsetTop2 = (($(this).offset().top)) / 1.8;
				if (currScrollPosition2 > eleOffsetTop2) {
					$this.css('opacity', 0 + (currScrollPosition2 - eleOffsetTop2) / 600)
				}
			})
		})
	})
	$(function () {
		var documentEl2 = $(document),
			fadeElem2 = $('.fade-scroll-img-five');
		documentEl2.on('scroll', function () {
			var currScrollPosition2 = documentEl2.scrollTop();
			fadeElem2.each(function () {
				var $this = $(this);
				var eleOffsetTop2 = (($(this).offset().top)) / 1.5;
				if (currScrollPosition2 > eleOffsetTop2) {
					$this.css('opacity', 0 + (currScrollPosition2 - eleOffsetTop2) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl2 = $(document),
			fadeElem2 = $('.fade-scroll-img-14');
		documentEl2.on('scroll', function () {
			var currScrollPosition2 = documentEl2.scrollTop();
			fadeElem2.each(function () {
				var $this = $(this);
				var eleOffsetTop2 = (($(this).offset().top)) / 1.1;
				if (currScrollPosition2 > eleOffsetTop2) {
					$this.css('opacity', 0 + (currScrollPosition2 - eleOffsetTop2) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl2 = $(document),
			fadeElem2 = $('.fade-scroll-img-16-p3');
		documentEl2.on('scroll', function () {
			var currScrollPosition2 = documentEl2.scrollTop();
			fadeElem2.each(function () {
				var $this = $(this);
				var eleOffsetTop2 = (($(this).offset().top)) / 1.080;
				if (currScrollPosition2 > eleOffsetTop2) {
					$this.css('opacity', 0 + (currScrollPosition2 - eleOffsetTop2) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl2 = $(document),
			fadeElem2 = $('.fade-scroll-img-16-p2');
		documentEl2.on('scroll', function () {
			var currScrollPosition2 = documentEl2.scrollTop();
			fadeElem2.each(function () {
				var $this = $(this);
				var eleOffsetTop2 = (($(this).offset().top)) / 1.070;
				if (currScrollPosition2 > eleOffsetTop2) {
					$this.css('opacity', 0 + (currScrollPosition2 - eleOffsetTop2) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl2 = $(document),
			fadeElem2 = $('.fade-scroll-img-16-p1');
		documentEl2.on('scroll', function () {
			var currScrollPosition2 = documentEl2.scrollTop();
			fadeElem2.each(function () {
				var $this = $(this);
				var eleOffsetTop2 = (($(this).offset().top)) / 1.080;
				if (currScrollPosition2 > eleOffsetTop2) {
					$this.css('opacity', 0 + (currScrollPosition2 - eleOffsetTop2) / 400)
				}
			})
		})
	})
	$(function () {
		var documentEl2 = $(document),
			fadeElem2 = $('.fade-scroll-img-17');
		documentEl2.on('scroll', function () {
			var currScrollPosition2 = documentEl2.scrollTop();
			fadeElem2.each(function () {
				var $this = $(this);
				var eleOffsetTop2 = (($(this).offset().top)) / 1.150;
				if (currScrollPosition2 > eleOffsetTop2) {
					$this.css('opacity', 0 + (currScrollPosition2 - eleOffsetTop2) / 600)
				}
			})
		})
	})
}
$('.carousel').carousel({
	interval: !1,
});

$(function () {
	$('img.lazy').lazy();
});


  if($(window).width() <= 767){
    $( "video" ).remove();
   }