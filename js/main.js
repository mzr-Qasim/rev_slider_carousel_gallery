
var tpj=jQuery;
			var revapi18;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_18_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_18_1");
				}else{
					revapi18 = tpj("#rev_slider_18_1").show().revolution({
						sliderType:"carousel",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullwidth",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"on",
							thumbnails: {
								style:"gyges",
								enable:true,
								width:50,
								height:50,
								min_width:50,
								wrapper_padding:5,
								wrapper_color:"transparent",
								tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
								visibleAmount:5,
								hide_onmobile:false,
								hide_over:1240,
								hide_onleave:false,
								direction:"horizontal",
								span:false,
								position:"inner",
								space:5,
								h_align:"center",
								v_align:"top",
								h_offset:0,
								v_offset:20
							}
							,
							tabs: {
								style:"gyges",
								enable:true,
								width:220,
								height:80,
								min_width:220,
								wrapper_padding:0,
								wrapper_color:"transparent",
								tmp:'<div class="tp-tab-content">  <span class="tp-tab-date">{{param1}}</span>  <span class="tp-tab-title">{{title}}</span></div><div class="tp-tab-image"></div>',
								visibleAmount: 6,
								hide_onmobile: true,
								hide_under:1240,
								hide_onleave:false,
								hide_delay:200,
								direction:"vertical",
								span:true,
								position:"inner",
								space:0,
								h_align:"left",
								v_align:"center",
								h_offset:0,
								v_offset:0
							}
						},
						carousel: {
							horizontal_align: "center",
							vertical_align: "center",
							fadeout: "off",
							maxVisibleItems: 5,
							infinity: "on",
							space: 0,
							stretch: "off",
 							showLayersAllTime: "off",
 							easing: "Power3.easeInOut",
 							speed: "800"
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[800,700,400,300],
						gridheight:[600,600,500,400],
						lazyType:"single",
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	/*ready*/