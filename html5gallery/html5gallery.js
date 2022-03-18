/** HTML5 Gallery - jQuery Image and Video Gallery Plugin
 * Copyright 2014 Magic Hills Pty Ltd All Rights Reserved
 * Website: http://html5box.com
 * Version 9.5 
 */
 
// if any HTML5 galleries on the page, start the script
if ($(".html5gallery").length > 0){
	loadHtml5Gallery();
}

function loadHtml5Gallery(u) {
	jQuery.easing.jswing = jQuery.easing.swing;
	jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		easeInQuad: function(b, e, a, c, d) {
			return c * (e /= d) * e + a
		},
		easeOutQuad: function(b, e, a, c, d) {
			return -c * (e /= d) * (e - 2) + a
		},
		easeInOutQuad: function(b, e, a, c, d) {
			return 1 > (e /= d / 2) ? c / 2 * e * e + a : -c / 2 * (--e * (e - 2) - 1) + a
		},
		easeInCubic: function(b, e, a, c, d) {
			return c * (e /= d) * e * e + a
		},
		easeOutCubic: function(b, e, a, c, d) {
			return c * ((e = e / d - 1) * e * e + 1) + a
		},
		easeInOutCubic: function(b, e, a, c, d) {
			return 1 > (e /= d / 2) ? c / 2 * e * e * e + a : c / 2 * ((e -=
				2) * e * e + 2) + a
		},
		easeInQuart: function(b, e, a, c, d) {
			return c * (e /= d) * e * e * e + a
		},
		easeOutQuart: function(b, e, a, c, d) {
			return -c * ((e = e / d - 1) * e * e * e - 1) + a
		},
		easeInOutQuart: function(b, e, a, c, d) {
			return 1 > (e /= d / 2) ? c / 2 * e * e * e * e + a : -c / 2 * ((e -= 2) * e * e * e - 2) + a
		},
		easeInQuint: function(b, e, a, c, d) {
			return c * (e /= d) * e * e * e * e + a
		},
		easeOutQuint: function(b, e, a, c, d) {
			return c * ((e = e / d - 1) * e * e * e * e + 1) + a
		},
		easeInOutQuint: function(b, e, a, c, d) {
			return 1 > (e /= d / 2) ? c / 2 * e * e * e * e * e + a : c / 2 * ((e -= 2) * e * e * e * e + 2) + a
		},
		easeInSine: function(b, e, a, c, d) {
			return -c * Math.cos(e / d *
				(Math.PI / 2)) + c + a
		},
		easeOutSine: function(b, e, a, c, d) {
			return c * Math.sin(e / d * (Math.PI / 2)) + a
		},
		easeInOutSine: function(b, e, a, c, d) {
			return -c / 2 * (Math.cos(Math.PI * e / d) - 1) + a
		},
		easeInExpo: function(b, e, a, c, d) {
			return 0 == e ? a : c * Math.pow(2, 10 * (e / d - 1)) + a
		},
		easeOutExpo: function(b, e, a, c, d) {
			return e == d ? a + c : c * (-Math.pow(2, -10 * e / d) + 1) + a
		},
		easeInOutExpo: function(b, e, a, c, d) {
			return 0 == e ? a : e == d ? a + c : 1 > (e /= d / 2) ? c / 2 * Math.pow(2, 10 * (e - 1)) + a : c / 2 * (-Math.pow(2, -10 * --e) + 2) + a
		},
		easeInCirc: function(b, e, a, c, d) {
			return -c * (Math.sqrt(1 - (e /= d) * e) -
				1) + a
		},
		easeOutCirc: function(b, e, a, c, d) {
			return c * Math.sqrt(1 - (e = e / d - 1) * e) + a
		},
		easeInOutCirc: function(b, e, a, c, d) {
			return 1 > (e /= d / 2) ? -c / 2 * (Math.sqrt(1 - e * e) - 1) + a : c / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + a
		},
		easeInElastic: function(b, e, a, c, d) {
			b = 1.70158;
			var h = 0,
				f = c;
			if (0 == e) return a;
			if (1 == (e /= d)) return a + c;
			h || (h = 0.3 * d);
			f < Math.abs(c) ? (f = c, b = h / 4) : b = h / (2 * Math.PI) * Math.asin(c / f);
			return -(f * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * d - b) * 2 * Math.PI / h)) + a
		},
		easeOutElastic: function(b, e, a, c, d) {
			b = 1.70158;
			var h = 0,
				f = c;
			if (0 == e) return a;
			if (1 ==
				(e /= d)) return a + c;
			h || (h = 0.3 * d);
			f < Math.abs(c) ? (f = c, b = h / 4) : b = h / (2 * Math.PI) * Math.asin(c / f);
			return f * Math.pow(2, -10 * e) * Math.sin((e * d - b) * 2 * Math.PI / h) + c + a
		},
		easeInOutElastic: function(b, e, a, c, d) {
			b = 1.70158;
			var h = 0,
				f = c;
			if (0 == e) return a;
			if (2 == (e /= d / 2)) return a + c;
			h || (h = d * 0.3 * 1.5);
			f < Math.abs(c) ? (f = c, b = h / 4) : b = h / (2 * Math.PI) * Math.asin(c / f);
			return 1 > e ? -0.5 * f * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * d - b) * 2 * Math.PI / h) + a : 0.5 * f * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * d - b) * 2 * Math.PI / h) + c + a
		},
		easeInBack: function(b, e, a, c, d, h) {
			void 0 ==
				h && (h = 1.70158);
			return c * (e /= d) * e * ((h + 1) * e - h) + a
		},
		easeOutBack: function(b, e, a, c, d, h) {
			void 0 == h && (h = 1.70158);
			return c * ((e = e / d - 1) * e * ((h + 1) * e + h) + 1) + a
		},
		easeInOutBack: function(b, e, a, c, d, h) {
			void 0 == h && (h = 1.70158);
			return 1 > (e /= d / 2) ? c / 2 * e * e * (((h *= 1.525) + 1) * e - h) + a : c / 2 * ((e -= 2) * e * (((h *= 1.525) + 1) * e + h) + 2) + a
		},
		easeInBounce: function(b, e, a, c, d) {
			return c - jQuery.easing.easeOutBounce(b, d - e, 0, c, d) + a
		},
		easeOutBounce: function(b, e, a, c, d) {
			return (e /= d) < 1 / 2.75 ? c * 7.5625 * e * e + a : e < 2 / 2.75 ? c * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + a : e < 2.5 / 2.75 ?
				c * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + a : c * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + a
		},
		easeInOutBounce: function(b, e, a, c, d) {
			return e < d / 2 ? 0.5 * jQuery.easing.easeInBounce(b, 2 * e, 0, c, d) + a : 0.5 * jQuery.easing.easeOutBounce(b, 2 * e - d, 0, c, d) + 0.5 * c + a
		}
	});
	var s = jQuery;
	s.fn.touchSwipe = function(b) {
		var e = {
			preventWebBrowser: !1,
			instance: null,
			preventWebBrowserCallback: null,
			swipeLeft: null,
			swipeRight: null,
			swipeTop: null,
			swipeBottom: null
		};
		b && s.extend(e, b);
		return this.each(function() {
			function a(a) {
				var b = a.originalEvent;
				1 <= b.targetTouches.length ?
					(f = b.targetTouches[0].pageX, j = b.targetTouches[0].pageY) : h(a)
			}

			function b(a) {
				var c = e.preventWebBrowser,
					d = a.originalEvent;
				1 <= d.targetTouches.length ? (l = d.targetTouches[0].pageX, g = d.targetTouches[0].pageY, e.instance && e.preventWebBrowserCallback && (c = e.instance[e.preventWebBrowserCallback](g < j))) : h(a);
				c && a.preventDefault()
			}

			function d(a) {
				if (0 < l || 0 < g) 100 < Math.abs(l - f) && (l > f ? e.swipeRight && e.swipeRight.call() : e.swipeLeft && e.swipeLeft.call()), 100 < Math.abs(g - j) && (g > j ? e.swipeBottom && e.swipeBottom.call() : e.swipeTop &&
					e.swipeTop.call());
				h(a)
			}

			function h() {
				g = l = j = f = -1
			}
			var f = -1,
				j = -1,
				l = -1,
				g = -1;
			try {
				s(this).on("touchstart", a), s(this).on("touchmove", b), s(this).on("touchend", d), s(this).on("touchcancel", h)
			} catch (W) {}
		})
	};
	var m = jQuery;
	m.fn.drag = function(b, e, a) {
		var c = "string" == typeof b ? b : "",
			d = m.isFunction(b) ? b : m.isFunction(e) ? e : null;
		0 !== c.indexOf("drag") && (c = "drag" + c);
		a = (b == d ? e : a) || {};
		return d ? this.on(c, a, d) : this.trigger(c)
	};
	var t = m.event,
		x = t.special,
		k = null,
		k = x.drag = {
			defaults: {
				which: 1,
				distance: 0,
				not: ":input",
				handle: null,
				relative: !1,
				drop: !0,
				click: !1
			},
			datakey: "dragdata",
			livekey: "livedrag",
			add: function(b) {
				var e = m.data(this, k.datakey),
					a = b.data || {};
				e.related += 1;
				!e.live && b.selector && (e.live = !0, t.add(this, "draginit." + k.livekey, k.delegate));
				m.each(k.defaults, function(b) {
					void 0 !== a[b] && (e[b] = a[b])
				})
			},
			remove: function() {
				m.data(this, k.datakey).related -= 1
			},
			setup: function() {
				if (!m.data(this, k.datakey)) {
					var b = m.extend({
						related: 0
					}, k.defaults);
					m.data(this, k.datakey, b);
					t.add(this, "mousedown", k.init, b);
					this.attachEvent && this.attachEvent("ondragstart",
						k.dontstart)
				}
			},
			teardown: function() {
				m.data(this, k.datakey).related || (m.removeData(this, k.datakey), t.remove(this, "mousedown", k.init), t.remove(this, "draginit", k.delegate), k.textselect(!0), this.detachEvent && this.detachEvent("ondragstart", k.dontstart))
			},
			init: function(b) {
				var e = b.data,
					a;
				if (!(0 < e.which && b.which != e.which) && !m(b.target).is(e.not) && (!e.handle || m(b.target).closest(e.handle, b.currentTarget).length))
					if (e.propagates = 1, e.interactions = [k.interaction(this, e)], e.target = b.target, e.pageX = b.pageX, e.pageY =
						b.pageY, e.dragging = null, a = k.hijack(b, "draginit", e), e.propagates) {
						if ((a = k.flatten(a)) && a.length) e.interactions = [], m.each(a, function() {
							e.interactions.push(k.interaction(this, e))
						});
						e.propagates = e.interactions.length;
						!1 !== e.drop && x.drop && x.drop.handler(b, e);
						k.textselect(!1);
						t.add(document, "mousemove mouseup", k.handler, e);
						return !1
					}
			},
			interaction: function(b, e) {
				return {
					drag: b,
					callback: new k.callback,
					droppable: [],
					offset: m(b)[e.relative ? "position" : "offset"]() || {
						top: 0,
						left: 0
					}
				}
			},
			handler: function(b) {
				var e = b.data;
				switch (b.type) {
					case !e.dragging && "mousemove":
						if (Math.pow(b.pageX - e.pageX, 2) + Math.pow(b.pageY - e.pageY, 2) < Math.pow(e.distance, 2)) break;
						b.target = e.target;
						k.hijack(b, "dragstart", e);
						e.propagates && (e.dragging = !0);
					case "mousemove":
						if (e.dragging) {
							k.hijack(b, "drag", e);
							if (e.propagates) {
								!1 !== e.drop && x.drop && x.drop.handler(b, e);
								break
							}
							b.type = "mouseup"
						}
						case "mouseup":
							t.remove(document, "mousemove mouseup", k.handler), e.dragging && (!1 !== e.drop && x.drop && x.drop.handler(b, e), k.hijack(b, "dragend", e)), k.textselect(!0),
								!1 === e.click && e.dragging && (jQuery.event.triggered = !0, setTimeout(function() {
									jQuery.event.triggered = !1
								}, 20), e.dragging = !1)
				}
			},
			delegate: function(b) {
				var e = [],
					a, c = m.data(this, "events") || {};
				m.each(c.live || [], function(c, h) {
					if (0 === h.preType.indexOf("drag") && (a = m(b.target).closest(h.selector, b.currentTarget)[0])) t.add(a, h.origType + "." + k.livekey, h.origHandler, h.data), 0 > m.inArray(a, e) && e.push(a)
				});
				return !e.length ? !1 : m(e).on("dragend." + k.livekey, function() {
					t.remove(this, "." + k.livekey)
				})
			},
			hijack: function(b, e, a,
				c, d) {
				if (a) {
					var h = b.originalEvent,
						f = b.type,
						j = e.indexOf("drop") ? "drag" : "drop",
						l, g = c || 0,
						w, q;
					c = !isNaN(c) ? c : a.interactions.length;
					b.type = e;
					b.originalEvent = null;
					a.results = [];
					do
						if ((w = a.interactions[g]) && !("dragend" !== e && w.cancelled)) q = k.properties(b, a, w), w.results = [], m(d || w[j] || a.droppable).each(function(c, d) {
							q.target = d;
							l = t.handle ? d ? t.handle.call(d, b, q) : null : d ? t.dispatch.call(d, b, q) : null;
							!1 === l ? ("drag" == j && (w.cancelled = !0, a.propagates -= 1), "drop" == e && (w[j][c] = null)) : "dropinit" == e && w.droppable.push(k.element(l) ||
								d);
							"dragstart" == e && (w.proxy = m(k.element(l) || w.drag)[0]);
							w.results.push(l);
							delete b.result;
							if ("dropinit" !== e) return l
						}), a.results[g] = k.flatten(w.results), "dropinit" == e && (w.droppable = k.flatten(w.droppable)), "dragstart" == e && !w.cancelled && q.update(); while (++g < c);
					b.type = f;
					b.originalEvent = h;
					return k.flatten(a.results)
				}
			},
			properties: function(b, e, a) {
				var c = a.callback;
				c.drag = a.drag;
				c.proxy = a.proxy || a.drag;
				c.startX = e.pageX;
				c.startY = e.pageY;
				c.deltaX = b.pageX - e.pageX;
				c.deltaY = b.pageY - e.pageY;
				c.originalX = a.offset.left;
				c.originalY = a.offset.top;
				c.offsetX = b.pageX - (e.pageX - c.originalX);
				c.offsetY = b.pageY - (e.pageY - c.originalY);
				c.drop = k.flatten((a.drop || []).slice());
				c.available = k.flatten((a.droppable || []).slice());
				return c
			},
			element: function(b) {
				if (b && (b.jquery || 1 == b.nodeType)) return b
			},
			flatten: function(b) {
				return m.map(b, function(b) {
					return b && b.jquery ? m.makeArray(b) : b && b.length ? k.flatten(b) : b
				})
			},
			textselect: function(b) {
				m(document)[b ? "unbind" : "bind"]("selectstart", k.dontstart).attr("unselectable", b ? "off" : "on").css("MozUserSelect",
					b ? "" : "none")
			},
			dontstart: function() {
				return !1
			},
			callback: function() {}
		};
	k.callback.prototype = {
		update: function() {
			x.drop && this.available.length && m.each(this.available, function(b) {
				x.drop.locate(this, b)
			})
		}
	};
	x.draginit = x.dragstart = x.dragend = k;
	var A = jQuery;
	A.fn.html5boxTransition = function(b, e, a, c, d) {
		$parent = this;
		b = c.effect;
		var h = c.easing,
			f = c.duration,
			j = c.direction,
			l = null;
		b && (b = b.split(","), l = b[Math.floor(Math.random() * b.length)], l = A.trim(l.toLowerCase()));
		l && c[l] && ("duration" in c[l] && (f = c[l].duration), c[l].easing &&
			(h = c[l].easing));
		"fade" == l || "fadein" == l ? (a.hide(), e.insertBefore(a), a.fadeIn(f, h, function() {
			e.remove();
			d()
		})) : "fadeout" == l ? (a.show(), e.fadeOut(f, h, function() {
			e.remove();
			d()
		})) : "fadeinout" == l ? (a.hide(), e.insertBefore(a), e.fadeOut(f, h), a.fadeIn(f, h, function() {
			e.remove();
			d()
		})) : "crossfade" == l ? (a.hide(), e.fadeOut(f / 2, h, function() {
			a.fadeIn(f / 2, h, function() {
				e.remove();
				d()
			})
		})) : "slide" == l ? ($parent.css({
			overflow: "hidden"
		}), j ? (a.css({
			left: "100%"
		}), a.animate({
			left: "0%"
		}, f, h), e.animate({
			left: "-100%"
		}, f, h, function() {
			e.remove();
			d()
		})) : (a.css({
			left: "-100%"
		}), a.animate({
			left: "0%"
		}, f, h), e.animate({
			left: "100%"
		}, f, h, function() {
			e.remove();
			d()
		}))) : (a.show(), e.remove(), d())
	};
	var n = jQuery;
	n.fn.addHTML5VideoControls = function(b, e, a, c, d, h, f, j, l) {
		var g = "ontouchstart" in window,
			w = g ? "touchstart" : "mousedown",
			q = g ? "touchmove" : "mousemove",
			k = g ? "touchcancel" : "mouseup",
			m = g ? 48 : 36,
			t = null,
			u = null,
			s = !1,
			x = !0,
			D = n(this).data("ishd"),
			A = n(this).data("hd"),
			F = n(this).data("src"),
			r = n(this);
		r.get(0).removeAttribute("controls");
		var B = n("<div class='html5boxVideoPlay'></div>");
		r.after(B);
		B.css({
			position: "absolute",
			top: "50%",
			left: "50%",
			display: "block",
			cursor: "pointer",
			width: 64,
			height: 64,
			"margin-left": -32,
			"margin-top": -32,
			"background-image": "url('" + (l && "playbutton" in l && 0 < l.playbutton.length ? l.playbutton : b + "html5boxplayer_playvideo.png") + "')",
			"background-position": "center center",
			"background-repeat": "no-repeat"
		}).on("click", function() {
			r.get(0).play()
		});
		var E = n("<div class='html5boxVideoFullscreenBg'></div>"),
			v = n("<div class='html5boxVideoControls'><div class='html5boxVideoControlsBg'></div><div class='html5boxPlayPause'><div class='html5boxPlay'></div><div class='html5boxPause'></div></div><div class='html5boxTimeCurrent'>--:--</div><div class='html5boxFullscreen'></div><div class='html5boxHD'></div><div class='html5boxVolume'><div class='html5boxVolumeButton'></div><div class='html5boxVolumeBar'><div class='html5boxVolumeBarBg'><div class='html5boxVolumeBarActive'></div></div></div></div><div class='html5boxTimeTotal'>--:--</div><div class='html5boxSeeker'><div class='html5boxSeekerBuffer'></div><div class='html5boxSeekerPlay'></div><div class='html5boxSeekerHandler'></div></div><div style='clear:both;'></div></div>");
		r.after(v);
		r.after(E);
		E.css({
			display: "none",
			position: "fixed",
			left: 0,
			top: 0,
			bottom: 0,
			right: 0
		});
		v.css({
			display: "block",
			position: "absolute",
			width: "100%",
			height: m,
			left: 0,
			bottom: 0,
			right: 0,
			margin: "0 auto"
		});
		var J = function() {
			x = !0
		};
		r.on("touch click mousemove mouseenter", function() {
			x = !0
		});
		c || setInterval(function() {
			x && (v.show(), x = !1, clearTimeout(t), t = setTimeout(function() {
				r.get(0).paused || v.fadeOut()
			}, 5E3))
		}, 250);
		n(".html5boxVideoControlsBg", v).css({
			display: "block",
			position: "absolute",
			width: "100%",
			height: "100%",
			left: 0,
			top: 0,
			"background-color": "#000000",
			opacity: 0.7,
			filter: "alpha(opacity=70)"
		});
		n(".html5boxPlayPause", v).css({
			display: "block",
			position: "relative",
			width: "32px",
			height: "32px",
			margin: Math.floor((m - 32) / 2),
			"float": "left"
		});
		var L = n(".html5boxPlay", v),
			p = n(".html5boxPause", v);
		L.css({
			display: "block",
			position: "absolute",
			top: 0,
			left: 0,
			width: "32px",
			height: "32px",
			cursor: "pointer",
			"background-image": "url('" + b + "html5boxplayer_playpause.png')",
			"background-position": "top left"
		}).hover(function() {
				n(this).css({
					"background-position": "bottom left"
				})
			},
			function() {
				n(this).css({
					"background-position": "top left"
				})
			}).on("click", function() {
			r.get(0).play()
		});
		p.css({
			display: "none",
			position: "absolute",
			top: 0,
			left: 0,
			width: "32px",
			height: "32px",
			cursor: "pointer",
			"background-image": "url('" + b + "html5boxplayer_playpause.png')",
			"background-position": "top right"
		}).hover(function() {
			n(this).css({
				"background-position": "bottom right"
			})
		}, function() {
			n(this).css({
				"background-position": "top right"
			})
		}).on("click", function() {
			r.get(0).pause()
		});
		var U = n(".html5boxTimeCurrent",
				v),
			G = n(".html5boxTimeTotal", v),
			C = n(".html5boxSeeker", v),
			O = n(".html5boxSeekerPlay", v),
			P = n(".html5boxSeekerBuffer", v),
			M = n(".html5boxSeekerHandler", v);
		U.css({
			display: "block",
			position: "relative",
			"float": "left",
			"line-height": m + "px",
			"font-weight": "normal",
			"font-size": "12px",
			margin: "0 8px",
			"font-family": "Arial, Helvetica, sans-serif",
			color: "#fff"
		});
		G.css({
			display: "block",
			position: "relative",
			"float": "right",
			"line-height": m + "px",
			"font-weight": "normal",
			"font-size": "12px",
			margin: "0 8px",
			"font-family": "Arial, Helvetica, sans-serif",
			color: "#fff"
		});
		C.css({
			display: "block",
			cursor: "pointer",
			overflow: "hidden",
			position: "relative",
			height: "10px",
			"background-color": "#222",
			margin: Math.floor((m - 10) / 2) + "px 4px"
		}).on(w, function(a) {
			a = (g ? a.originalEvent.touches[0] : a).pageX - C.offset().left;
			O.css({
				width: a
			});
			r.get(0).currentTime = a * r.get(0).duration / C.width();
			C.on(q, function(a) {
				a = (g ? a.originalEvent.touches[0] : a).pageX - C.offset().left;
				O.css({
					width: a
				});
				r.get(0).currentTime = a * r.get(0).duration / C.width()
			})
		}).on(k, function() {
			C.off(q)
		});
		P.css({
			display: "block",
			position: "absolute",
			left: 0,
			top: 0,
			height: "100%",
			"background-color": "#444"
		});
		O.css({
			display: "block",
			position: "absolute",
			left: 0,
			top: 0,
			height: "100%",
			"background-color": "#fcc500"
		});
		var y = f ? r : r.parent();
		if (y.get(0).requestFullscreen || y.get(0).webkitRequestFullScreen || y.get(0).mozRequestFullScreen || y.get(0).webkitEnterFullScreen || y.get(0).msRequestFullscreen) {
			var H = function(a) {
				f ? a ? (r.get(0).setAttribute("controls", "controls"), j && r.get(0).setAttribute("controlsList", "nodownload")) : r.get(0).removeAttribute("controls") :
					a ? (n(document).on("mousemove", J), v.css({
						"z-index": 2147483647,
						position: "fixed"
					}), E.css({
						"z-index": 2147483647,
						display: "block"
					}), B.css({
						"z-index": 2147483647
					})) : (n(document).off("mousemove", J), v.css({
						"z-index": "",
						position: "absolute"
					}), E.css({
						"z-index": "",
						display: "none"
					}), B.css({
						"z-index": ""
					}))
			};
			document.addEventListener("MSFullscreenChange", function() {
				s = null != document.msFullscreenElement;
				H(s)
			}, !1);
			document.addEventListener("fullscreenchange", function() {
				s = document.fullscreen;
				H(s)
			}, !1);
			document.addEventListener("mozfullscreenchange",
				function() {
					s = document.mozFullScreen;
					H(s)
				}, !1);
			document.addEventListener("webkitfullscreenchange", function() {
				s = document.webkitIsFullScreen;
				H(s)
			}, !1);
			y.get(0).addEventListener("webkitbeginfullscreen", function() {
				s = !0;
				H(s)
			}, !1);
			y.get(0).addEventListener("webkitendfullscreen", function() {
				s = !1;
				H(s)
			}, !1);
			f || n("head").append("<style type='text/css'>video" + a + "::-webkit-media-controls { display:none !important; }</style>");
			n(".html5boxFullscreen", v).css({
				display: "block",
				position: "relative",
				"float": "right",
				width: "32px",
				height: "32px",
				margin: Math.floor((m - 32) / 2),
				cursor: "pointer",
				"background-image": "url('" + b + "html5boxplayer_fullscreen.png')",
				"background-position": "left top"
			}).hover(function() {
				var a = n(this).css("background-position") ? n(this).css("background-position").split(" ")[0] : n(this).css("background-position-x");
				n(this).css({
					"background-position": a + " bottom"
				})
			}, function() {
				var a = n(this).css("background-position") ? n(this).css("background-position").split(" ")[0] : n(this).css("background-position-x");
				n(this).css({
					"background-position": a +
						" top"
				})
			}).on("click", function() {
				(s = !s) ? (f && (r.get(0).setAttribute("controls", "controls"), j && r.get(0).setAttribute("controlsList", "nodownload")), y.get(0).requestFullscreen ? y.get(0).requestFullscreen() : y.get(0).webkitRequestFullScreen ? y.get(0).webkitRequestFullScreen() : y.get(0).mozRequestFullScreen ? y.get(0).mozRequestFullScreen() : y.get(0).webkitEnterFullScreen && y.get(0).webkitEnterFullScreen(), y.get(0).msRequestFullscreen && y.get(0).msRequestFullscreen()) : document.cancelFullScreen ? document.cancelFullScreen() :
					document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
			})
		}
		if (A) n(".html5boxHD", v).css({
			display: "block",
			position: "relative",
			"float": "right",
			width: "32px",
			height: "32px",
			margin: Math.floor((m - 32) / 2),
			cursor: "pointer",
			"background-image": "url('" + b + "html5boxplayer_hd.png')",
			"background-position": (D ? "right" : "left") + " center"
		}).on("click",
			function() {
				D = !D;
				n(this).css({
					"background-position": (D ? "right" : "left") + " center"
				});
				e.isHd = D;
				var a = r.get(0).isPaused;
				r.get(0).setAttribute("src", (D ? A : F) + "#t=" + r.get(0).currentTime);
				a ? r.get(0).pause() : r.get(0).play()
			});
		r.get(0).volume = h;
		var Y = 0 == h ? 1 : h;
		a = r.get(0).volume;
		r.get(0).volume = a / 2 + 0.1;
		if (r.get(0).volume === a / 2 + 0.1) {
			r.get(0).volume = a;
			h = n(".html5boxVolume", v);
			var V = n(".html5boxVolumeButton", v),
				Z = n(".html5boxVolumeBar", v),
				K = n(".html5boxVolumeBarBg", v),
				Q = n(".html5boxVolumeBarActive", v);
			h.css({
				display: "block",
				position: "relative",
				"float": "right",
				width: "32px",
				height: "32px",
				margin: Math.floor((m - 32) / 2)
			}).hover(function() {
				clearTimeout(u);
				var a = r.get(0).volume;
				Q.css({
					height: Math.round(100 * a) + "%"
				});
				Z.show()
			}, function() {
				clearTimeout(u);
				u = setTimeout(function() {
					Z.hide()
				}, 1E3)
			});
			V.css({
				display: "block",
				position: "absolute",
				top: 0,
				left: 0,
				width: "32px",
				height: "32px",
				cursor: "pointer",
				"background-image": "url('" + b + "html5boxplayer_volume.png')",
				"background-position": "top " + (0 < a ? "left" : "right")
			}).hover(function() {
				var a = n(this).css("background-position") ?
					n(this).css("background-position").split(" ")[0] : n(this).css("background-position-x");
				n(this).css({
					"background-position": a + " bottom"
				})
			}, function() {
				var a = n(this).css("background-position") ? n(this).css("background-position").split(" ")[0] : n(this).css("background-position-x");
				n(this).css({
					"background-position": a + " top"
				})
			}).on("click", function() {
				var a = r.get(0).volume;
				0 < a ? (Y = a, a = 0) : a = Y;
				var b = n(this).css("background-position") ? n(this).css("background-position").split(" ")[1] : n(this).css("background-position-y");
				V.css({
					"background-position": (0 < a ? "left" : "right") + " " + b
				});
				0 < a && (r.get(0).muted = !1);
				r.get(0).volume = a;
				Q.css({
					height: Math.round(100 * a) + "%"
				})
			});
			Z.css({
				display: "none",
				position: "absolute",
				left: 4,
				bottom: "100%",
				width: 24,
				height: 80,
				"margin-bottom": Math.floor((m - 32) / 2),
				"background-color": "#000000",
				opacity: 0.7,
				filter: "alpha(opacity=70)"
			});
			K.css({
				display: "block",
				position: "relative",
				width: 10,
				height: 68,
				margin: 7,
				cursor: "pointer",
				"background-color": "#222"
			});
			Q.css({
				display: "block",
				position: "absolute",
				bottom: 0,
				left: 0,
				width: "100%",
				height: "100%",
				"background-color": "#fcc500"
			});
			K.on(w, function(a) {
				a = 1 - ((g ? a.originalEvent.touches[0] : a).pageY - K.offset().top) / K.height();
				a = 1 < a ? 1 : 0 > a ? 0 : a;
				Q.css({
					height: Math.round(100 * a) + "%"
				});
				V.css({
					"background-position": "left " + (0 < a ? "top" : "bottom")
				});
				0 < a && (r.get(0).muted = !1);
				r.get(0).volume = a;
				K.on(q, function(a) {
					a = 1 - ((g ? a.originalEvent.touches[0] : a).pageY - K.offset().top) / K.height();
					a = 1 < a ? 1 : 0 > a ? 0 : a;
					Q.css({
						height: Math.round(100 * a) + "%"
					});
					V.css({
						"background-position": "left " + (0 < a ? "top" : "bottom")
					});
					0 < a && (r.get(0).muted = !1);
					r.get(0).volume = a
				})
			}).on(k, function() {
				K.off(q)
			})
		}
		var aa = function(a) {
			var b = Math.floor(a / 3600),
				c = Math.floor((a - 3600 * b) / 60);
			a = Math.floor(a - (3600 * b + 60 * c));
			c = (10 > c ? "0" + c : c) + ":" + (10 > a ? "0" + a : a);
			0 < b && (c = (10 > b ? "0" + b : b) + ":" + c);
			return c
		};
		d && B.hide();
		c && v.hide();
		b = function() {
			d || B.show();
			c || (v.show(), clearTimeout(t), L.show(), p.hide())
		};
		w = function() {
			n(window).trigger("html5lightbox.videoended");
			d || B.show();
			c || (v.show(), clearTimeout(t), L.show(), p.hide())
		};
		k = function() {
			var a = r.get(0).currentTime;
			if (a) {
				U.text(aa(a));
				var b = r.get(0).duration;
				if (b) {
					G.text(aa(b));
					var c = C.width(),
						a = Math.round(c * a / b);
					O.css({
						width: a
					});
					M.css({
						left: a
					})
				}
			}
		};
		m = function() {
			if (r.get(0).buffered && 0 < r.get(0).buffered.length && !isNaN(r.get(0).buffered.end(0)) && !isNaN(r.get(0).duration)) {
				var a = C.width();
				P.css({
					width: Math.round(a * r.get(0).buffered.end(0) / r.get(0).duration)
				})
			}
		};
		try {
			r.on("play", function() {
				d || B.hide();
				c || (L.hide(), p.show())
			}), r.on("pause", b), r.on("ended", w), r.on("timeupdate", k), r.on("progress", m)
		} catch (ba) {}
	};
	var b =
		jQuery,
		F = 0;
	b.fn.html5gallery = function(k) {
		var e = function(a, c, d) {
			this.container = a;
			this.options = c;
			this.id = d;
			b(window).trigger("html5gallery.begin", [this.id]);
			this.options.flashInstalled = 0;
			this.options.html5VideoSupported = !!document.createElement("video").canPlayType;
			this.options.isChrome = null != navigator.userAgent.match(/Chrome/i);
			this.options.isFirefox = null != navigator.userAgent.match(/Firefox/i);
			this.options.isOpera = null != navigator.userAgent.match(/Opera/i) || null != navigator.userAgent.match(/OPR\//i);
			this.options.isSafari = null != navigator.userAgent.match(/Safari/i);
			this.options.isIE11 = null != navigator.userAgent.match(/Trident\/7/) && null != navigator.userAgent.match(/rv:11/);
			this.options.isIE = null != navigator.userAgent.match(/MSIE/i) && !this.options.isOpera;
			this.options.isIE10 = null != navigator.userAgent.match(/MSIE 10/i) && !this.options.isOpera;
			this.options.isIE9 = null != navigator.userAgent.match(/MSIE 9/i) && !this.options.isOpera;
			this.options.isIE8 = null != navigator.userAgent.match(/MSIE 8/i) && !this.options.isOpera;
			this.options.isIE7 = null != navigator.userAgent.match(/MSIE 7/i) && !this.options.isOpera;
			this.options.isIE6 = null != navigator.userAgent.match(/MSIE 6/i) && !this.options.isOpera;
			this.options.isIE678 = this.options.isIE6 || this.options.isIE7 || this.options.isIE8;
			this.options.isIE6789 = this.options.isIE6 || this.options.isIE7 || this.options.isIE8 ||
				this.options.isIE9;
			this.options.isAndroid = null != navigator.userAgent.match(/Android/i);
			this.options.isIPad = null != navigator.userAgent.match(/iPad/i);
			this.options.isIPhone = null != navigator.userAgent.match(/iPod/i) || null != navigator.userAgent.match(/iPhone/i);
			this.options.isIOS = this.options.isIPad || this.options.isIPhone;
			this.options.isMobile = this.options.isAndroid || this.options.isIPad || this.options.isIPhone;
			this.options.isIOSLess5 = this.options.isIPad && this.options.isIPhone && (null != navigator.userAgent.match(/OS 4/i) ||
				null != navigator.userAgent.match(/OS 3/i));
			this.options.supportCSSPositionFixed = !this.options.isIE6 && !this.options.isIOSLess5;
			this.eStart = (this.isTouch = "ontouchstart" in window || this.options.forcetouch) ? "touchstart" : "mousedown";
			this.eMove = this.isTouch ? "touchmove" : "mousemove";
			this.eCancel = this.isTouch ? "touchcancel" : "mouseup";
			this.eClick = "click";
			a = document.createElement("video");
			this.options.canplaymp4 = a && a.canPlayType && a.canPlayType("video/mp4").replace(/no/, "");
			this.slideshowTimeout = null;
			this.looptimes =
				0;
			this.updateCarouselTimeout = null;
			this.disableupdatecarousel = !1;
			this.hideToolboxTimeout = this.hideTitleTimeout = null;
			this.isHd = this.options.hddefault;
			this.isHTML5 = !1;
			this.elemArray = [];
			b(".html5gallery-loading").hide();
			this.container.children().hide();
			this.container.css({
				display: "block",
				position: "relative"
			});
			this.options.googlefonts && 0 < this.options.googlefonts.length && (a = "https://fonts.googleapis.com/css?family=" + this.options.googlefonts, c = document.createElement("link"), c.setAttribute("rel", "stylesheet"),
				c.setAttribute("type", "text/css"), c.setAttribute("href", a), document.getElementsByTagName("head")[0].appendChild(c));
			this.initData(this.processElemArray)
		};
		e.prototype = {
			getParams: function() {
				for (var a = {}, b = window.location.search.substring(1).split("&"), d = 0; d < b.length; d++) {
					var h = b[d].split("=");
					h && 2 == h.length && (a[h[0].toLowerCase()] = unescape(h[1]))
				}
				return a
			},
			init: function(a) {
				if (a.options.random)
					for (var c = a.elemArray.length - 1; 0 < c; c--) {
						var d = Math.floor(Math.random() * c),
							h = a.elemArray[c];
						a.elemArray[c] = a.elemArray[d];
						a.elemArray[d] = h
					}
				a.options.reverse && a.elemArray.reverse();
				a.initYoutubeApi();
				a.options.showcarousel = (1 < a.elemArray.length || a.options.showcarouselforsingle) && a.options.showcarousel;
				a.options.watermarkcode = "";
				a.createStyle();
				a.createMarkup();
				a.createImageToolbox();
				if (!(0 >= a.elemArray.length)) {
					a.createSliderTimeout();
					a.createEvents();
					a.loadCarousel();
					a.savedElem = -1;
					a.curElem = -1;
					a.nextElem = -1;
					a.prevElem = -1;
					a.firstrun = !0;
					a.isPaused = !a.options.autoslide;
					a.isFullscreen = !1;
					a.isVideoPlaying = !1;
					a.showingPoster = !1;
					a.disableTouchSwipe = !1;
					a.createSocial(!1);
					c = a.getParams();
					d = a.options.firstitemid;
					"html5galleryid" in c && c.html5galleryid in a.elemArray && (d = c.html5galleryid);
					"galleryshareid" in c && c.galleryshareid in a.elemArray && (d = c.galleryshareid);
					a.slideRun(d);
					a.firstrun = !1;
					if (a.options.responsive && (a.resizeGallery(), b(window).resize(function() {
								setTimeout(function() {
									a.resizeGallery()
								}, a.options.resizedelay)
							}), a.options.isMobile &&
							!a.options.mobileresizeevent)) b(window).on("orientationchange", function() {
						setTimeout(function() {
							a.resizeGallery()
						}, a.options.resizedelay)
					});
					b(window).trigger("html5gallery.inited", [a.id, a.curElem])
				}
			},
			resizeGallery: function() {
				switch (this.options.skin) {
					case "vertical":
					case "verticallight":
					case "showcase":
						this.resizeStyleVertical();
						break;
					default:
						this.resizeStyleDefault()
				}
				this.resizeImageToolbox()
			},
			absoluteUrl: function(a) {
				var b = document.createElement("a");
				b.href = a;
				return b.protocol + "//" + b.host + b.pathname +
					b.search + b.hash
			},
			createSocial: function(a) {
				this.options.initsocial && b("head").append('<link rel="stylesheet" href="' + this.options.jsfolder + 'icons/css/fontello.css" type="text/css" />');
				if (this.options.showsocial) {
					var c = this;
					b("head").append("<style type='text/css' data-creator='html5gallery'>.html5gallery-rotate { border-radius:50%; -webkit-transition:-webkit-transform .4s ease-in; transition: transform .4s ease-in; } .html5gallery-rotate:hover { -webkit-transform: rotate(360deg); transform: rotate(360deg); }</style>");
					var d = "<div",
						d = a ? d + (' class="html5gallery-fullscreen-social-' + this.id + '" style="display:none;' + this.options.socialpositionlightbox + '"') : d + (' class="html5gallery-social-' + this.id + '" style="display:' + ("mouseover" == this.options.socialmode ? "none" : "block") + ";" + this.options.socialposition + '"'),
						d = d + ">",
						h = ("horizontal" == this.options.socialdirection ? "display:inline-block;" : "display:block;") + "margin:4px;",
						e = "display:table-cell;width:" + this.options.socialbuttonsize + "px;height:" + this.options.socialbuttonsize +
						"px;font-size:" + this.options.socialbuttonfontsize + "px;border-radius:50%;color:#fff;vertical-align:middle;text-align:center;cursor:pointer;padding:0;";
					this.options.showemail && (d += '<div class="html5gallery-social-btn-' + this.id + (this.options.socialrotateeffect ? " html5gallery-rotate" : "") + ' html5gallery-social-email" style="' + h + '"><div class="mh-icon-mail" style="' + e + 'background-color:#4d83ff;"></div></div>');
					this.options.showfacebook && (d += '<div class="html5gallery-social-btn-' + this.id + (this.options.socialrotateeffect ?
						" html5gallery-rotate" : "") + ' html5gallery-social-facebook" style="' + h + '"><div class="mh-icon-facebook" style="' + e + 'background-color:#3b5998;"></div></div>');
					this.options.showtwitter && (d += '<div class="html5gallery-social-btn-' + this.id + (this.options.socialrotateeffect ? " html5gallery-rotate" : "") + ' html5gallery-social-twitter" style="' + h + '"><div class="mh-icon-twitter" style="' + e + 'background-color:#03b3ee;"></div></div>');
					this.options.showpinterest && (d += '<div class="html5gallery-social-btn-' + this.id +
						(this.options.socialrotateeffect ? " html5gallery-rotate" : "") + ' html5gallery-social-pinterest" style="' + h + '"><div class="mh-icon-pinterest" style="' + e + 'background-color:#c92228;"></div></div>');
					this.options.showlinkedin && (d += '<div class="html5gallery-social-btn-' + this.id + (this.options.socialrotateeffect ? " html5gallery-rotate" : "") + ' html5gallery-social-linkedin" style="' + h + '"><div class="mh-icon-linkedin" style="' + e + 'background-color:#0274b3;"></div></div>');
					this.options.showgplus && (d += '<div class="html5gallery-social-btn-' +
						this.id + (this.options.socialrotateeffect ? " html5gallery-rotate" : "") + ' html5gallery-social-gplus" style="' + h + '"><div class="mh-icon-gplus" style="' + e + 'background-color:#dd5144;"></div></div>');
					d += '<div style="clear:both;"></div></div>';
					a ? b(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).append(d) : (b(".html5gallery-box-" + this.id, this.$gallery).append(d), "mouseover" == this.options.socialmode && b(".html5gallery-box-" + this.id).hover(function() {
						b(".html5gallery-social-" + c.id).fadeIn()
					}, function() {
						b(".html5gallery-social-" +
							c.id).fadeOut()
					}));
					b(".html5gallery-social-btn-" + this.id).click(function() {
						var a = window.location.href + (0 > window.location.href.indexOf("?") ? "?" : "&") + "galleryshareid=" + c.elemArray[c.curElem][0],
							d = c.elemArray[c.curElem][7],
							h = c.absoluteUrl(c.elemArray[c.curElem][2]),
							e = 5 == c.elemArray[c.curElem][9] || 6 == c.elemArray[c.curElem][9] || 7 == c.elemArray[c.curElem][9] || 8 == c.elemArray[c.curElem][9] || 9 == c.elemArray[c.curElem][9] || 10 == c.elemArray[c.curElem][9] || 11 == c.elemArray[c.curElem][9],
							d = d ? c.html2Text(d) : "";
						e &&
							c.elemArray[c.curElem][12] && (h = c.absoluteUrl(c.elemArray[c.curElem][12]));
						b(this).hasClass("html5gallery-social-facebook") ? window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(a) + "&t=" + encodeURIComponent(d), "_blank") : b(this).hasClass("html5gallery-social-twitter") ? window.open("https://twitter.com/share?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(d), "_blank") : b(this).hasClass("html5gallery-social-pinterest") ? window.open("https://pinterest.com/pin/create/bookmarklet/?media=" +
								encodeURIComponent(h) + "&url=" + encodeURIComponent(a) + "&description=" + encodeURIComponent(d) + "&is_video=" + (e ? "true" : "false"), "_blank") : b(this).hasClass("html5gallery-social-linkedin") ? window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(a) + "&title=" + encodeURIComponent(d) + "&summary=" + encodeURIComponent(d), "_blank") : b(this).hasClass("html5gallery-social-gplus") ? window.open("https://plus.google.com/share?url=" + encodeURIComponent(a), "_blank") : b(this).hasClass("html5gallery-social-email") &&
							window.open("mailto:?subject=" + encodeURIComponent(d) + "&body=Check out this: " + encodeURIComponent(a));
						return !1
					})
				}
			},
			html2Text: function(a) {
				var b = document.createElement("div");
				b.innerHTML = a;
				return b.innerText
			},
			checkMK: function() {
				if (this.options.frve) {
					var a = b(".html5gallery-elem-" + this.id, this.container),
						c = b('a[href="' + this.options.freelink + '"]', a);
					if (a = c.find("div"), "none" == c.css("display") || "hidden" == c.css("visibility") || 8 > parseInt(c.css("font-size")) || "none" == a.css("display") || "hidden" == a.css("visibility") || 8 > parseInt(a.css("font-size"))) c.attr({
						style: (c.attr("style") || "") + "display:block!important;visibility:visible!important;font-size:12px!important;"
					}), a.attr({
						style: a.attr("style") + "display:block!important;visibility:visible!important;font-size:12px!important;"
					})
				}
			},
			initData: function(a) {
				this.elemArray = [];
				if (this.options.src && 0 < this.options.src.length) {
					var c = this.options.mediatype ? this.options.mediatype : this.checkType(this.options.src);
					this.elemArray.push([0, "", this.options.src, this.options.webm, this.options.ogg, "", "", this.options.title ? this.options.title : "", this.options.title ? this.options.title : "", c, this.options.width, this.options.height, this.options.poster, this.options.hd, this.options.hdogg, this.options.hdwebm]);
					this.readTags();
					a(this)
				} else if (this.options.xml && 0 < this.options.xml.length) {
					this.options.xmlnocache &&
						(this.options.xml += 0 > this.options.xml.indexOf("?") ? "?" : "&", this.options.xml += Math.random());
					var d = this;
					b.ajax({
						type: "GET",
						url: this.options.xml,
						dataType: "xml",
						success: function(c) {
							b(c).find("slide").each(function(a) {
								var c = b(this).find("title").text(),
									h = b(this).find("description").text() ? b(this).find("description").text() : b(this).find("information").text();
								c || (c = "");
								h || (h = "");
								var e = b(this).find("mediatype").text() ? b(this).find("mediatype").text() : d.checkType(b(this).find("file").text());
								d.elemArray.push([b(this).find("id").length ?
									b(this).find("id").text() : a, b(this).find("thumbnail").text(), b(this).find("file").text(), b(this).find("file-ogg").text(), b(this).find("file-webm").text(), b(this).find("link").text(), b(this).find("linktarget").text(), c, h, e, b(this).find("width").length && !isNaN(parseInt(b(this).find("width").text())) ? parseInt(b(this).find("width").text()) : d.options.width, b(this).find("height").length && !isNaN(parseInt(b(this).find("height").text())) ? parseInt(b(this).find("height").text()) : d.options.height, b(this).find("poster").text(),
									b(this).find("hd").text(), b(this).find("hdogg").text(), b(this).find("hdwebm").text(), b(this).find("duration").text(), b(this).find("lightboxwidth").text(), b(this).find("lightboxheight").text(), b(this).find("youtubeapikey").text(), b(this).find("youtubeplaylistid").text(), b(this).find("youtubeplaylistmaxresults").text(), "true" == b(this).find("lightbox").text().toLowerCase()
								])
							});
							d.readTags();
							a(d)
						}
					})
				} else this.options.remote && 0 < this.options.remote.length ? (d = this, b.getJSON(this.options.remote, function(b) {
					for (var c =
							0; c < b.length; c++) {
						var e = b[c].mediatype ? b[c].mediatype : d.checkType(b[c].file);
						d.elemArray.push([c, b[c].thumbnail, b[c].file, b[c].fileogg, b[c].filewebm, b[c].link, b[c].linktarget, b[c].title, b[c].description, e, b[c].width && !isNaN(parseInt(b[c].width)) ? parseInt(b[c].width) : d.options.width, b[c].height && !isNaN(parseInt(b[c].height)) ? parseInt(b[c].height) : d.options.height, b[c].poster, b[c].hd, b[c].hdogg, b[c].hdwebm, b[c].duration, b[c].lightboxwidth, b[c].lightboxheight, b[c].youtubeapikey, b[c].youtubeplaylistid,
							b[c].youtubeplaylistmaxresults, b[c].lightbox
						])
					}
					d.readTags();
					a(d)
				})) : this.options.youtubechannel ? (c = {
						alt: "json",
						v: 2,
						orderby: this.options.youtubechannel.orderby ? this.options.youtubechannel.orderby : "published",
						"start-index": this.options.youtubechannel["start-index"] ? this.options.youtubechannel["start-index"] : 1,
						"max-results": this.options.youtubechannel["max-results"] ? this.options.youtubechannel["max-results"] : 10
					}, this.options.youtubechannel.author ? c.author = this.options.youtubechannel.author : this.options.youtubechannel.q &&
					(c.q = this.options.youtubechannel.q), c = "https://gdata.youtube.com/feeds/api/videos?" + b.param(c), d = this, b.getJSON(c, function(b) {
						if (b && b.feed && b.feed.entry)
							for (var c = 1; c < b.feed.entry.length; c++) d.elemArray.push([c, "https://img.youtube.com/vi/" + b.feed.entry[c].media$group.yt$videoid.$t + "/" + d.options.youtubethumb, b.feed.entry[c].media$group.media$player.url, null, null, null, null, b.feed.entry[c].media$group.media$title.$t, b.feed.entry[c].media$group.media$description.$t, 9, 640, 480, "https://img.youtube.com/vi/" +
								b.feed.entry[c].media$group.yt$videoid.$t + "/" + d.options.youtubeimage, null, null, null, null
							]);
						d.readTags();
						a(d)
					})) : this.options.youtubeapikey && this.options.youtubeplaylistid ? (d = this, this.getYouTubePlaylist(this.options.youtubeapikey, this.options.youtubeplaylistid, this.options.youtubeplaylistmaxresults, -1, function() {
					d.readTags();
					a(d)
				}, this, null)) : (this.readTags(), a(this))
			},
			readTags: function() {
				var a = this;
				(b("img.html5galleryimg", this.container).length ? b("img.html5galleryimg", this.container) : b("img", this.container)).each(function() {
					var c =
						b(this).attr("src");
					c || (c = b(this).get(0).src);
					for (var d = a.options.lazyloadtags.split(","), e = 0; e < d.length; e++)
						if (b(this).data(d[e]) && 0 < b(this).data(d[e]).length) {
							c = b(this).data(d[e]);
							break
						} var d = c,
						e = b(this).data("title") ? b(this).data("title") : b(this).attr("alt"),
						f = b(this).data("description") ? b(this).data("description") : b(this).data("information"),
						j = b(this).attr("alt") ? b(this).attr("alt") : b(this).data("title");
					e || (e = "");
					f || (f = "");
					j || (j = "");
					var l = a.options.width,
						g = a.options.height,
						w = b(this).data("duration") ?
						b(this).data("duration") : 0,
						q = null,
						k = null,
						m = null,
						n = null,
						s = null,
						t = null,
						u = null,
						x = null,
						A = null,
						F = null,
						r = null,
						B = null,
						E = null,
						v = !1;
					b(this).parent().is("a") && (d = b(this).parent().attr("href"), q = b(this).parent().data("ogg"), k = b(this).parent().data("webm"), m = b(this).parent().data("link"), n = b(this).parent().data("linktarget"), s = b(this).parent().data("poster"), isNaN(b(this).parent().data("width")) || (l = b(this).parent().data("width")), isNaN(b(this).parent().data("height")) || (g = b(this).parent().data("height")), t =
						b(this).parent().data("hd"), u = b(this).parent().data("hdogg"), x = b(this).parent().data("hdwebm"), A = b(this).parent().data("lightboxwidth"), F = b(this).parent().data("lightboxheight"), r = b(this).parent().data("youtubeapikey"), B = b(this).parent().data("youtubeplaylistid"), E = b(this).parent().data("youtubeplaylistmaxresults"), v = b(this).parent().hasClass("html5gallerylightbox"));
					var J = b(this).parent().data("mediatype") ? b(this).parent().data("mediatype") : a.checkType(d);
					a.elemArray.push([a.elemArray.length, c, d,
						q, k, m, n, e, f, J, l, g, s, t, u, x, w, A, F, r, B, E, v, l, g, j
					])
				})
			},
			getYouTubePlaylist: function(a, c, d, e, f, j, l) {
				0 <= e && j.elemArray.splice(e, 1);
				var g = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + c + "&key=" + a;
				d && (g = 50 < d ? g + "&maxResults=50" : g + ("&maxResults=" + d));
				l && (g += "&pageToken=" + l);
				var w = !0;
				b.getJSON(g, function(b) {
					if (b && b.items)
						for (var g = 0; g < b.items.length; g++) {
							var l = b.items[g].snippet.resourceId.videoId,
								k = "https://img.youtube.com/vi/" + l + "/" + j.options.youtubeimage;
							j.options.youtubeplaylistusemaxres &&
								(b.items[g].snippet.thumbnails && b.items[g].snippet.thumbnails.maxres) && (k = b.items[g].snippet.thumbnails.maxres.url);
							l = [g, "https://img.youtube.com/vi/" + l + "/" + j.options.youtubethumb, "https://www.youtube.com/embed/" + l, null, null, null, null, b.items[g].snippet.title, b.items[g].snippet.description, 9, 640, 480, k, null, null, null, null];
							0 <= e ? (j.elemArray.splice(e, 0, l), e++) : j.elemArray.push(l)
						}
					b && (b.nextPageToken && d && 50 < d) && (w = !1, j.getYouTubePlaylist(a, c, d - 50, e, f, j, b.nextPageToken))
				}).always(function() {
					w && f(j)
				})
			},
			processElemArray: function(a) {
				for (var b = !1, d = 0; d < a.elemArray.length; d++) a.elemArray[d][25] || (a.elemArray[d][25] = a.elemArray[d][7]);
				for (d = 0; d < a.elemArray.length; d++)
					if (13 == a.elemArray[d][9] && a.elemArray[d][19] && a.elemArray[d][20]) {
						b = !0;
						break
					} b ? a.getYouTubePlaylist(a.elemArray[d][19], a.elemArray[d][20], a.elemArray[d][21], d, a.processElemArray, a, null) : a.init(a)
			},
			createMarkup: function() {
				this.$gallery = jQuery("<div class='html5gallery-container-" + this.id + "'><div class='html5gallery-box-" + this.id + "'><div class='html5gallery-elem-" +
					this.id + "'></div><div class='html5gallery-title-" + this.id + "'></div><div class='html5gallery-timer-" + this.id + "'></div><div class='html5gallery-viral-" + this.id + "'></div><div class='html5gallery-toolbox-" + this.id + "'><div class='html5gallery-toolbox-bg-" + this.id + "'></div><div class='html5gallery-toolbox-buttons-" + this.id + "'><div class='html5gallery-play-" + this.id + "'></div><div class='html5gallery-pause-" + this.id + "'></div><div class='html5gallery-left-" + this.id + "'></div><div class='html5gallery-right-" +
					this.id + "'></div><div class='html5gallery-lightbox-" + this.id + "'></div></div></div></div><div class='html5gallery-car-" + this.id + "'><div class='html5gallery-car-list-" + this.id + "'><div class='html5gallery-car-mask-" + this.id + "'><div class='html5gallery-thumbs-" + this.id + "'></div></div><div class='html5gallery-car-slider-bar-" + this.id + "'><div class='html5gallery-car-slider-bar-top-" + this.id + "'></div><div class='html5gallery-car-slider-bar-middle-" + this.id + "'></div><div class='html5gallery-car-slider-bar-bottom-" +
					this.id + "'></div></div><div class='html5gallery-car-left-" + this.id + "'></div><div class='html5gallery-car-right-" + this.id + "'></div><div class='html5gallery-car-slider-" + this.id + "'></div></div></div></div>");
				this.$gallery.appendTo(this.container);
				this.options.socialurlforeach || this.createSocialMedia();
				this.options.googleanalyticsaccount && !window._gaq && (window._gaq = window._gaq || [], window._gaq.push(["_setAccount", this.options.googleanalyticsaccount]), window._gaq.push(["_trackPageview"]), b.getScript("https://ssl.google-analytics.com/ga.js"))
			},
			createSocialMedia: function() {
				b(".html5gallery-viral-" + this.id, this.$gallery).empty();
				var a = window.location.href;
				this.options.socialurlforeach && (a += (0 > window.location.href.indexOf("?") ? "?" : "&") + "html5galleryid=" + this.elemArray[this.curElem][0]);
				if (this.options.showsocialmedia && this.options.showfacebooklike) {
					var c = "<div style='display:block; float:left; width:110px; height:21px;'><iframe src='https://www.facebook.com/plugins/like.php?href=",
						c = this.options.facebooklikeurl && 0 < this.options.facebooklikeurl.length ?
						c + encodeURIComponent(this.options.facebooklikeurl) : c + a;
					b(".html5gallery-viral-" + this.id, this.$gallery).append(c + "&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21' scrolling='no' frameborder='0' style='border:none;;overflow:hidden; width:110px; height:21px;' allowTransparency='true'></iframe></div>")
				}
				this.options.showsocialmedia && this.options.showtwitter && (c = "<div style='display:block; float:left; width:110px; height:21px;'><a href='https://twitter.com/share' class='twitter-share-button'",
					c = this.options.twitterurl && 0 < this.options.twitterurl.length ? c + (" data-url='" + this.options.twitterurl + "'") : c + (" data-url='" + a + "'"), this.options.twitterusername && 0 < this.options.twitterusername.length && (c += " data-via='" + this.options.twittervia + "' data-related='" + this.options.twitterusername + "'"), b(".html5gallery-viral-" + this.id, this.$gallery).append(c + ">Tweet</a></div>"), b.getScript("https://platform.twitter.com/widgets.js"));
				this.options.showsocialmedia && this.options.showgoogleplus && (c = "<div style='display:block; float:left; width:100px; height:21px;'><div class='g-plusone' data-size='medium'",
					c = this.options.googleplusurl && 0 < this.options.googleplusurl.length ? c + (" data-href='" + this.options.googleplusurl + "'") : c + (" data-href='" + a + "'"), b(".html5gallery-viral-" + this.id, this.$gallery).append(c + "></div></div>"), b.getScript("https://apis.google.com/js/plusone.js"))
			},
			playGallery: function() {
				b(".html5gallery-play-" + this.id, this.$gallery).hide();
				b(".html5gallery-pause-" + this.id, this.$gallery).show();
				this.isPaused = !1;
				this.slideshowTimeout.setInterval(this.elemArray[this.curElem][16] ? this.elemArray[this.curElem][16] :
					this.options.slideshowinterval);
				this.slideshowTimeout.start();
				b(".html5gallery-timer-" + this.id, this.$gallery).css({
					width: 0
				})
			},
			pauseGallery: function() {
				b(".html5gallery-play-" + this.id, this.$gallery).show();
				b(".html5gallery-pause-" + this.id, this.$gallery).hide();
				this.isPaused = !0;
				this.slideshowTimeout.stop();
				b(".html5gallery-timer-" + this.id, this.$gallery).css({
					width: 0
				})
			},
			createSliderTimeout: function() {
				var a = this;
				a.slideshowTimeout = new HTML5GalleryTimer(a.options.slideshowinterval, function() {
						a.slideRun(-1)
					},
					a.options.showtimer ? function(b) {
						a.updateTimer(b)
					} : null);
				a.options.pauseonmouseover && b(".html5gallery-elem-" + this.id, this.$gallery).hover(function() {
					a.isPaused || a.slideshowTimeout.pause()
				}, function() {
					a.isPaused || a.slideshowTimeout.resume(!1)
				})
			},
			updateTimer: function(a) {
				this.isFullscreen ? (a = Math.max(0, Math.floor(b(".html5gallery-fullscreen-elem-wrapper-" + this.id, this.$fullscreen).width() * a)), b(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
					width: a + "px"
				})) : (a = Math.max(0, Math.floor(b(".html5gallery-elem-" +
					this.id, this.$gallery).width() * a)), b(".html5gallery-timer-" + this.id, this.$gallery).css({
					width: a + "px"
				}))
			},
			createEvents: function() {
				var a = this;
				b(".html5gallery-play-" + this.id, this.$gallery).click(function() {
					a.playGallery()
				});
				b(".html5gallery-pause-" + this.id, this.$gallery).click(function() {
					a.pauseGallery()
				});
				b(".html5gallery-lightbox-" + this.id, this.$gallery).click(function() {
					a.goFullscreen()
				});
				b(".html5gallery-left-" + this.id, this.$gallery).click(function() {
					a.slideRun(-2, !0)
				});
				b(".html5gallery-right-" +
					this.id, this.$gallery).click(function() {
					a.slideRun(-1, !0)
				});
				if (a.options.enabletouchswipe) {
					var c = a.options.isAndroid && a.options.enabletouchswipeonandroid ? !0 : !1;
					b(".html5gallery-box-" + this.id, this.$gallery).touchSwipe({
						preventWebBrowser: c,
						swipeLeft: function() {
							a.disableTouchSwipe || a.slideRun(-1, !0)
						},
						swipeRight: function() {
							a.disableTouchSwipe || a.slideRun(-2, !0)
						}
					})
				}
				if (!("ontouchstart" in window) || !a.options.disablehovereventontouch) b(".html5gallery-box-" + this.id, this.$gallery).mousemove(function() {
					if ("mouseover" ==
						a.options.imagetoolboxmode) {
						var c = a.elemArray[a.curElem][9];
						("always" == a.options.showimagetoolbox || "image" == a.options.showimagetoolbox && 1 == c) && a.showimagetoolbox(c, !0)
					}
					if (a.options.titleoverlay && a.options.titleautohide && (!a.options.hidetitlewhenvideoisplaying || !a.isVideoPlaying)) b(".html5gallery-title-" + a.id, a.$gallery).show(), clearTimeout(a.hideTitleTimeout), a.hideTitleTimeout = setTimeout(function() {
						b(".html5gallery-title-" + a.id, a.$gallery).fadeOut()
					}, 3E3)
				}), b(".html5gallery-box-" + this.id, this.$gallery).hover(function() {
					a.onSlideshowOver();
					if ("mouseover" == a.options.imagetoolboxmode) {
						var c = a.elemArray[a.curElem][9];
						("always" == a.options.showimagetoolbox || "image" == a.options.showimagetoolbox && 1 == c) && a.showimagetoolbox(c)
					}
					if (a.options.titleoverlay && a.options.titleautohide && (!a.options.hidetitlewhenvideoisplaying || !a.isVideoPlaying)) b(".html5gallery-title-" + a.id, a.$gallery).fadeIn(), clearTimeout(a.hideTitleTimeout), a.hideTitleTimeout = setTimeout(function() {
						b(".html5gallery-title-" + a.id, a.$gallery).fadeOut()
					}, 3E3)
				}, function() {
					"mouseover" ==
					a.options.imagetoolboxmode && a.hideimagetoolbox();
					a.options.titleoverlay && a.options.titleautohide && (b(".html5gallery-title-" + a.id, a.$gallery).fadeOut(), clearTimeout(a.hideTitleTimeout))
				});
				b(".html5gallery-car-left-" + this.id, this.$gallery).css({
					"background-position": "-" + String(2 * this.options.carouselarrowwidth) + "px 0px",
					cursor: ""
				});
				b(".html5gallery-car-left-" + this.id, this.$gallery).data("disabled", !0);
				b(".html5gallery-car-right-" + this.id, this.$gallery).css({
					"background-position": "0px 0px"
				});
				b(".html5gallery-car-left-" +
					this.id, this.$gallery).click(function() {
					b(this).data("disabled") || (a.disableupdatecarousel = !0, a.updateCarouselTimeout = setTimeout(function() {
						a.enableUpdateCarousel()
					}, a.options.updatecarouselinterval), a.carouselPrev())
				});
				b(".html5gallery-car-right-" + this.id, this.$gallery).click(function() {
					b(this).data("disabled") || (a.disableupdatecarousel = !0, a.updateCarouselTimeout = setTimeout(function() {
						a.enableUpdateCarousel()
					}, a.options.updatecarouselinterval), a.carouselNext())
				});
				b(".html5gallery-car-slider-" + this.id,
					this.$gallery).on("drag", function(b, c) {
					a.disableupdatecarousel = !0;
					a.updateCarouselTimeout = setTimeout(function() {
						a.enableUpdateCarousel()
					}, a.options.updatecarouselinterval);
					a.carouselSliderDrag(b, c)
				});
				b(".html5gallery-car-slider-bar-" + this.id, this.$gallery).click(function(b) {
					a.disableupdatecarousel = !0;
					a.updateCarouselTimeout = setTimeout(function() {
						a.enableUpdateCarousel()
					}, a.options.updatecarouselinterval);
					a.carouselBarClicked(b)
				});
				if ("vertical" == this.options.skin || "verticallight" == this.options.skin ||
					"showcase" == this.options.skin) b(".html5gallery-car-list-" + this.id, this.$gallery).on("DOMMouseScroll mousewheel wheel", function(c) {
					c.preventDefault();
					var e = a.elemArray.length * (a.options.thumbheight + a.options.thumbgap);
					if (!(e < a.options.thumbMaskHeight)) {
						var e = -1 * (e - a.options.thumbMaskHeight),
							f = 0;
						c.originalEvent && (c.originalEvent.wheelDeltaY ? f = c.originalEvent.wheelDeltaY : c.originalEvent.detail ? f = -40 * c.originalEvent.detail : c.originalEvent.wheelDelta ? f = c.originalEvent.wheelDelta : c.originalEvent.deltaY &&
							(f = c.originalEvent.deltaY));
						c = parseInt(b(".html5gallery-thumbs-" + a.id, a.$gallery).css("marginTop")) + f;
						0 < c && (c = 0);
						c < e && (c = e);
						e = (a.options.carouselSliderMax - a.options.carouselSliderMin) * c / e;
						b(".html5gallery-car-slider-" + a.id, a.$gallery).css({
							top: e
						});
						b(".html5gallery-thumbs-" + a.id, a.$gallery).css({
							marginTop: c
						})
					}
				});
				"ontouchstart" in window || (b(".html5gallery-car-left-" + this.id, this.$gallery).hover(function() {
					b(this).data("disabled") || b(this).css({
						"background-position": "-" + a.options.carouselarrowwidth +
							"px 0px"
					})
				}, function() {
					b(this).data("disabled") || b(this).css({
						"background-position": "0px 0px"
					})
				}), b(".html5gallery-car-right-" + this.id, this.$gallery).hover(function() {
					b(this).data("disabled") || b(this).css({
						"background-position": "-" + a.options.carouselarrowwidth + "px 0px"
					})
				}, function() {
					b(this).data("disabled") || b(this).css({
						"background-position": "0px 0px"
					})
				}));
				"ontouchstart" in window && ("vertical" == this.options.skin || "verticallight" == this.options.skin || "showcase" == this.options.skin ? b(".html5gallery-car-" +
					this.id, this.$gallery).touchSwipe({
					preventWebBrowser: !0,
					swipeTop: function() {
						b(".html5gallery-car-right-" + a.id, a.$gallery).click()
					},
					swipeBottom: function() {
						b(".html5gallery-car-left-" + a.id, a.$gallery).click()
					},
					instance: a,
					preventWebBrowserCallback: "verticalPreventWebBrowserCallback"
				}) : b(".html5gallery-car-" + this.id, this.$gallery).touchSwipe({
					preventWebBrowser: !1,
					swipeLeft: function() {
						b(".html5gallery-car-right-" + a.id, a.$gallery).click()
					},
					swipeRight: function() {
						b(".html5gallery-car-left-" + a.id, a.$gallery).click()
					}
				}))
			},
			verticalPreventWebBrowserCallback: function(a) {
				var c = parseInt(b(".html5gallery-thumbs-" + this.id, this.$gallery).css("margin-top"));
				return a ? c > this.options.thumbMaskHeight - this.options.thumbTotalHeight : 0 > c
			},
			createStyle: function() {
				switch (this.options.skin) {
					case "vertical":
					case "verticallight":
					case "showcase":
						this.createStyleVertical();
						break;
					default:
						this.createStyleDefault()
				}
			},
			resizeStyleVertical: function() {
				if (this.container.parent() && this.container.parent().width()) {
					this.options.containerWidth = this.container.parent().width();
					this.options.totalWidth = this.options.containerWidth;
					if (this.options.carouselposresponsive) {
						var a = b(window).width();
						a < this.options.carouselposresponsiveonscreenwidth ? this.options.carouselposition = "bottom" : (this.options.carouselposition = this.options.originalcarouselposition, this.options.thumbwidth = this.options.originalthumbwidth)
					}
					this.options.showcarousel && (this.options.carouselWidth = "bottom" == this.options.carouselposition ? this.options.width : this.options.thumbwidth);
					"bottom" == this.options.carouselposition ?
						this.options.width = this.options.totalWidth - 2 * this.options.padding : (this.options.width = this.options.totalWidth - 2 * this.options.padding, 0 < this.options.carouselWidth + this.options.carouselmargin && (this.options.width -= this.options.carouselWidth + this.options.carouselmargin));
					this.options.responsivefullscreen && 0 < this.container.parent().height() ? (this.options.containerHeight = this.container.parent().height(), this.options.totalHeight = this.options.containerHeight, this.options.height = "bottom" == this.options.carouselposition ?
						this.options.totalHeight - (this.options.headerHeight + 2 * this.options.padding + this.options.carouselheight) : this.options.totalHeight - (this.options.headerHeight + 2 * this.options.padding)) : (this.options.height = Math.round(this.options.width * this.options.originalHeight / this.options.originalWidth), this.options.totalHeight = "bottom" == this.options.carouselposition ? this.options.height + this.options.headerHeight + 2 * this.options.padding + this.options.carouselmargin + this.options.carouselHeight : this.options.height + this.options.headerHeight +
						2 * this.options.padding, this.options.containerHeight = this.options.totalHeight);
					this.container.css({
						width: this.options.containerWidth,
						height: this.options.containerHeight
					});
					this.options.boxWidth = this.options.width;
					this.options.boxHeight = this.options.height + this.options.headerHeight;
					this.options.slideshadow && (this.options.boxWidth += 8);
					this.options.showcarousel && ("bottom" == this.options.carouselposition ? (this.options.carouselWidth = this.options.width, this.options.carouselHeight = this.options.carouselheight,
						this.options.carouselLeft = this.options.padding, this.options.carouselTop = this.options.height + this.options.headerHeight + 2 * this.options.padding, this.options.carAreaLength = this.options.carouselHeight, this.options.carouselSlider = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)) < this.elemArray.length, this.options.thumbwidth = this.options.width, this.options.carouselSlider && (this.options.thumbwidth -= 20)) : (this.options.carouselWidth = this.options.thumbwidth, this.options.carouselHeight =
						this.options.height + this.options.headerHeight, this.options.carTop = 0, this.options.carBottom = 0, this.options.carAreaLength = this.options.carouselHeight - this.options.carTop - this.options.carBottom, this.options.carouselSlider = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)) < this.elemArray.length, this.options.carouselSlider && (this.options.carouselWidth += 20, this.options.width -= 20, this.options.height = Math.round(this.options.width * this.options.originalHeight / this.options.originalWidth),
							this.options.boxWidth = this.options.width, this.options.slideshadow && (this.options.boxWidth += 8)), "left" == this.options.carouselposition ? (this.options.boxLeft = this.options.padding + this.options.carouselWidth + this.options.carouselmargin, this.options.carouselLeft = this.options.padding) : this.options.carouselLeft = this.options.padding + this.options.width + this.options.carouselmargin, this.options.carouselTop = this.options.padding), b(".html5gallery-car-mask-" + this.id).css({
						width: this.options.thumbwidth + "px"
					}), b(".html5gallery-tn-" +
						this.id).css({
						width: this.options.thumbwidth + "px"
					}), b(".html5gallery-tn-selected-" + this.id).css({
						width: this.options.thumbwidth + "px"
					}), b(".html5gallery-car-slider-bar-" + this.id).css({
						left: String(this.options.thumbwidth + 6) + "px"
					}), this.options.isMobile || this.isTouch && this.options.splitvsliderontouch ? (b(".html5gallery-car-left-" + this.id).css({
						left: String(this.options.thumbwidth + 5) + "px"
					}), b(".html5gallery-car-right-" + this.id).css({
						left: String(this.options.thumbwidth + 5) + "px"
					})) : b(".html5gallery-car-slider-" +
						this.id).css({
						left: String(this.options.thumbwidth + 5) + "px"
					}), a = this.options.thumbwidth - 3 * this.options.thumbmargin, this.options.thumbshowimage && (a -= this.options.thumbimagewidth + 2 * this.options.thumbimageborder), this.options.thumbshowtitle && b("head").append("<style type='text/css' data-creator='html5gallery'>.html5gallery-tn-title-" + this.id + " {width: " + a + "px;}</style>"));
					b(".html5gallery-container-" + this.id).css({
						width: this.options.totalWidth + "px",
						height: this.options.totalHeight + "px"
					});
					b(".html5gallery-box-" +
						this.id).css({
						width: this.options.boxWidth + "px",
						height: this.options.boxHeight + "px"
					});
					a = this.elemArray[this.curElem][9];
					if (1 == a || this.showingPoster) {
						var c = this.showingPoster ? this.elemArray[this.curElem][23] : this.elemArray[this.curElem][10],
							d = this.showingPoster ? this.elemArray[this.curElem][24] : this.elemArray[this.curElem][11],
							e;
						this.isFullscreen ? (a = this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : this.fullscreenWidth, e = this.elemArray[this.curElem][18] ?
							Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) : this.fullscreenHeight, e = Math.min(a / c, e / d), e = 1 < e ? 1 : e) : e = "fill" == this.options.resizemode ? Math.max(this.options.width / c, this.options.height / d) : Math.min(this.options.width / c, this.options.height / d);
						a = Math.round(e * c);
						e = Math.round(e * d);
						var d = this.isFullscreen ? a : this.options.width,
							c = this.isFullscreen ? e : this.options.height,
							f = Math.round(d / 2 - a / 2),
							j = Math.round(c / 2 - e / 2);
						this.isFullscreen && this.adjustFullscreen(d, c, !0);
						b(".html5gallery-elem-" + this.id).css({
							width: d +
								"px",
							height: c + "px"
						});
						b(".html5gallery-elem-img-" + this.id).css({
							width: d + "px",
							height: c + "px"
						});
						b(".html5gallery-elem-image-" + this.id).css({
							width: a + "px",
							height: e + "px",
							top: j + "px",
							left: f + "px"
						})
					} else if (12 == a || 5 == a || 6 == a || 7 == a || 8 == a || 9 == a || 10 == a || 11 == a) d = this.elemArray[this.curElem][10], c = this.elemArray[this.curElem][11], this.isFullscreen ? (a = this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : this.fullscreenWidth, e = this.elemArray[this.curElem][18] ? Math.min(this.elemArray[this.curElem][18],
							this.fullscreenHeight) : this.fullscreenHeight, e = Math.min(a / d, e / c), e = 1 < e ? 1 : e, d = Math.round(e * d), c = Math.round(e * c), this.adjustFullscreen(d, c, !0)) : (d = this.options.width, c = this.options.height), b(".html5gallery-elem-" + this.id).css({
							width: d + "px",
							height: c + "px"
						}), b(".html5gallery-elem-video-" + this.id).css({
							width: d + "px",
							height: c + "px"
						}), b(".html5gallery-elem-video-container-" + this.id).css({
							width: "100%",
							height: "100%"
						}), b(".html5gallery-elem-video-container-" + this.id).find("video").css({
							width: "100%",
							height: "100%"
						}),
						b("#html5gallery-elem-video-" + this.id).css({
							width: d + "px",
							height: c + "px"
						}), b("#html5gallery-elem-video-" + this.id).attr("width", d), b("#html5gallery-elem-video-" + this.id).attr("height", c), b(".html5gallery-elem-video-" + this.id).find("iframe").attr("width", d), b(".html5gallery-elem-video-" + this.id).find("iframe").attr("height", c), b("#html5gallery-elem-video-" + this.id).find("iframe").attr("width", d), b("#html5gallery-elem-video-" + this.id).find("iframe").attr("height", c), b(".html5gallery-elem-iframe-" + this.id).css({
							width: d +
								"px",
							height: c + "px"
						}), b(".html5gallery-elem-iframe-" + this.id).find("iframe").attr("width", d), b(".html5gallery-elem-iframe-" + this.id).find("iframe").attr("height", c);
					e = d = 0;
					"bottom" == this.options.headerpos && (d = this.options.titleoverlay ? this.options.height - this.options.titleheight : this.options.height, e = this.options.titleoverlay ? this.options.height : this.options.height + this.options.titleheight);
					a = this.options.slideshadow ? this.options.boxWidth - 8 : this.options.boxWidth;
					b(".html5gallery-title-" + this.id).css({
						width: a +
							"px"
					});
					this.options.titleoverlay || b(".html5gallery-title-" + this.id).css({
						top: d + "px"
					});
					b(".html5gallery-viral-" + this.id).css({
						top: e + "px"
					});
					b(".html5gallery-timer-" + this.id).css({
						top: String(this.options.elemTop + this.options.height - 2) + "px"
					});
					this.options.showcarousel && (b(".html5gallery-car-" + this.id).css({
							width: this.options.carouselWidth + "px",
							height: this.options.carouselHeight + "px",
							top: this.options.carouselTop + "px",
							left: this.options.carouselLeft + "px",
							top: this.options.carouselTop + "px"
						}), b(".html5gallery-car-list-" +
							this.id).css({
							top: this.options.carTop + "px",
							height: String(this.options.carAreaLength) + "px",
							width: this.options.carouselWidth + "px"
						}), this.options.thumbShowNum = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)), 1 > this.options.thumbShowNum && (this.options.thumbShowNum = 1), this.options.thumbMaskHeight = this.options.thumbShowNum * this.options.thumbheight + (this.options.thumbShowNum - 1) * this.options.thumbgap, this.options.thumbTotalHeight = this.elemArray.length * this.options.thumbheight +
						(this.elemArray.length - 1) * this.options.thumbgap, this.options.carouselSlider && (this.options.carouselSliderMin = 0, this.options.carouselSliderMax = this.options.thumbMaskHeight - 54, b(".html5gallery-car-slider-bar-" + this.id).css({
							height: this.options.thumbMaskHeight + "px"
						}), b(".html5gallery-car-slider-bar-middle-" + this.id).css({
							height: String(this.options.thumbMaskHeight - 32) + "px"
						}), (this.options.isMobile || this.isTouch && this.options.splitvsliderontouch) && b(".html5gallery-car-right-" + this.id).css({
							top: String(this.options.thumbMaskHeight -
								35) + "px"
						}), b(".html5gallery-car-slider-bar-" + this.id).css({
							display: "block"
						}), b(".html5gallery-car-left-" + this.id).css({
							display: "block"
						}), b(".html5gallery-car-right-" + this.id).css({
							display: "block"
						}), b(".html5gallery-car-slider-" + this.id).css({
							display: "block"
						})), a = 0, this.options.carouselNavButton && (a = Math.round(this.options.carAreaLength / 2 - this.options.thumbMaskHeight / 2)), b(".html5gallery-car-mask-" + this.id).css({
							top: a + "px",
							height: this.options.thumbMaskHeight + "px"
						}), this.carouselHighlight(this.curElem))
				}
			},
			createStyleVertical: function() {
				this.options.originalcarouselposition = this.options.carouselposition;
				this.options.originalthumbwidth = this.options.thumbwidth;
				this.options.thumbimagewidth = this.options.thumbshowtitle ? this.options.thumbheight - 2 * this.options.thumbimageborder - 4 : this.options.thumbwidth - 2 * this.options.thumbimageborder - 4;
				this.options.thumbimageheight = this.options.thumbheight - 2 * this.options.thumbimageborder - 4;
				this.options.showtitle || (this.options.titleheight = 0);
				if (!this.options.showsocialmedia ||
					!this.options.showfacebooklike && !this.options.showtwitter && !this.options.showgoogleplus) this.options.socialheight = 0;
				this.options.headerHeight = this.options.titleoverlay ? this.options.socialheight : this.options.titleheight + this.options.socialheight;
				this.options.boxWidth = this.options.width;
				this.options.boxHeight = this.options.height + this.options.headerHeight;
				this.options.boxLeft = this.options.padding;
				this.options.boxTop = this.options.padding;
				this.options.slideshadow && (this.options.boxWidth += 8);
				this.options.showcarousel ?
					"bottom" == this.options.carouselposition ? (this.options.carouselWidth = this.options.width, this.options.carouselHeight = this.options.carouselheight, this.options.carouselLeft = this.options.padding, this.options.carouselTop = this.options.height + this.options.headerHeight + 2 * this.options.padding, this.options.carAreaLength = this.options.carouselHeight, this.options.carouselSlider = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)) < this.elemArray.length, this.options.thumbwidth =
						this.options.width, this.options.carouselSlider && (this.options.thumbwidth -= 20)) : (this.options.carouselWidth = this.options.thumbwidth, this.options.carouselHeight = this.options.height + this.options.headerHeight, this.options.carTop = 0, this.options.carBottom = 0, this.options.carAreaLength = this.options.carouselHeight - this.options.carTop - this.options.carBottom, this.options.carouselSlider = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)) < this.elemArray.length, this.options.carouselSlider &&
						(this.options.carouselWidth += 20), "left" == this.options.carouselposition ? (this.options.boxLeft = this.options.padding + this.options.carouselWidth + this.options.carouselmargin, this.options.carouselLeft = this.options.padding) : this.options.carouselLeft = this.options.padding + this.options.width + this.options.carouselmargin, this.options.carouselTop = this.options.padding) : (this.options.carouselWidth = 0, this.options.carouselHeight = 0, this.options.carouselLeft = 0, this.options.carouselTop = 0, this.options.carouselmargin =
						0);
				"bottom" == this.options.carouselposition ? (this.options.totalWidth = this.options.width + 2 * this.options.padding, this.options.totalHeight = this.options.height + this.options.headerHeight + 2 * this.options.padding + this.options.carouselmargin + this.options.carouselHeight) : (this.options.totalWidth = this.options.width + this.options.carouselWidth + this.options.carouselmargin + 2 * this.options.padding, this.options.totalHeight = this.options.height + this.options.headerHeight + 2 * this.options.padding);
				this.options.containerWidth =
					this.options.totalWidth;
				this.options.containerHeight = this.options.totalHeight;
				this.options.responsive ? (this.options.originalWidth = this.options.width, this.options.originalHeight = this.options.height, this.container.css({
					"max-width": "100%"
				})) : this.container.css({
					width: this.options.containerWidth,
					height: this.options.containerHeight
				});
				var a = 0,
					c = 0;
				this.options.elemTop = 0;
				"top" == this.options.headerpos ? (c = 0, a = this.options.socialheight, this.options.elemTop = this.options.headerHeight) : "bottom" == this.options.headerpos ?
					(this.options.elemTop = 0, a = this.options.titleoverlay ? this.options.height - this.options.titleheight : this.options.height, c = this.options.titleoverlay ? this.options.height : this.options.height + this.options.titleheight) : "bottomoutside" == this.options.headerpos && (a = this.options.showcarousel ? this.options.height + this.options.carouselHeight : this.options.height);
				var d = " .html5gallery-container-" + this.id + " { display:block; position:absolute; left:0px; top:0px; width:" + this.options.totalWidth + "px; height:" + this.options.totalHeight +
					"px; " + (!this.options.bgimage ? "" : "background:url('" + this.options.bgimage + "') center top;") + " background-color:" + this.options.bgcolor + ";}";
				this.options.galleryshadow && (d += " .html5gallery-container-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}");
				var d = d + (" .html5gallery-box-" + this.id + " {display:block; position:absolute; text-align:center; left:" + this.options.boxLeft + "px; top:" + this.options.boxTop + "px; width:" + this.options.boxWidth +
						"px; height:" + this.options.boxHeight + "px; }"),
					e = Math.round(this.options.socialheight / 2 - 12),
					d = d + (" .html5gallery-title-text-" + this.id + " " + this.options.titlecss + " .html5gallery-title-text-" + this.id + " " + this.options.titlecsslink + " .html5gallery-error-" + this.id + " " + this.options.errorcss),
					d = d + (" .html5gallery-description-text-" + this.id + " " + this.options.descriptioncss + " .html5gallery-description-text-" + this.id + " " + this.options.descriptioncsslink),
					d = d + (" .html5gallery-fullscreen-title-" + this.id + "" + this.options.lightboxtitlecss +
						" .html5gallery-fullscreen-title-" + this.id + "" + this.options.lightboxtitlelinkcss),
					d = d + (" .html5gallery-fullscreen-description-" + this.id + "" + this.options.lightboxdescriptioncss + " .html5gallery-fullscreen-description-" + this.id + "" + this.options.lightboxdescriptionlinkcss),
					d = d + (" .html5gallery-viral-" + this.id + " {display:block; overflow:hidden; position:absolute; text-align:left; top:" + c + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.socialheight + "px; padding-top:" + e + "px;}"),
					c = this.options.slideshadow ?
					this.options.boxWidth - 8 : this.options.boxWidth,
					d = d + (" .html5gallery-title-" + this.id + " {display:" + (this.options.titleoverlay && this.options.titleautohide ? "none" : "block") + "; overflow:hidden; position:absolute; left:0px; width:" + c + "px; "),
					d = this.options.titleoverlay ? "top" == this.options.headerpos ? d + "top:0px; height:auto; }" : d + "bottom:0px; height:auto; }" : d + ("top:" + a + "px; height:" + this.options.titleheight + "px; }"),
					d = d + (" .html5gallery-timer-" + this.id + " {display:block; position:absolute; top:" + String(this.options.elemTop +
						this.options.height - 2) + "px; left:0px; width:0px; height:2px; background-color:#ccc; filter:alpha(opacity=60); opacity:0.6; }"),
					d = d + (" .html5gallery-elem-" + this.id + " {display:block; overflow:hidden; position:absolute; top:" + this.options.elemTop + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.height + "px;}");
				this.options.isIE7 || this.options.isIE6 ? (d += " .html5gallery-loading-" + this.id + " {display:none; }", d += " .html5gallery-loading-center-" + this.id + " {display:none; }") : (d += " .html5gallery-loading-" +
					this.id + " {display:block; position:absolute; top:4px; right:4px; width:100%; height:100%; background:url('" + this.options.skinfolder + "loading.gif') no-repeat top right;}", d += " .html5gallery-loading-center-" + this.id + " {display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background:url('" + this.options.skinfolder + "loading_center.gif') no-repeat center center;}");
				0 < this.options.borderradius && (d += " .html5gallery-elem-" + this.id + " { overflow:hidden; border-radius:" + this.options.borderradius +
					"px; -moz-border-radius:" + this.options.borderradius + "px; -webkit-border-radius:" + this.options.borderradius + "px;}");
				this.options.slideshadow && (d += " .html5gallery-title-" + this.id + " { padding:4px;}", d += " .html5gallery-timer-" + this.id + " { margin:4px;}", d += " .html5gallery-elem-" + this.id + " { overflow:hidden; padding:4px; -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}");
				this.options.showcarousel ? (d += " .html5gallery-car-" + this.id + " { position:absolute; display:block; overflow:hidden; width:" +
					this.options.carouselWidth + "px; height:" + this.options.carouselHeight + "px; left:" + this.options.carouselLeft + "px; top:" + this.options.carouselTop + "px; }", d += " .html5gallery-car-list-" + this.id + " { position:absolute; display:block; overflow:hidden; top:" + this.options.carTop + "px; height:" + String(this.options.carAreaLength) + "px; left:0px; width:" + this.options.carouselWidth + "px; }", d += ".html5gallery-thumbs-" + this.id + " {margin-top:0px; height:" + String(this.elemArray.length * (this.options.thumbheight + this.options.thumbgap)) +
					"px;}", this.options.thumbShowNum = Math.floor(this.options.carAreaLength / (this.options.thumbheight + this.options.thumbgap)), 1 > this.options.thumbShowNum && (this.options.thumbShowNum = 1), this.options.thumbMaskHeight = this.options.thumbShowNum * this.options.thumbheight + (this.options.thumbShowNum - 1) * this.options.thumbgap, this.options.thumbTotalHeight = this.elemArray.length * this.options.thumbheight + (this.elemArray.length - 1) * this.options.thumbgap, this.options.carouselSliderMin = 0, this.options.carouselSliderMax =
					this.options.thumbMaskHeight - 54, d += " .html5gallery-car-slider-bar-" + this.id + " { position:absolute; display:" + (this.options.carouselSlider ? "block" : "none") + "; overflow:hidden; top:0px; height:" + this.options.thumbMaskHeight + "px; left:" + String(this.options.thumbwidth + 6) + "px; width:14px;}", d += " .html5gallery-car-slider-bar-top-" + this.id + " { position:absolute; display:block; top:0px; left:0px; width:14px; height:16px; background:url('" + this.options.skinfolder + "bartop.png')}", d += " .html5gallery-car-slider-bar-middle-" +
					this.id + " { position:absolute; display:block; top:16px; left:0px; width:14px; height:" + String(this.options.thumbMaskHeight - 32) + "px; background:url('" + this.options.skinfolder + "bar.png')}", d += " .html5gallery-car-slider-bar-bottom-" + this.id + " { position:absolute; display:block; bottom:0px; left:0px; width:14px; height:16px; background:url('" + this.options.skinfolder + "barbottom.png')}", d = this.options.isMobile || this.isTouch && this.options.splitvsliderontouch ? d + (" .html5gallery-car-left-" + this.id + " { position:absolute; display:" +
						(this.options.carouselSlider ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:16px; height:35px; left:" + String(this.options.thumbwidth + 5) + "px; top:0px; background:url('" + this.options.skinfolder + "slidertop.png')}  .html5gallery-car-right-" + this.id + " { position:absolute; display:" + (this.options.carouselSlider ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:16px; height:35px; left:" + String(this.options.thumbwidth + 5) + "px; top:" + String(this.options.thumbMaskHeight - 35) + "px; background:url('" +
						this.options.skinfolder + "sliderbottom.png')} ") : d + (" .html5gallery-car-slider-" + this.id + " { position:absolute; display:" + (this.options.carouselSlider ? "block" : "none") + "; overflow:hidden; cursor:pointer; top:0px; height:54px; left:" + String(this.options.thumbwidth + 5) + "px; width:16px; background:url('" + this.options.skinfolder + "slider.png');}"), a = 0, this.options.carouselNavButton && (a = Math.round(this.options.carAreaLength / 2 - this.options.thumbMaskHeight / 2)), d += " .html5gallery-car-mask-" + this.id + " { position:absolute; display:block; overflow:hidden; top:" +
					a + "px; height:" + this.options.thumbMaskHeight + "px; left:0px; width:" + this.options.thumbwidth + "px;} ", a = this.options.thumbheight, this.options.isIE || (a = this.options.thumbheight - 2), d += " .html5gallery-tn-" + this.id + " { display:block; margin-bottom:" + this.options.thumbgap + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + a + "px;overflow:hidden;", this.options.carouselbgtransparent ? d += "background-color:transparent;" : (this.options.isIE || (d += "border-top:1px solid " + this.options.carouseltopborder +
							"; border-bottom:1px solid " + this.options.carouselbottomborder + ";"), d += "background-color: " + this.options.carouselbgcolorend + ";"), this.options.carouselbgimage && (d += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), d = d + "}" + (" .html5gallery-tn-selected-" + this.id + " { display:block; margin-bottom:" + this.options.thumbgap + "px;text-align:center; cursor:pointer; width:" +
						this.options.thumbwidth + "px;height:" + a + "px;overflow:hidden;"), this.options.carouselbgtransparent ? d += "background-color:transparent;" : (this.options.isIE || (d += "border-top:1px solid " + this.options.carouselhighlighttopborder + "; border-bottom:1px solid " + this.options.carouselhighlightbottomborder + ";"), d += "background-color: " + this.options.carouselhighlightbgcolorend + ";"), this.options.carouselbgimage && (d += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), d += "}", d += " .html5gallery-tn-selected-" + this.id + " .html5gallery-tn-img-" + this.id + " {background-color:" + this.options.thumbimagebordercolor + ";} .html5gallery-tn-" + this.id + " .html5gallery-tn-selected-" + this.id + " ", c = this.options.thumbwidth - 3 * this.options.thumbmargin, this.options.thumbshowimage ? (c -= this.options.thumbimagewidth + 2 * this.options.thumbimageborder, a = this.options.thumbshowtitle ? this.options.thumbmargin : this.options.thumbwidth / 2 - (this.options.thumbimagewidth + 2 * this.options.thumbimageborder) / 2, e = Math.round((this.options.thumbheight - 2) / 2 - (this.options.thumbimageheight + 2 * this.options.thumbimageborder) / 2), d += " .html5gallery-tn-img-" +
						this.id + " {display:block; overflow:hidden; float:left; margin-top:" + e + "px; margin-left:" + a + "px; width:" + String(this.options.thumbimagewidth + 2 * this.options.thumbimageborder) + "px;height:" + String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) + "px;}") : d += " .html5gallery-tn-img-" + this.id + " {;}", this.options.thumbshowtitle ? (d += " .html5gallery-tn-title-" + this.id + " {display:block; overflow:hidden; margin-top:0px; margin-left:" + this.options.thumbmargin + "px; width:" +
						c + "px;height:" + String(this.options.thumbheight - 2) + "px;" + (this.options.thumbshowdescription ? "" : "line-height:" + String(this.options.thumbheight - 2) + "px;") + "}", d += " .html5gallery-tn-title-" + this.id + this.options.thumbtitlecss, d += " .html5gallery-tn-description-" + this.id + this.options.thumbdescriptioncss) : (d += " .html5gallery-tn-title-" + this.id + " {;}", d += " .html5gallery-tn-description-" + this.id + " {;}"), this.carouselHighlight = function(a) {
						b("#html5gallery-tn-" + this.id + "-" + a, this.$gallery).removeClass("html5gallery-tn-" +
							this.id).addClass("html5gallery-tn-selected-" + this.id);
						if (!(this.options.thumbShowNum >= this.elemArray.length)) {
							a = Math.floor(a / this.options.thumbShowNum) * this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap);
							a >= this.options.thumbTotalHeight - this.options.thumbMaskHeight && (a = this.options.thumbTotalHeight - this.options.thumbMaskHeight);
							var c = a / (this.elemArray.length * (this.options.thumbheight + this.options.thumbgap) - this.options.thumbMaskHeight),
								c = c * (this.options.carouselSliderMax - this.options.carouselSliderMin);
							b(".html5gallery-car-slider-" + this.id, this.$gallery).stop(!0).animate({
								top: c
							}, 300);
							b(".html5gallery-thumbs-" + this.id, this.$gallery).stop(!0).animate({
								marginTop: -1 * a
							}, 300);
							this.updateCarouseButtons(-a)
						}
					}, this.carouselBarClicked = function(a) {
						var c = b(".html5gallery-thumbs-" + this.id, this.$gallery);
						a.pageY > b(".html5gallery-car-slider-" + this.id, this.$gallery).offset().top ? (a = -1 * parseInt(c.css("margin-top")) + this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap), a >= this.options.thumbTotalHeight -
							this.options.thumbMaskHeight && (a = this.options.thumbTotalHeight - this.options.thumbMaskHeight)) : (a = -1 * parseInt(c.css("margin-top")) - this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap), 0 > a && (a = 0));
						c.stop(!0).animate({
							marginTop: -a
						}, 500);
						this.updateCarouseButtons(-a);
						a = a * (this.options.carouselSliderMax - this.options.carouselSliderMin) / (this.elemArray.length * (this.options.thumbheight + this.options.thumbgap) - this.options.thumbMaskHeight);
						a < this.options.carouselSliderMin && (a = this.options.carouselSliderMin);
						a > this.options.carouselSliderMax && (a = this.options.carouselSliderMax);
						b(".html5gallery-car-slider-" + this.id, this.$gallery).stop(!0).animate({
							top: a
						}, 500)
					}, this.carouselSliderDrag = function(a, c) {
						var d = c.offsetY - b(".html5gallery-car-slider-bar-" + this.id, this.$gallery).offset().top;
						d < this.options.carouselSliderMin && (d = this.options.carouselSliderMin);
						d > this.options.carouselSliderMax && (d = this.options.carouselSliderMax);
						b(".html5gallery-car-slider-" + this.id, this.$gallery).css({
							top: d
						});
						var e = this.elemArray.length *
							(this.options.thumbheight + this.options.thumbgap) - this.options.thumbMaskHeight,
							e = e * d / (this.options.carouselSliderMax - this.options.carouselSliderMin),
							e = Math.round(e / (this.options.thumbheight + this.options.thumbgap)),
							e = -1 * e * (this.options.thumbheight + this.options.thumbgap);
						b(".html5gallery-thumbs-" + this.id, this.$gallery).stop(!0).animate({
							marginTop: e
						}, 300)
					}, this.carouselPrev = function() {
						var a = b(".html5gallery-thumbs-" + this.id, this.$gallery);
						if (0 != parseInt(a.css("margin-top"))) {
							var c = -1 * parseInt(a.css("margin-top")) -
								this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap);
							0 > c && (c = 0);
							a.animate({
								marginTop: -c
							}, 500, this.options.carouseleasing);
							this.updateCarouseButtons(-c)
						}
					}, this.carouselNext = function() {
						var a = b(".html5gallery-thumbs-" + this.id, this.$gallery);
						if (parseInt(a.css("margin-top")) != -(this.options.thumbTotalHeight - this.options.thumbMaskHeight)) {
							var c = -1 * parseInt(a.css("margin-top")) + this.options.thumbShowNum * (this.options.thumbheight + this.options.thumbgap);
							c >= this.options.thumbTotalHeight -
								this.options.thumbMaskHeight && (c = this.options.thumbTotalHeight - this.options.thumbMaskHeight);
							a.animate({
								marginTop: -c
							}, 500, this.options.carouseleasing);
							this.updateCarouseButtons(-c)
						}
					}, this.updateCarouseButtons = function(a) {
						var c = b(".html5gallery-car-left-" + this.id, this.$gallery),
							d = b(".html5gallery-car-right-" + this.id, this.$gallery),
							e = -1 * (this.options.thumbTotalHeight - this.options.thumbMaskHeight);
						0 == a ? (c.css({
							"background-position": "-" + String(2 * this.options.carouselarrowwidth) + "px 0px",
							cursor: ""
						}), c.data("disabled",
							!0)) : c.data("disabled") && (c.css({
							"background-position": "0px 0px",
							cursor: "pointer"
						}), c.data("disabled", !1));
						a == e ? (d.css({
							"background-position": "-" + String(2 * this.options.carouselarrowwidth) + "px 0px",
							cursor: ""
						}), d.data("disabled", !0)) : d.data("disabled") && (d.css({
							"background-position": "0px 0px",
							cursor: "pointer"
						}), d.data("disabled", !1))
					}) : d += " .html5gallery-car-" + this.id + " { display:none; }";
				d += ".html5gallery-container-" + this.id + " div {box-sizing:content-box;}";
				b("head").append("<style type='text/css' data-creator='html5gallery'>" +
					d + "</style>")
			},
			resizeImageToolbox: function() {
				if ("center" != this.options.imagetoolboxstyle) {
					var a = Math.round(("bottom" == this.options.headerpos || "bottomoutside" == this.options.headerpos ? 0 : this.options.headerHeight) + this.options.height / 2 - 24),
						c = a + Math.round(this.options.height / 2) - 32,
						d = this.options.boxWidth - 48,
						e = this.options.showfullscreenbutton ? d - 48 : d;
					b(".html5gallery-play-" + this.id).css({
						top: c + "px",
						left: e + "px"
					});
					b(".html5gallery-pause-" + this.id).css({
						top: c + "px",
						left: e + "px"
					});
					b(".html5gallery-left-" + this.id).css({
						top: a +
							"px"
					});
					b(".html5gallery-right-" + this.id).css({
						top: a + "px",
						left: d + "px"
					});
					b(".html5gallery-lightbox-" + this.id).css({
						top: c + "px",
						left: d + "px"
					})
				}
			},
			createImageToolbox: function() {
				1 >= this.elemArray.length && (this.options.showplaybutton = this.options.showprevbutton = this.options.shownextbutton = !1);
				if ("never" != this.options.showimagetoolbox) {
					var a;
					if ("center" == this.options.imagetoolboxstyle) a = " .html5gallery-toolbox-" + this.id + " {display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; overflow:hidden; position:relative; margin:0px auto; text-align:center; height:40px;}",
						a += " .html5gallery-toolbox-bg-" + this.id + " {display:block; left:0px; top:0px; width:100%; height:100%; position:absolute; background-color:#222222; }", a += " .html5gallery-toolbox-buttons-" + this.id + " {display:block; margin:0px auto; height:100%;}", a += " .html5gallery-play-" + this.id + " { position:relative; float:left; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" +
						Math.round(4) + "px; background:url('" + this.options.skinfolder + "play.png') no-repeat top left; } ", a += " .html5gallery-pause-" + this.id + " { position:relative; float:left; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "pause.png') no-repeat top left; } ", a += " .html5gallery-left-" + this.id + " { position:relative; float:left; display:" +
						("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "prev.png') no-repeat top left; } ", a += " .html5gallery-right-" + this.id + " { position:relative; float:left; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" +
						Math.round(4) + "px; background:url('" + this.options.skinfolder + "next.png') no-repeat top left; } ", a += " .html5gallery-lightbox-" + this.id + " {position:relative; float:left; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; overflow:hidden; width:32px; height:32px; margin-left:2px; margin-right:2px; margin-top:" + Math.round(4) + "px; background:url('" + this.options.skinfolder + "lightbox.png') no-repeat top left; } ";
					else {
						var c = Math.round(("bottom" == this.options.headerpos ? 0 :
								this.options.headerHeight) + this.options.height / 2 - 24),
							d = c + Math.round(this.options.height / 2) - 32,
							e = this.options.width - 54,
							f = this.options.showfullscreenbutton ? e - 48 : e;
						a = " .html5gallery-toolbox-" + this.id + " {display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + ";}";
						a += " .html5gallery-toolbox-bg-" + this.id + " {display:none;}";
						a += " .html5gallery-toolbox-buttons-" + this.id + " {display:block;}";
						a += " .html5gallery-play-" + this.id + " { position:absolute; display:" + ("show" == this.options.imagetoolboxmode ? "block" :
							"none") + "; cursor:pointer; top:" + d + "px; left:" + f + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_play.png') no-repeat top left;} ";
						a += " .html5gallery-pause-" + this.id + " { position:absolute; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; top:" + d + "px; left:" + f + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_pause.png') no-repeat top left;} ";
						a += " .html5gallery-left-" + this.id + " { position:absolute; display:" +
							("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; top:" + c + "px; left:0px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_prev.png') no-repeat center center;} ";
						a += " .html5gallery-right-" + this.id + " { position:absolute; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; top:" + c + "px; left:" + e + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_next.png')  no-repeat center center;} ";
						a += " .html5gallery-lightbox-" +
							this.id + " {position:absolute; display:" + ("show" == this.options.imagetoolboxmode ? "block" : "none") + "; cursor:pointer; top:" + d + "px; left:" + e + "px; width:48px; height:48px; background:url('" + this.options.skinfolder + "side_lightbox.png') no-repeat top left;} "
					}
					b(".html5gallery-play-" + this.id, this.$gallery).hover(function() {
						b(this).css({
							"background-position": "right top"
						})
					}, function() {
						b(this).css({
							"background-position": "left top"
						})
					});
					b(".html5gallery-pause-" + this.id, this.$gallery).hover(function() {
							b(this).css({
								"background-position": "right top"
							})
						},
						function() {
							b(this).css({
								"background-position": "left top"
							})
						});
					b(".html5gallery-left-" + this.id, this.$gallery).hover(function() {
						b(this).css({
							"background-position": "right top"
						})
					}, function() {
						b(this).css({
							"background-position": "left top"
						})
					});
					b(".html5gallery-right-" + this.id, this.$gallery).hover(function() {
						b(this).css({
							"background-position": "right top"
						})
					}, function() {
						b(this).css({
							"background-position": "left top"
						})
					});
					b(".html5gallery-lightbox-" + this.id, this.$gallery).hover(function() {
							b(this).css({
								"background-position": "right top"
							})
						},
						function() {
							b(this).css({
								"background-position": "left top"
							})
						});
					b("head").append("<style type='text/css' data-creator='html5gallery'>" + a + "</style>")
				}
				this.showimagetoolbox = function(a, c) {
					if (this.options.showplaybutton || this.options.showprevbutton || this.options.shownextbutton || this.options.showfullscreenbutton) {
						var d = this;
						clearTimeout(d.hideToolboxTimeout);
						d.hideToolboxTimeout = setTimeout(function() {
							d.hideimagetoolbox()
						}, 3E3);
						if ("center" == this.options.imagetoolboxstyle) {
							var e = Math.round(("bottom" == this.options.headerpos ?
								0 : this.options.headerHeight) + this.options.height / 2);
							if (6 == a || 7 == a || 8 == a || 9 == a || 10 == a || 11 == a) e += 45;
							b(".html5gallery-toolbox-" + this.id, this.$gallery).css({
								top: e
							});
							e = 0;
							this.options.showplaybutton && (1 == a || this.options.showplaypausefullscreenforall && (!this.options.hideplaypausefullscreenwhenvideoisplaying || !this.isVideoPlaying)) ? (e += 36, this.isPaused ? (b(".html5gallery-play-" + this.id, this.$gallery).show(), b(".html5gallery-pause-" + this.id, this.$gallery).hide()) : (b(".html5gallery-play-" + this.id, this.$gallery).hide(),
								b(".html5gallery-pause-" + this.id, this.$gallery).show())) : (b(".html5gallery-play-" + this.id, this.$gallery).hide(), b(".html5gallery-pause-" + this.id, this.$gallery).hide());
							this.options.showprevbutton ? (e += 36, b(".html5gallery-left-" + this.id, this.$gallery).show()) : b(".html5gallery-left-" + this.id, this.$gallery).hide();
							this.options.shownextbutton ? (e += 36, b(".html5gallery-right-" + this.id, this.$gallery).show()) : b(".html5gallery-right-" + this.id, this.$gallery).hide();
							this.options.showfullscreenbutton && (1 == a || this.options.showplaypausefullscreenforall &&
								(!this.options.hideplaypausefullscreenwhenvideoisplaying || !this.isVideoPlaying)) ? (e += 36, b(".html5gallery-lightbox-" + this.id, this.$gallery).show()) : b(".html5gallery-lightbox-" + this.id, this.$gallery).hide();
							b(".html5gallery-toolbox-" + this.id, this.$gallery).css({
								width: e + 16
							});
							b(".html5gallery-toolbox-buttons-" + this.id, this.$gallery).css({
								width: e
							})
						} else this.options.showplaybutton && (1 == a || this.options.showplaypausefullscreenforall && (!this.options.hideplaypausefullscreenwhenvideoisplaying || !this.isVideoPlaying)) ?
							this.isPaused ? (b(".html5gallery-play-" + this.id, this.$gallery).show(), b(".html5gallery-pause-" + this.id, this.$gallery).hide()) : (b(".html5gallery-play-" + this.id, this.$gallery).hide(), b(".html5gallery-pause-" + this.id, this.$gallery).show()) : (b(".html5gallery-play-" + this.id, this.$gallery).hide(), b(".html5gallery-pause-" + this.id, this.$gallery).hide()), this.options.showprevbutton ? b(".html5gallery-left-" + this.id, this.$gallery).show() : b(".html5gallery-left-" + this.id, this.$gallery).hide(), this.options.shownextbutton ?
							b(".html5gallery-right-" + this.id, this.$gallery).show() : b(".html5gallery-right-" + this.id, this.$gallery).hide(), this.options.showfullscreenbutton && (1 == a || this.options.showplaypausefullscreenforall && (!this.options.hideplaypausefullscreenwhenvideoisplaying || !this.isVideoPlaying)) ? b(".html5gallery-lightbox-" + this.id, this.$gallery).show() : b(".html5gallery-lightbox-" + this.id, this.$gallery).hide();
						this.options.isIE678 || c ? b(".html5gallery-toolbox-" + this.id, this.$gallery).show() : b(".html5gallery-toolbox-" +
							this.id, this.$gallery).fadeIn()
					}
				};
				this.hideimagetoolbox = function() {
					"show" != this.options.imagetoolboxmode && (clearTimeout(this.hideToolboxTimeout), this.options.isIE678 ? b(".html5gallery-toolbox-" + this.id, this.$gallery).hide() : b(".html5gallery-toolbox-" + this.id, this.$gallery).fadeOut())
				}
			},
			resizeStyleDefault: function() {
				if (this.container.parent() && this.container.parent().width()) {
					this.options.containerWidth = this.container.parent().width();
					this.options.totalWidth = this.options.containerWidth;
					this.options.width =
						this.options.totalWidth - 2 * this.options.padding;
					if (this.options.titlesmallscreen) {
						var a = b(window).width();
						this.options.titleheight = a < this.options.titlesmallscreenwidth ? this.options.titleheightsmallscreen : this.options.titleheightlargescreen;
						this.options.headerHeight = this.options.titleoverlay ? this.options.socialheight : this.options.titleheight + this.options.socialheight
					}
					this.options.showcarousel && (this.options.carouselHeight = this.options.thumbheight + 2 * this.options.thumbmargin, this.options.carouselmultirows ?
						("samecolumn" == this.options.thumbresponsive ? (this.options.carouselcolumn = this.options.thumbcolumns, this.options.thumbcolumnsresponsive && (a = b(window).width(), a < this.options.thumbsmallsize ? this.options.carouselcolumn = this.options.thumbsmallcolumns : a < this.options.thumbmediumsize && (this.options.carouselcolumn = this.options.thumbmediumcolumns)), this.options.thumbwidth = Math.min((this.options.width - this.options.thumbgap * (this.options.carouselcolumn - 1)) / this.options.carouselcolumn), this.options.thumbheight =
							this.options.thumbwidth * this.options.thumboriginalheight / this.options.thumboriginalwidth, this.options.thumbimagewidth = this.options.thumbwidth - 2 * this.options.thumbimageborder, this.options.thumbimageheight = this.options.thumbheight - 2 * this.options.thumbimageborder, this.options.thumbshowtitle && (this.options.thumbheight += this.options.thumbtitleheight)) : (this.options.thumbcolumnsresponsive && (a = b(window).width(), a < this.options.thumbsmallsize ? (this.options.thumbwidth = this.options.thumbsmallwidth, this.options.thumbheight =
								this.options.thumbsmallheight, this.options.thumbtitleheight = this.options.thumbsmalltitleheight) : a < this.options.thumbmediumsize ? (this.options.thumbwidth = this.options.thumbmediumwidth, this.options.thumbheight = this.options.thumbmediumheight, this.options.thumbtitleheight = this.options.thumbmediumtitleheight) : (this.options.thumbwidth = this.options.thumboriginalwidth, this.options.thumbheight = this.options.thumboriginalheight, this.options.thumbtitleheight = this.options.thumboriginaltitleheight), this.options.thumbimagewidth =
							this.options.thumbwidth - 2 * this.options.thumbimageborder, this.options.thumbimageheight = this.options.thumbheight - 2 * this.options.thumbimageborder, this.options.thumbshowtitle && (this.options.thumbheight += this.options.thumbtitleheight)), this.options.carouselcolumn = Math.floor(this.options.width / (this.options.thumbwidth + this.options.thumbgap)), 1 > this.options.carouselcolumn && (this.options.carouselcolumn = 1)), this.options.carouselHeight = Math.ceil(this.elemArray.length / this.options.carouselcolumn) * (this.options.thumbheight +
							this.options.thumbrowgap)) : this.options.thumbcolumnsresponsive && (a = b(window).width(), a < this.options.thumbsmallsize ? (this.options.thumbwidth = this.options.thumbsmallwidth, this.options.thumbheight = this.options.thumbsmallheight, this.options.thumbtitleheight = this.options.thumbsmalltitleheight) : a < this.options.thumbmediumsize ? (this.options.thumbwidth = this.options.thumbmediumwidth, this.options.thumbheight = this.options.thumbmediumheight, this.options.thumbtitleheight = this.options.thumbmediumtitleheight) : (this.options.thumbwidth =
							this.options.thumboriginalwidth, this.options.thumbheight = this.options.thumboriginalheight, this.options.thumbtitleheight = this.options.thumboriginaltitleheight), this.options.thumbimagewidth = this.options.thumbwidth - 2 * this.options.thumbimageborder, this.options.thumbimageheight = this.options.thumbheight - 2 * this.options.thumbimageborder, this.options.thumbshowtitle && (this.options.thumbheight += this.options.thumbtitleheight)));
					this.options.responsivefullscreen && 0 < this.container.parent().height() ? (this.options.containerHeight =
						this.container.parent().height(), this.options.totalHeight = this.options.containerHeight, this.options.height = this.options.totalHeight - (this.options.headerHeight + 2 * this.options.padding), 0 < this.options.carouselHeight + this.options.carouselmargin && (this.options.height -= this.options.carouselHeight + this.options.carouselmargin)) : (this.options.height = Math.round(this.options.width * this.options.originalHeight / this.options.originalWidth), this.options.totalHeight = this.options.height + this.options.carouselHeight +
						this.options.carouselmargin + this.options.headerHeight + 2 * this.options.padding, this.options.containerHeight = this.options.totalHeight);
					this.container.css({
						width: this.options.containerWidth,
						height: this.options.containerHeight
					});
					this.options.boxWidth = this.options.width;
					this.options.boxHeight = "bottomoutside" == this.options.headerpos ? this.options.height : this.options.height + this.options.headerHeight;
					this.options.slideshadow && (this.options.boxWidth += 8);
					this.options.showcarousel && (this.options.carouselWidth =
						this.options.width, this.options.carouselLeft = this.options.padding, this.options.carouselTop = "top" == this.options.carouselposition ? this.options.padding : this.options.padding + this.options.boxHeight + this.options.carouselmargin);
					b(".html5gallery-container-" + this.id).css({
						width: this.options.totalWidth + "px",
						height: this.options.totalHeight + "px"
					});
					b(".html5gallery-box-" + this.id).css({
						width: this.options.boxWidth + "px",
						height: this.options.boxHeight + "px"
					});
					a = this.elemArray[this.curElem][9];
					if (1 == a || this.showingPoster) {
						var c =
							this.showingPoster ? this.elemArray[this.curElem][23] : this.elemArray[this.curElem][10],
							d = this.showingPoster ? this.elemArray[this.curElem][24] : this.elemArray[this.curElem][11];
						if (this.isFullscreen) var a = this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : this.fullscreenWidth,
							e = this.elemArray[this.curElem][18] ? Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) : this.fullscreenHeight,
							a = Math.min(a / c, e / d),
							a = 1 < a ? 1 : a;
						else a = "fill" == this.options.resizemode ?
							Math.max(this.options.width / c, this.options.height / d) : Math.min(this.options.width / c, this.options.height / d);
						var f = Math.round(a * c),
							j = Math.round(a * d),
							e = this.isFullscreen ? f : this.options.width,
							a = this.isFullscreen ? j : this.options.height,
							c = Math.round(e / 2 - f / 2),
							d = Math.round(a / 2 - j / 2);
						this.isFullscreen && this.adjustFullscreen(e, a, !0);
						b(".html5gallery-elem-" + this.id).css({
							width: e + "px",
							height: a + "px"
						});
						b(".html5gallery-elem-img-" + this.id).css({
							width: e + "px",
							height: a + "px"
						});
						b(".html5gallery-elem-image-" + this.id).css({
							width: f +
								"px",
							height: j + "px",
							top: d + "px",
							left: c + "px"
						})
					} else if (12 == a || 5 == a || 6 == a || 7 == a || 8 == a || 9 == a || 10 == a || 11 == a) d = this.elemArray[this.curElem][10], c = this.elemArray[this.curElem][11], this.isFullscreen ? (a = this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : this.fullscreenWidth, e = this.elemArray[this.curElem][18] ? Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) : this.fullscreenHeight, a = Math.min(a / d, e / c), a = 1 < a ? 1 : a, e = Math.round(a * d), a = Math.round(a * c), this.adjustFullscreen(e,
						a, !0)) : (e = this.options.width, a = this.options.height), b(".html5gallery-elem-" + this.id).css({
						width: e + "px",
						height: a + "px"
					}), b(".html5gallery-elem-video-" + this.id).css({
						width: e + "px",
						height: a + "px"
					}), b(".html5gallery-elem-video-container-" + this.id).css({
						width: "100%",
						height: "100%"
					}), b(".html5gallery-elem-video-container-" + this.id).find("video").css({
						width: "100%",
						height: "100%"
					}), b("#html5gallery-elem-video-" + this.id).css({
						width: e + "px",
						height: a + "px"
					}), b("#html5gallery-elem-video-" + this.id).attr("width", e), b("#html5gallery-elem-video-" +
						this.id).attr("height", a), b(".html5gallery-elem-video-" + this.id).find("iframe").attr("width", e), b(".html5gallery-elem-video-" + this.id).find("iframe").attr("height", a), b("#html5gallery-elem-video-" + this.id).find("iframe").attr("width", e), b("#html5gallery-elem-video-" + this.id).find("iframe").attr("height", a), b(".html5gallery-elem-iframe-" + this.id).css({
						width: e + "px",
						height: a + "px"
					}), b(".html5gallery-elem-iframe-" + this.id).find("iframe").attr("width", e), b(".html5gallery-elem-iframe-" + this.id).find("iframe").attr("height",
						a);
					e = a = 0;
					"bottom" == this.options.headerpos ? (a = this.options.titleoverlay ? this.options.height - this.options.titleheight : this.options.height, e = this.options.titleoverlay ? this.options.height : this.options.height + this.options.titleheight) : "bottomoutside" == this.options.headerpos && (a = this.options.showcarousel ? this.options.height + this.options.carouselHeight : this.options.height);
					c = this.options.slideshadow ? this.options.boxWidth - 8 : this.options.boxWidth;
					b(".html5gallery-title-" + this.id).css({
						width: c + "px"
					});
					this.options.titleoverlay ||
						b(".html5gallery-title-" + this.id).css({
							top: a + "px"
						});
					b(".html5gallery-viral-" + this.id).css({
						top: e + "px"
					});
					b(".html5gallery-timer-" + this.id).css({
						top: String(this.options.elemTop + this.options.height - 2) + "px"
					});
					if (this.options.showcarousel) {
						b(".html5gallery-car-" + this.id).css({
							width: this.options.width + "px",
							top: this.options.carouselTop + "px"
						});
						b(".html5gallery-car-list-" + this.id).css({
							width: String(this.options.width - 4 - 4) + "px"
						});
						this.options.carouselNavButton = !1;
						Math.floor((this.options.width - 4 - 4) / (this.options.thumbwidth +
							this.options.thumbgap)) < this.elemArray.length && (this.options.carouselNavButton = !0);
						a = this.options.carouselNavButton ? 2 * this.options.carouselarrowwidth + 8 : 0;
						b(".html5gallery-car-left-" + this.id).css({
							display: this.options.carouselNavButton ? "block" : "none"
						});
						b(".html5gallery-car-right-" + this.id).css({
							display: this.options.carouselNavButton ? "block" : "none"
						});
						this.options.thumbShowNum = Math.floor((this.options.width - 4 - 4 - a) / (this.options.thumbwidth + this.options.thumbgap));
						1 > this.options.thumbShowNum && (this.options.thumbShowNum =
							1);
						this.options.thumbMaskWidth = this.options.thumbShowNum * this.options.thumbwidth + this.options.thumbShowNum * this.options.thumbgap;
						this.options.thumbTotalWidth = this.elemArray.length * this.options.thumbwidth + (this.elemArray.length - 1) * this.options.thumbgap;
						e = 0;
						this.options.carouselmultirows ? ("samecolumn" == this.options.thumbresponsive ? b(".html5gallery-thumbs-" + this.id).css({
							"margin-left": "0px",
							width: String((this.options.thumbwidth + this.options.thumbgap) * this.options.carouselcolumn) + "px"
						}) : (a = Math.floor(this.options.width /
							(this.options.thumbwidth + this.options.thumbgap)), 1 > a && (a = 1), e = (this.options.width - a * this.options.thumbwidth - (a - 1) * this.options.thumbgap) / 2, b(".html5gallery-thumbs-" + this.id).css({
							"margin-left": e + "px",
							width: this.options.width + "px"
						})), b(".html5gallery-tn-" + this.id).css({
							width: this.options.thumbwidth + "px",
							height: this.options.thumbheight + "px"
						}), b(".html5gallery-tn-selected-" + this.id).css({
							width: this.options.thumbwidth + "px",
							height: this.options.thumbheight + "px"
						}), b(".html5gallery-tn-img-" + this.id).css({
							width: String(this.options.thumbimagewidth +
								2 * this.options.thumbimageborder) + "px",
							height: String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) + "px"
						}), b(".html5gallery-tn-image-" + this.id).parent().css({
							width: this.options.thumbimagewidth + "px",
							height: this.options.thumbimageheight + "px"
						}), b(".html5gallery-tn-title-" + this.id).css({
							width: String(this.options.thumbwidth - 2) + "px"
						}), b(".html5gallery-tn-title-" + this.id).css({
							height: this.options.thumbtitleheight + "px"
						})) : (this.options.thumbShowNum = Math.floor((this.options.width - 4 - 4 - a) / (this.options.thumbwidth +
							this.options.thumbgap)), 1 > this.options.thumbShowNum && (this.options.thumbShowNum = 1), this.options.thumbMaskWidth = this.options.thumbShowNum * this.options.thumbwidth + this.options.thumbShowNum * this.options.thumbgap, this.options.thumbTotalWidth = this.elemArray.length * this.options.thumbwidth + (this.elemArray.length - 1) * this.options.thumbgap, e = 0, this.options.thumbMaskWidth > this.options.thumbTotalWidth && (e = this.options.thumbMaskWidth / 2 - this.options.thumbTotalWidth / 2 - this.options.thumbgap / 2), b(".html5gallery-car-" +
							this.id).css({
							height: this.options.carouselHeight + "px"
						}), b(".html5gallery-car-list-" + this.id).css({
							height: this.options.carouselHeight + "px"
						}), b(".html5gallery-car-left-" + this.id).css({
							top: String(this.options.carouselHeight / 2 - this.options.carouselarrowheight / 2) + "px"
						}), b(".html5gallery-car-right-" + this.id).css({
							top: String(this.options.carouselHeight / 2 - this.options.carouselarrowheight / 2) + "px"
						}), b(".html5gallery-tn-title-" + this.id).css({
							width: String(this.options.thumbwidth - 2) + "px"
						}), b(".html5gallery-tn-title-" +
							this.id).css({
							height: this.options.thumbtitleheight + "px"
						}), b(".html5gallery-tn-" + this.id).css({
							width: this.options.thumbwidth + "px",
							height: this.options.thumbheight + "px"
						}), b(".html5gallery-tn-selected-" + this.id).css({
							width: this.options.thumbwidth + "px",
							height: this.options.thumbheight + "px"
						}), b(".html5gallery-tn-img-" + this.id).css({
							width: String(this.options.thumbimagewidth + 2 * this.options.thumbimageborder) + "px",
							height: String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) + "px"
						}), b(".html5gallery-tn-image-" +
							this.id).parent().css({
							width: this.options.thumbimagewidth + "px",
							height: this.options.thumbimageheight + "px"
						}), b(".html5gallery-thumbs-" + this.id).css({
							"margin-left": e + "px",
							width: String(this.elemArray.length * (this.options.thumbwidth + this.options.thumbgap)) + "px"
						}));
						var f = "100%",
							j = "auto",
							l = this;
						b(".html5gallery-tn-image-" + this.id).each(function() {
							var a = b(this).data("originalwidth"),
								c = b(this).data("originalheight");
							if (0 < a && 0 < c) {
								var d = Math.max(l.options.thumbimagewidth / a, l.options.thumbimageheight / c);
								f = Math.round(d *
									a) + "px";
								j = Math.round(d * c) + "px"
							}
							b(this).css({
								width: f,
								height: j
							})
						});
						a = Math.round((this.options.width - 4 - 4) / 2 - this.options.thumbMaskWidth / 2);
						b(".html5gallery-car-mask-" + this.id).css({
							left: a + "px",
							width: this.options.thumbMaskWidth + "px",
							height: this.options.carouselHeight + "px"
						});
						this.carouselHighlight(this.curElem, !0)
					}
				}
			},
			createStyleDefault: function() {
				this.options.thumboriginalwidth = this.options.thumbwidth;
				this.options.thumboriginalheight = this.options.thumbheight;
				this.options.thumboriginaltitleheight = this.options.thumbtitleheight;
				if ("samecolumn" == this.options.thumbresponsive) {
					this.options.carouselcolumn = this.options.thumbcolumns;
					if (this.options.thumbcolumnsresponsive) {
						var a = b(window).width();
						a < this.options.thumbsmallsize ? this.options.carouselcolumn = this.options.thumbsmallcolumns : a < this.options.thumbmediumsize && (this.options.carouselcolumn = this.options.thumbmediumcolumns)
					}
					this.options.thumbwidth = Math.min((this.options.width - this.options.thumbgap * (this.options.carouselcolumn - 1)) / this.options.carouselcolumn);
					this.options.thumbheight =
						this.options.thumbwidth * this.options.thumboriginalheight / this.options.thumboriginalwidth
				} else this.options.thumbcolumnsresponsive && (a = b(window).width(), a < this.options.thumbsmallsize ? (this.options.thumbwidth = this.options.thumbsmallwidth, this.options.thumbheight = this.options.thumbsmallheight, this.options.thumbtitleheight = this.options.thumbsmalltitleheight) : a < this.options.thumbmediumsize && (this.options.thumbwidth = this.options.thumbmediumwidth, this.options.thumbheight = this.options.thumbmediumheight, this.options.thumbtitleheight =
					this.options.thumbmediumtitleheight));
				this.options.thumbimagewidth = this.options.thumbwidth - 2 * this.options.thumbimageborder;
				this.options.thumbimageheight = this.options.thumbheight - 2 * this.options.thumbimageborder;
				this.options.thumbshowtitle && (this.options.thumbheight += this.options.thumbtitleheight);
				this.options.showtitle || (this.options.titleheight = 0);
				if (!this.options.showsocialmedia || !this.options.showfacebooklike && !this.options.showtwitter && !this.options.showgoogleplus) this.options.socialheight = 0;
				this.options.headerHeight =
					this.options.titleoverlay ? this.options.socialheight : this.options.titleheight + this.options.socialheight;
				this.options.boxWidth = this.options.width;
				this.options.boxHeight = "bottomoutside" == this.options.headerpos ? this.options.height : this.options.height + this.options.headerHeight;
				this.options.boxLeft = this.options.padding;
				this.options.boxTop = this.options.padding;
				this.options.slideshadow && (this.options.boxWidth += 8, this.options.boxLeft -= 4, this.options.boxTop -= 4);
				this.options.showcarousel ? (this.options.carouselWidth =
					this.options.width, this.options.carouselHeight = this.options.thumbheight + 2 * this.options.thumbmargin, this.options.carouselLeft = this.options.padding, "top" == this.options.carouselposition ? (this.options.carouselTop = this.options.padding, this.options.boxTop = this.options.padding + this.options.carouselHeight + this.options.carouselmargin) : this.options.carouselTop = this.options.padding + this.options.boxHeight + this.options.carouselmargin, this.options.carouselmultirows && ("samecolumn" == this.options.thumbresponsive ?
						(this.options.carouselcolumn = this.options.thumbcolumns, this.options.thumbcolumnsresponsive && (a = b(window).width(), a < this.options.thumbsmallsize ? this.options.carouselcolumn = this.options.thumbsmallcolumns : a < this.options.thumbmediumsize && (this.options.carouselcolumn = this.options.thumbmediumcolumns)), this.options.thumbwidth = Math.min((this.options.width - this.options.thumbgap * (this.options.carouselcolumn - 1)) / this.options.carouselcolumn), this.options.thumbheight = this.options.thumbwidth * this.options.thumboriginalheight /
							this.options.thumboriginalwidth, this.options.thumbimagewidth = this.options.thumbwidth - 2 * this.options.thumbimageborder, this.options.thumbimageheight = this.options.thumbheight - 2 * this.options.thumbimageborder, this.options.thumbshowtitle && (this.options.thumbheight += this.options.thumbtitleheight)) : (this.options.carouselcolumn = Math.floor(this.options.width / (this.options.thumbwidth + this.options.thumbgap)), 1 > this.options.carouselcolumn && (this.options.carouselcolumn = 1)), this.options.carouselHeight = Math.ceil(this.elemArray.length /
							this.options.carouselcolumn) * (this.options.thumbheight + this.options.thumbrowgap))) : (this.options.carouselWidth = 0, this.options.carouselHeight = 0, this.options.carouselLeft = 0, this.options.carouselTop = 0, this.options.carouselmargin = 0);
				this.options.totalWidth = this.options.width + 2 * this.options.padding;
				this.options.totalHeight = this.options.height + this.options.carouselHeight + this.options.carouselmargin + this.options.headerHeight + 2 * this.options.padding;
				this.options.containerWidth = this.options.totalWidth;
				this.options.containerHeight =
					this.options.totalHeight;
				this.options.responsive ? (this.options.originalWidth = this.options.width, this.options.originalHeight = this.options.height, this.container.css({
					"max-width": "100%"
				})) : this.container.css({
					width: this.options.containerWidth,
					height: this.options.containerHeight
				});
				var c = 0,
					d = 0;
				this.options.elemTop = 0;
				"top" == this.options.headerpos ? (d = 0, c = this.options.socialheight, this.options.elemTop = this.options.headerHeight) : "bottom" == this.options.headerpos && (this.options.elemTop = 0, c = this.options.titleoverlay ?
					this.options.height - this.options.titleheight : this.options.height, d = this.options.titleoverlay ? this.options.height : this.options.height + this.options.titleheight);
				a = " .html5gallery-container-" + this.id + " { display:block; position:absolute; left:0px; top:0px; width:" + this.options.totalWidth + "px; height:" + this.options.totalHeight + "px; " + (!this.options.bgimage ? "" : "background:url('" + this.options.bgimage + "') center top;") + " background-color:" + this.options.bgcolor + ";}";
				this.options.galleryshadow && (a += " .html5gallery-container-" +
					this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}");
				var a = a + (" .html5gallery-box-" + this.id + " {display:block; position:absolute; text-align:center; left:" + this.options.boxLeft + "px; top:" + this.options.boxTop + "px; width:" + this.options.boxWidth + "px; height:" + this.options.boxHeight + "px;}"),
					e = Math.round(this.options.socialheight / 2 - 12),
					a = a + (" .html5gallery-title-text-" + this.id + " " + this.options.titlecss + " .html5gallery-title-text-" + this.id +
						" " + this.options.titlecsslink + " .html5gallery-error-" + this.id + " " + this.options.errorcss),
					a = a + (" .html5gallery-description-text-" + this.id + " " + this.options.descriptioncss + " .html5gallery-description-text-" + this.id + " " + this.options.descriptioncsslink),
					a = a + (" .html5gallery-fullscreen-title-" + this.id + "" + this.options.lightboxtitlecss + " .html5gallery-fullscreen-title-" + this.id + "" + this.options.lightboxtitlelinkcss),
					a = a + (" .html5gallery-fullscreen-description-" + this.id + "" + this.options.lightboxdescriptioncss +
						" .html5gallery-fullscreen-description-" + this.id + "" + this.options.lightboxdescriptionlinkcss),
					a = a + (" .html5gallery-viral-" + this.id + " {display:block; overflow:hidden; position:absolute; text-align:left; top:" + d + "px; left:0px; width:" + this.options.boxWidth + "px; height:" + this.options.socialheight + "px; padding-top:" + e + "px;}"),
					a = a + (" .html5gallery-title-" + this.id + " {display:" + (this.options.titleoverlay && this.options.titleautohide ? "none" : "block") + "; overflow:hidden; position:absolute; left:0px; width:" +
						(this.options.slideshadow ? this.options.boxWidth - 8 : this.options.boxWidth) + "px; ");
				this.options.titleoverlay ? a = "top" == this.options.headerpos ? a + "top:0px; height:auto; }" : a + "bottom:0px; height:auto; }" : (a += "top:" + c + "px; height:" + this.options.titleheight + "px; }", this.options.titlesmallscreen && (a += " @media (max-width: " + this.options.titlesmallscreenwidth + "px) { .html5gallery-title-" + this.id + " {height:" + this.options.titleheightsmallscreen + "px; }}"));
				a += " .html5gallery-timer-" + this.id + " {display:block; position:absolute; top:" +
					String(this.options.elemTop + this.options.height - 2) + "px; left:0px; width:0px; height:2px; background-color:#ccc;  }";
				a += " .html5gallery-elem-" + this.id + " {display:block; overflow:hidden; position:absolute; top:" + this.options.elemTop + "px; left:0px; width:" + this.options.width + "px; height:" + this.options.height + "px;}";
				this.options.isIE7 || this.options.isIE6 ? (a += " .html5gallery-loading-" + this.id + " {display:none; }", a += " .html5gallery-loading-center-" + this.id + " {display:none; }") :
					(a += " .html5gallery-loading-" + this.id + " {display:block; position:absolute; top:4px; right:4px; width:100%; height:100%; background:url('" + this.options.loadinggif + "') no-repeat top right;}", a += " .html5gallery-loading-center-" + this.id + " {display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background:url('" + this.options.centerloadinggif + "') no-repeat center center;}");
				0 < this.options.borderradius && (a += " .html5gallery-elem-" + this.id + " {overflow:hidden; border-radius:" + this.options.borderradius +
					"px; -moz-border-radius:" + this.options.borderradius + "px; -webkit-border-radius:" + this.options.borderradius + "px;}");
				this.options.slideshadow && (a += " .html5gallery-title-" + this.id + " { padding:4px;}", a += " .html5gallery-timer-" + this.id + " { margin:4px;}", a += " .html5gallery-elem-" + this.id + " { overflow:hidden; padding:4px; -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}");
				this.options.showcarousel && this.options.carouselmultirows ? (a += " .html5gallery-car-" +
					this.id + " { position:absolute; display:block; overflow:hidden; left:" + this.options.carouselLeft + "px; top:" + this.options.carouselTop + "px; width:" + this.options.width + "px;", a = this.options.carouselbgtransparent ? a + "background-color:transparent;" : a + ("border-top:1px solid " + this.options.carouseltopborder + ";border-bottom:1px solid " + this.options.carouselbottomborder + ";background-color: " + this.options.carouselbgcolorend + "; background: " + this.options.carouselbgcolorend + " -webkit-gradient(linear, left top, left bottom, from(" +
						this.options.carouselbgcolorstart + "), to(" + this.options.carouselbgcolorend + ")) no-repeat; background: " + this.options.carouselbgcolorend + " -moz-linear-gradient(top, " + this.options.carouselbgcolorstart + ", " + this.options.carouselbgcolorend + ") no-repeat; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend + ") no-repeat; -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart +
						", endColorstr=" + this.options.carouselbgcolorend + ")' no-repeat;"), this.options.carouselbgimage && (a += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), c = Math.floor(this.options.width / (this.options.thumbwidth + this.options.thumbgap)), 1 > c && (c = 1), c = (this.options.width - c * this.options.thumbwidth - (c - 1) * this.options.thumbgap) / 2, a = a + "}" + (".html5gallery-thumbs-" + this.id + " { position:relative; display:block; margin-left:" + c + "px; width:" + ("samecolumn" == this.options.thumbresponsive ?
						(this.options.thumbwidth + this.options.thumbgap) * this.options.carouselcolumn : this.options.width) + "px; top:0px; }"), a += " .html5gallery-tn-" + this.id + " { display:block; float:left; margin-left:0px; margin-right:" + this.options.thumbgap + "px; margin-bottom:" + this.options.thumbrowgap + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight + "px;overflow:hidden;}", this.options.thumbshadow && (a += " .html5gallery-tn-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"),
					a += " .html5gallery-tn-selected-" + this.id + " { display:block; float:left; margin-left:0px; margin-right:" + this.options.thumbgap + "px; margin-bottom:" + this.options.thumbrowgap + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight + "px;overflow:hidden;}", this.options.thumbshadow && (a += " .html5gallery-tn-selected-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"), a += " .html5gallery-tn-" +
					this.id + " {background-color:" + this.options.thumbimagebordercolor + ";} .html5gallery-tn-" + this.id + " { filter:alpha(opacity=" + Math.round(100 * this.options.thumbopacity) + "); opacity:" + this.options.thumbopacity + "; }  .html5gallery-tn-selected-" + this.id + "  ", a += " .html5gallery-tn-img-" + this.id + " {display:block; overflow:hidden; width:" + String(this.options.thumbimagewidth + 2 * this.options.thumbimageborder) + "px;height:" + String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) +
					"px;}", this.options.thumbunselectedimagebordercolor && (a += " .html5gallery-tn-selected-" + this.id + " {background-color:" + this.options.thumbunselectedimagebordercolor + ";}"), this.options.thumbshowtitle ? (a += " .html5gallery-tn-title-" + this.id + " {display:block; overflow:hidden; float:top; height:" + this.options.thumbtitleheight + "px;width:" + String(this.options.thumbwidth - 2) + "px;}", a += " .html5gallery-tn-title-" + this.id + this.options.thumbtitlecss) : a += " .html5gallery-tn-title-" + this.id + " {display:none;}", this.carouselHighlight =
					function() {}) : this.options.showcarousel ? (a += " .html5gallery-car-" + this.id + " { position:absolute; display:block; overflow:hidden; left:" + this.options.carouselLeft + "px; top:" + this.options.carouselTop + "px; width:" + this.options.width + "px; height:" + this.options.carouselHeight + "px;", a = this.options.carouselbgtransparent ? a + "background-color:transparent;" : a + ("border-top:1px solid " + this.options.carouseltopborder + ";border-bottom:1px solid " + this.options.carouselbottomborder + ";background-color: " + this.options.carouselbgcolorend +
						"; background: " + this.options.carouselbgcolorend + " -webkit-gradient(linear, left top, left bottom, from(" + this.options.carouselbgcolorstart + "), to(" + this.options.carouselbgcolorend + ")) no-repeat; background: " + this.options.carouselbgcolorend + " -moz-linear-gradient(top, " + this.options.carouselbgcolorstart + ", " + this.options.carouselbgcolorend + ") no-repeat; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend +
						") no-repeat; -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=" + this.options.carouselbgcolorstart + ", endColorstr=" + this.options.carouselbgcolorend + ")' no-repeat;"), this.options.carouselbgimage && (a += "background:url('" + this.options.skinfolder + this.options.carouselbgimage + "') center top;"), a += "}", a += " .html5gallery-car-list-" + this.id + " { position:absolute; display:block; overflow:hidden; left:4px; width:" + String(this.options.width - 4 - 4) + "px; top:0px; height:" + this.options.carouselHeight +
					"px; }", this.options.carouselNavButton = !1, Math.floor((this.options.width - 4 - 4) / (this.options.thumbwidth + this.options.thumbgap)) < this.elemArray.length && (this.options.carouselNavButton = !0), a += " .html5gallery-car-left-" + this.id + " { position:absolute; overflow:hidden; width:" + this.options.carouselarrowwidth + "px; height:" + this.options.carouselarrowheight + "px; left:0px; top:" + String(this.options.carouselHeight / 2 - this.options.carouselarrowheight / 2) + "px; background:url('" + this.options.skinfolder + "carousel_left.png') no-repeat 0px 0px;}  .html5gallery-car-right-" +
					this.id + " { position:absolute; overflow:hidden; width:" + this.options.carouselarrowwidth + "px; height:" + this.options.carouselarrowheight + "px; right:0px; top:" + String(this.options.carouselHeight / 2 - this.options.carouselarrowheight / 2) + "px; background:url('" + this.options.skinfolder + "carousel_right.png') no-repeat 0px 0px;} ", c = this.options.carouselNavButton ? 2 * this.options.carouselarrowwidth + 8 : 0, b(".html5gallery-car-left-" + this.id).css({
						display: this.options.carouselNavButton ? "block" : "none"
					}), b(".html5gallery-car-right-" +
						this.id).css({
						display: this.options.carouselNavButton ? "block" : "none"
					}), this.options.thumbShowNum = Math.floor((this.options.width - 4 - 4 - c) / (this.options.thumbwidth + this.options.thumbgap)), 1 > this.options.thumbShowNum && (this.options.thumbShowNum = 1), this.options.thumbMaskWidth = this.options.thumbShowNum * this.options.thumbwidth + this.options.thumbShowNum * this.options.thumbgap, this.options.thumbTotalWidth = this.elemArray.length * this.options.thumbwidth + (this.elemArray.length - 1) * this.options.thumbgap, c = 0, this.options.thumbMaskWidth >
					this.options.thumbTotalWidth && (c = this.options.thumbMaskWidth / 2 - this.options.thumbTotalWidth / 2 - this.options.thumbgap / 2), a += ".html5gallery-thumbs-" + this.id + " { position:relative; display:block; margin-left:" + c + "px; width:" + String(this.elemArray.length * (this.options.thumbwidth + this.options.thumbgap)) + "px; top:" + Math.round(this.options.carouselHeight / 2 - this.options.thumbheight / 2) + "px; }", c = Math.round((this.options.width - 4 - 4) / 2 - this.options.thumbMaskWidth / 2), a += " .html5gallery-car-mask-" + this.id + " { position:absolute; display:block; text-align:left; overflow:hidden; left:" +
					c + "px; width:" + this.options.thumbMaskWidth + "px; top:0px; height:" + this.options.carouselHeight + "px;} ", a += " .html5gallery-tn-" + this.id + " { display:block; float:left; margin-left:" + Math.floor(this.options.thumbgap / 2) + "px; margin-right:" + Math.floor(this.options.thumbgap / 2) + "px; text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight + "px;overflow:hidden;}", this.options.thumbshadow && (a += " .html5gallery-tn-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"),
					a += " .html5gallery-tn-selected-" + this.id + " { display:block; float:left; margin-left:" + Math.floor(this.options.thumbgap / 2) + "px; margin-right:" + Math.floor(this.options.thumbgap / 2) + "px;text-align:center; cursor:pointer; width:" + this.options.thumbwidth + "px;height:" + this.options.thumbheight + "px;overflow:hidden;}", this.options.thumbshadow && (a += " .html5gallery-tn-selected-" + this.id + " { -moz-box-shadow: 0px 2px 5px #aaa; -webkit-box-shadow: 0px 2px 5px #aaa; box-shadow: 0px 2px 5px #aaa;}"), a += " .html5gallery-tn-" +
					this.id + " {background-color:" + this.options.thumbimagebordercolor + ";} .html5gallery-tn-" + this.id + " { filter:alpha(opacity=" + Math.round(100 * this.options.thumbopacity) + "); opacity:" + this.options.thumbopacity + "; }  .html5gallery-tn-selected-" + this.id + "  ", a += " .html5gallery-tn-img-" + this.id + " {display:block; overflow:hidden; width:" + String(this.options.thumbimagewidth + 2 * this.options.thumbimageborder) + "px;height:" + String(this.options.thumbimageheight + 2 * this.options.thumbimageborder) +
					"px;}", this.options.thumbunselectedimagebordercolor && (a += " .html5gallery-tn-selected-" + this.id + " {background-color:" + this.options.thumbunselectedimagebordercolor + ";}"), this.options.thumbshowtitle ? (a += " .html5gallery-tn-title-" + this.id + " {display:block; overflow:hidden; float:top; height:" + this.options.thumbtitleheight + "px;width:" + String(this.options.thumbwidth - 2) + "px;}", a += " .html5gallery-tn-title-" + this.id + this.options.thumbtitlecss) : a += " .html5gallery-tn-title-" + this.id + " {display:none;}", this.carouselHighlight =
					function(a, c) {
						b("#html5gallery-tn-" + this.id + "-" + a, this.$gallery).removeClass("html5gallery-tn-" + this.id).addClass("html5gallery-tn-selected-" + this.id);
						if (this.options.thumbShowNum >= this.elemArray.length) b(".html5gallery-car-left-" + this.id, this.$gallery).css({
							"background-position": "-" + String(2 * this.options.carouselarrowwidth) + "px 0px",
							cursor: ""
						}), b(".html5gallery-car-left-" + this.id, this.$gallery).data("disabled", !0), b(".html5gallery-car-right-" + this.id, this.$gallery).css({
							"background-position": "-" +
								String(2 * this.options.carouselarrowwidth) + "px 0px",
							cursor: ""
						}), b(".html5gallery-car-right-" + this.id, this.$gallery).data("disabled", !0);
						else {
							var d = Math.floor(a / this.options.thumbShowNum) * this.options.thumbShowNum * (this.options.thumbwidth + this.options.thumbgap);
							d >= this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap && (d = this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap);
							d = -d;
							c ? b(".html5gallery-thumbs-" + this.id, this.$gallery).css({
									marginLeft: d
								}) :
								b(".html5gallery-thumbs-" + this.id, this.$gallery).animate({
									marginLeft: d
								}, 500);
							this.updateCarouseButtons(d)
						}
					}, this.carouselPrev = function() {
						var a = b(".html5gallery-thumbs-" + this.id, this.$gallery);
						if (0 != parseInt(a.css("margin-left"))) {
							var c = -1 * parseInt(a.css("margin-left")) - this.options.thumbShowNum * (this.options.thumbwidth + this.options.thumbgap);
							0 > c && (c = 0);
							a.animate({
								marginLeft: -c
							}, 500, this.options.carouseleasing);
							this.updateCarouseButtons(-c)
						}
					}, this.carouselNext = function() {
						var a = b(".html5gallery-thumbs-" +
							this.id, this.$gallery);
						if (parseInt(a.css("margin-left")) != -(this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap)) {
							var c = -1 * parseInt(a.css("margin-left")) + this.options.thumbShowNum * (this.options.thumbwidth + this.options.thumbgap);
							c >= this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap && (c = this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap);
							a.animate({
								marginLeft: -c
							}, 500, this.options.carouseleasing);
							this.updateCarouseButtons(-c)
						}
					},
					this.updateCarouseButtons = function(a) {
						var c = b(".html5gallery-car-left-" + this.id, this.$gallery),
							d = b(".html5gallery-car-right-" + this.id, this.$gallery),
							e = -1 * (this.options.thumbTotalWidth - this.options.thumbMaskWidth + this.options.thumbgap);
						0 == a ? (c.css({
							"background-position": "-" + String(2 * this.options.carouselarrowwidth) + "px 0px",
							cursor: ""
						}), c.data("disabled", !0)) : c.data("disabled") && (c.css({
							"background-position": "0px 0px",
							cursor: "pointer"
						}), c.data("disabled", !1));
						a == e ? (d.css({
							"background-position": "-" +
								String(2 * this.options.carouselarrowwidth) + "px 0px",
							cursor: ""
						}), d.data("disabled", !0)) : d.data("disabled") && (d.css({
							"background-position": "0px 0px",
							cursor: "pointer"
						}), d.data("disabled", !1))
					}) : a += " .html5gallery-car-" + this.id + " { display:none; }";
				a += ".html5gallery-container-" + this.id + " div {box-sizing:content-box;}";
				b("head").append("<style type='text/css' data-creator='html5gallery'>" + a + "</style>")
			},
			html2Text: function(a) {
				var b = document.createElement("div");
				b.innerHTML = a;
				return b.innerText
			},
			loadCarousel: function() {
				var a =
					this,
					c = b(".html5gallery-thumbs-" + this.id, this.$gallery);
				c.empty();
				for (var d = 0; d < this.elemArray.length; d++) {
					var e = b("<div " + (this.options.enabletabindex ? "tabindex='0' " : "") + "id='html5gallery-tn-" + this.id + "-" + d + "' class='html5gallery-tn-" + this.id + "' data-index=" + d + " ></div>");
					e.appendTo(c);
					if (this.options.enabletabindex) e.on("keydown", function(a) {
						13 == a.keyCode && b(this).click()
					});
					this.options.thumblinkintitle || e.off("click").click(function() {
						a.onThumbClick(b(this).data("index"));
						a.slideRun(b(this).data("index"),
							!0, !0)
					});
					e.hover(function() {
						a.onThumbOver(b(this).data("index"));
						b(this).removeClass("html5gallery-tn-" + a.id).addClass("html5gallery-tn-selected-" + a.id)
					}, function() {
						b(this).data("index") !== a.curElem && b(this).removeClass("html5gallery-tn-selected-" + a.id).addClass("html5gallery-tn-" + a.id)
					});
					e = new Image;
					e.data = d;
					b(e).on("load", function() {
						b(this).data("originalwidth", this.width);
						b(this).data("originalheight", this.height);
						var d = Math.max(a.options.thumbimagewidth / this.width, a.options.thumbimageheight / this.height),
							e = Math.round(d * this.width),
							d = Math.round(d * this.height),
							h = a.options.thumbshowplayonvideo && 1 != a.elemArray[this.data][9] ? "<div class='html5gallery-tn-img-play-" + a.id + "' style='display:block; overflow:hidden; position:absolute; width:100%;height:100%; top:" + a.options.thumbimageborder + "px; left:" + a.options.thumbimageborder + 'px;background:url("' + a.options.playvideothumbimage + "\") no-repeat center center;'></div>" : "",
							g = a.options.addthumbnailtitle && a.elemArray[this.data][7] ? ' title="' + a.elemArray[this.data][7] +
							'"' : "";
						a.options.carouselmultirows && "samecolumn" == a.options.thumbresponsive ? b("#html5gallery-tn-" + a.id + "-" + this.data, c).append("<div class='html5gallery-tn-img-" + a.id + "'" + g + " style='position:relative;width:" + String(a.options.thumbimagewidth + 2 * a.options.thumbimageborder) + "px;height:" + String(a.options.thumbimageheight + 2 * a.options.thumbimageborder) + "px;'><div style='display:block; overflow:hidden; position:absolute; width:" + a.options.thumbimagewidth + "px;height:" + a.options.thumbimageheight + "px; top:" +
							a.options.thumbimageborder + "px; left:" + a.options.thumbimageborder + "px;'><img alt='" + a.html2Text(a.elemArray[this.data][25]) + "'" + (a.options.addimgtitle ? " title='" + a.html2Text(a.elemArray[this.data][7]) + "'" : "") + " data-originalwidth=" + this.width + " data-originalheight=" + this.height + " class='html5gallery-tn-image html5gallery-tn-image-" + a.id + "'" + g + " style='border:none; padding:0px; margin:0px; max-width:100%; max-height:none; width:" + e + "px; height:" + d + "px;' src='" + a.elemArray[this.data][1] + "' /></div>" +
							h + "</div><div class='html5gallery-tn-title-" + a.id + "' style='width:" + String(a.options.thumbwidth - 2) + "px;'>" + a.elemArray[this.data][7] + (a.options.thumbshowdescription ? "<br /><span class='html5gallery-tn-description-" + a.id + "'>" + a.elemArray[this.data][8] + "</span>" : "") + "</div>") : b("#html5gallery-tn-" + a.id + "-" + this.data, c).append("<div class='html5gallery-tn-img-" + a.id + "'" + g + " style='position:relative;'><div style='display:block; overflow:hidden; position:absolute; width:" + a.options.thumbimagewidth + "px;height:" +
							a.options.thumbimageheight + "px; top:" + a.options.thumbimageborder + "px; left:" + a.options.thumbimageborder + "px;'><img alt='" + a.html2Text(a.elemArray[this.data][25]) + "'" + (a.options.addimgtitle ? " title='" + a.html2Text(a.elemArray[this.data][7]) + "'" : "") + " data-originalwidth=" + this.width + " data-originalheight=" + this.height + " class='html5gallery-tn-image html5gallery-tn-image-" + a.id + "'" + g + " style='border:none; padding:0px; margin:0px; max-width:100%; max-height:none; width:" + e + "px; height:" + d + "px;' src='" +
							a.elemArray[this.data][1] + "' /></div>" + h + "</div><div class='html5gallery-tn-title-" + a.id + "'>" + a.elemArray[this.data][7] + (a.options.thumbshowdescription ? "<br /><span class='html5gallery-tn-description-" + a.id + "'>" + a.elemArray[this.data][8] + "</span>" : "") + "</div>");
						a.options.thumblinkintitle && b(".html5gallery-tn-img-" + a.id, c).off("click").click(function() {
							a.onThumbClick(b(this).parent().data("index"));
							a.slideRun(b(this).parent().data("index"), !0, !0)
						})
					});
					e.src = this.elemArray[d][1]
				}
				this.options.carouselmultirows &&
					c.append("<div style='clear:both;'></div>")
			},
			goNormal: function() {
				this.isFullscreen = !1;
				0 < b(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).length && b(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).stop();
				this.slideshowTimeout.stop();
				b(document).off("keyup.html5gallery");
				b(".html5gallery-timer-" + this.id, this.$gallery).css({
					width: 0
				});
				if (0 < b(".html5gallery-elem-" + this.id, this.$fullscreen).length) {
					var a = b(".html5gallery-elem-" + this.id, this.$fullscreen).empty().css({
						top: this.options.elemTop
					});
					b(".html5gallery-box-" + this.id, this.$gallery).prepend(a)
				}
				this.slideRun(this.curElem);
				this.$fullscreen.remove();
				"show" == this.options.imagetoolboxmode ? this.showimagetoolbox(this.elemArray[this.curElem][9]) : this.hideimagetoolbox()
			},
			goFullscreen: function() {
				this.hideimagetoolbox();
				this.slideshowTimeout.stop();
				b(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
					width: 0
				});
				this.isFullscreen = !0;
				this.fullscreenInitial = 20;
				this.fullscreenMargin = this.options.lightboxborder;
				this.fullscreenBarH = this.options.lightboxtextheight;
				this.fullscreenOutsideMargin = this.options.lightboxmargin;
				var a = b(window).width(),
					c = this.elemArray[this.curElem][10],
					d = this.elemArray[this.curElem][11];
				this.fullscreenWidth = a - 2 * this.fullscreenMargin - 2 * this.fullscreenOutsideMargin;
				var e = b(window).height();
				this.fullscreenHeight = e - 2 * this.fullscreenMargin - this.fullscreenBarH - 2 * this.fullscreenOutsideMargin;
				var f = Math.max(e, b(document).height()),
					j = this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : this.fullscreenWidth,
					l = this.elemArray[this.curElem][18] ? Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) : this.fullscreenHeight,
					j = Math.min(j / c, l / d);
				1 > j && (c *= j, d *= j);
				e = b(window).scrollTop() + Math.round((e - (d + 2 * this.fullscreenMargin + this.fullscreenBarH)) / 2);
				this.$fullscreen = b("<div class='html5gallery-fullscreen-" + this.id + "' style='position:absolute;top:0px;left:0px;width:" + a + "px;height:" + f + "px;text-align:center;z-index:99999;'><div class='html5gallery-fullscreen-overlay-" + this.id + "' style='display:block;position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:#000000;'></div><div class='html5gallery-fullscreen-box-" +
					this.id + "' style='display:block;overflow:hidden;position:relative;margin:0px auto;top:" + e + "px;width:" + this.fullscreenInitial + "px;height:" + this.fullscreenInitial + "px;'><div class='html5gallery-fullscreen-elem-" + this.id + "' style='display:block;position:relative;overflow:hidden;width:" + String(c + 2 * this.fullscreenMargin) + "px;height:" + String(d + 2 * this.fullscreenMargin) + "px;background-color:" + this.options.lightboxbgcolor + ";'><div class='html5gallery-fullscreen-elem-wrapper-" + this.id + "' style='display:block;position:relative;overflow:hidden;margin:" +
					this.fullscreenMargin + "px;'><div class='html5gallery-fullscreen-timer-" + this.id + "' style='display:block; position:absolute; top:" + String(d - 4) + "px; left:0px; width:0px; height:4px; background-color:#666; '></div></div></div><div class='html5gallery-fullscreen-bar-" + this.id + "' style='display:block;position:relative;width:" + String(c + 2 * this.fullscreenMargin) + "px;height:auto;min-height:36px;background-color:" + this.options.lightboxbgcolor + ";'><div class='html5gallery-fullscreen-bar-wrapper-" +
					this.id + "' style='display:block;position:relative;padding:0px " + this.fullscreenMargin + "px " + this.fullscreenMargin + "px " + this.fullscreenMargin + "px;'><div class='html5gallery-fullscreen-close-" + this.id + "' style='display:block;position:relative;float:right;cursor:pointer;width:32px;height:32px;top:0px;background-image:url(\"" + this.options.skinfolder + "lightbox_close.png\");'></div><div class='html5gallery-fullscreen-play-" + this.id + "' style='display:" + (this.isPaused && 1 < this.elemArray.length && 1 == this.elemArray[this.curElem][9] ?
						"block" : "none") + ';position:relative;float:right;cursor:pointer;width:32px;height:32px;top:0px;background-image:url("' + this.options.skinfolder + "lightbox_play.png\");'></div><div class='html5gallery-fullscreen-pause-" + this.id + "' style='display:" + (this.isPaused || 1 >= this.elemArray.length || 1 != this.elemArray[this.curElem][9] ? "none" : "block") + ';position:relative;float:right;cursor:pointer;width:32px;height:32px;top:0px;background-image:url("' + this.options.skinfolder + "lightbox_pause.png\");'></div><div class='html5gallery-fullscreen-title-" +
					this.id + "' style='display:block;position:relative;float:left;width:" + String(c - 2 * this.fullscreenMargin - 72) + "px;height:auto;top:0px;left:0px;text-align:left;'></div><div style='clear:both;'></div></div></div><div class='html5gallery-fullscreen-next-" + this.id + "' style='display:none;position:absolute;cursor:pointer;width:48px;height:48px;right:" + this.fullscreenMargin + "px;top:" + Math.round(d / 2) + 'px;background-image:url("' + this.options.skinfolder + "lightbox_next.png\");'></div><div class='html5gallery-fullscreen-prev-" +
					this.id + "' style='display:none;position:absolute;cursor:pointer;width:48px;height:48px;left:" + this.fullscreenMargin + "px;top:" + Math.round(d / 2) + 'px;background-image:url("' + this.options.skinfolder + "lightbox_prev.png\");'></div></div></div>");
				this.$fullscreen.appendTo("body");
				var g = this;
				b(window).scroll(function() {
					if (!g.options.isMobile || g.options.mobileresizeevent) {
						var a = b(".html5gallery-fullscreen-box-" + g.id, g.$fullscreen),
							c = b(window).height(),
							c = b(window).scrollTop() + Math.round((c - a.height()) / 2);
						a.css({
							top: c
						})
					}
				});
				this.createSocial(!0);
				b(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).animate({
					height: d + 2 * this.fullscreenMargin
				}, "slow", function() {
					b(this).animate({
						width: c + 2 * g.fullscreenMargin
					}, "slow", function() {
						b(this).animate({
							height: "+=" + g.fullscreenBarH
						}, "slow", function() {
							if (g.isFullscreen) {
								var a = b(".html5gallery-elem-" + g.id, g.$gallery).empty().css({
									top: 0,
									position: "relative"
								});
								b(".html5gallery-fullscreen-elem-wrapper-" + g.id, g.$fullscreen).prepend(a);
								g.slideRun(g.curElem);
								g.options.showsocial && b(".html5gallery-fullscreen-social-" +
									g.id, g.$fullscreen).show()
							}
						})
					})
				});
				b(".html5gallery-fullscreen-overlay-" + this.id, this.$fullscreen).click(function() {
					g.goNormal()
				});
				b(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).hover(function() {
					1 < g.elemArray.length && (b(".html5gallery-fullscreen-next-" + g.id, g.$fullscreen).fadeIn(), b(".html5gallery-fullscreen-prev-" + g.id, g.$fullscreen).fadeIn())
				}, function() {
					b(".html5gallery-fullscreen-next-" + g.id, g.$fullscreen).fadeOut();
					b(".html5gallery-fullscreen-prev-" + g.id, g.$fullscreen).fadeOut()
				});
				g.options.enabletouchswipe && (a = g.options.isAndroid && g.options.enabletouchswipeonandroid ? !0 : !1, b(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).touchSwipe({
					preventWebBrowser: a,
					swipeLeft: function() {
						g.disableTouchSwipe || g.slideRun(-1)
					},
					swipeRight: function() {
						g.disableTouchSwipe || g.slideRun(-2)
					}
				}));
				b(".html5gallery-fullscreen-close-" + this.id, this.$fullscreen).click(function() {
					g.goNormal()
				});
				b(".html5gallery-fullscreen-next-" + this.id, this.$fullscreen).click(function() {
					g.slideRun(-1)
				});
				b(".html5gallery-fullscreen-prev-" +
					this.id, this.$fullscreen).click(function() {
					g.slideRun(-2)
				});
				b(".html5gallery-fullscreen-play-" + this.id, this.$fullscreen).click(function() {
					b(".html5gallery-fullscreen-play-" + g.id, g.$fullscreen).hide();
					b(".html5gallery-fullscreen-pause-" + g.id, g.$fullscreen).show();
					g.isPaused = !1;
					g.slideshowTimeout.setInterval(g.elemArray[g.curElem][16] ? g.elemArray[g.curElem][16] : g.options.slideshowinterval);
					g.slideshowTimeout.start();
					b(".html5gallery-fullscreen-timer-" + g.id, g.$fullscreen).css({
						width: 0
					})
				});
				b(".html5gallery-fullscreen-pause-" +
					this.id, this.$fullscreen).click(function() {
					b(".html5gallery-fullscreen-play-" + g.id, g.$fullscreen).show();
					b(".html5gallery-fullscreen-pause-" + g.id, g.$fullscreen).hide();
					g.isPaused = !0;
					g.slideshowTimeout.stop();
					b(".html5gallery-fullscreen-timer-" + g.id, g.$fullscreen).css({
						width: 0
					})
				});
				b(document).on("keyup.html5gallery", function(a) {
					27 == a.keyCode ? g.goNormal() : 39 == a.keyCode ? g.slideRun(-1) : 37 == a.keyCode && g.slideRun(-2)
				})
			},
			calcIndex: function(a) {
				this.savedElem = this.curElem; - 2 == a ? (this.nextElem = this.curElem,
					this.curElem = this.prevElem, this.prevElem = 0 > this.curElem - 1 ? this.elemArray.length - 1 : this.curElem - 1) : -1 == a ? (this.prevElem = this.curElem, this.curElem = this.nextElem, this.nextElem = this.curElem + 1 >= this.elemArray.length ? 0 : this.curElem + 1) : 0 <= a && (this.curElem = a, this.prevElem = 0 > this.curElem - 1 ? this.elemArray.length - 1 : this.curElem - 1, this.nextElem = this.curElem + 1 >= this.elemArray.length ? 0 : this.curElem + 1)
			},
			showSlideTimer: function() {
				var a = this.elemArray[this.curElem][16] ? this.elemArray[this.curElem][16] : this.options.slideshowinterval;
				this.slideTimerCount++;
				this.isFullscreen ? b(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).width(Math.round(50 * b(".html5gallery-fullscreen-elem-wrapper-" + this.id, this.$fullscreen).width() * (this.slideTimerCount + 1) / a)) : b(".html5gallery-timer-" + this.id, this.$gallery).width(Math.round(50 * this.options.boxWidth * (this.slideTimerCount + 1) / a))
			},
			setHd: function(a, b) {
				var d = this.elemArray[this.curElem][9],
					d = this.isHd != a && b && (5 == d || 6 == d || 7 == d || 8 == d);
				this.isHd = a;
				d && this.slideRun(this.curElem, !1, !1, !0)
			},
			enableUpdateCarousel: function() {
				this.disableupdatecarousel = !1
			},
			slideRun: function(a, c, d, e) {
				this.slideshowTimeout.stop();
				this.isFullscreen ? b(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
					width: 0
				}) : b(".html5gallery-timer-" + this.id, this.$gallery).css({
					width: 0
				});
				this.options.showcarousel && 0 <= this.curElem && b("#html5gallery-tn-" + this.id + "-" + this.curElem, this.$gallery).removeClass("html5gallery-tn-selected-" + this.id).addClass("html5gallery-tn-" + this.id);
				this.calcIndex(a);
				this.isFullscreen ?
					(this.$fullscreen.addClass("html5gallery-fullscreen-activeslide-" + this.id + "-" + this.curElem), 0 <= this.prevElem && this.$fullscreen.removeClass("html5gallery-fullscreen-activeslide-" + this.id + "-" + this.prevElem)) : (this.$gallery.addClass("html5gallery-activeslide-" + this.id + "-" + this.curElem), 0 <= this.prevElem && this.$gallery.removeClass("html5gallery-activeslide-" + this.id + "-" + this.prevElem));
				this.options.arrowloop || (this.isFullscreen ? (b(".html5gallery-fullscreen-prev-" + this.id, this.$fullscreen).css({
					visibility: 0 ==
						this.curElem ? "hidden" : "visible"
				}), b(".html5gallery-fullscreen-next-" + this.id, this.$fullscreen).css({
					visibility: this.curElem == this.elemArray.length - 1 ? "hidden" : "visible"
				})) : (b(".html5gallery-left-" + this.id, this.$gallery).css({
					visibility: 0 == this.curElem ? "hidden" : "visible"
				}), b(".html5gallery-right-" + this.id, this.$gallery).css({
					visibility: this.curElem == this.elemArray.length - 1 ? "hidden" : "visible"
				})));
				this.options.socialurlforeach && this.createSocialMedia();
				!this.isFullscreen && this.options.showcarousel && (b("#html5gallery-tn-" +
					this.id + "-" + this.curElem, this.$gallery).removeClass("html5gallery-tn-" + this.id).addClass("html5gallery-tn-selected-" + this.id), !this.options.notupdatecarousel && !this.disableupdatecarousel && this.carouselHighlight(this.curElem));
				if (this.options.showtitle || this.options.lightboxshowtitle || this.options.lightboxshowdescription) {
					a = this.elemArray[this.curElem][7];
					var f = this.elemArray[this.curElem][8];
					this.options.shownumbering && (a = this.options.numberingformat.replace("%NUM", this.curElem + 1).replace("%TOTAL",
						this.elemArray.length) + " " + a);
					if (this.isFullscreen) {
						var j = "";
						this.options.lightboxshowtitle && a && (j += a);
						this.options.lightboxshowdescription && f && (j += "<div class='html5gallery-fullscreen-description-" + this.id + "'>" + f + "</div>");
						b(".html5gallery-fullscreen-title-" + this.id, this.$fullscreen).html(j)
					} else this.options.showtitle && (j = "", a && (j += "<div class='html5gallery-title-text-" + this.id + "'>" + a + "</div>"), this.options.showdescription && f && (j += "<div class='html5gallery-description-text-" + this.id + "'>" + f + "</div>"),
						b(".html5gallery-title-" + this.id, this.$gallery).html(j));
					(!this.options.titleoverlay || !this.options.titleautohide) && b(".html5gallery-title-" + this.id, this.$gallery).show()
				}
				a = this.elemArray[this.curElem][9];
				if (!(0 > a)) {
					!this.isFullscreen && c ? "always" == this.options.showimagetoolbox ? ("mouseover" == this.options.imagetoolboxmode || "show" == this.options.imagetoolboxmode) && this.showimagetoolbox(a) : "image" == this.options.showimagetoolbox && 1 != a && this.hideimagetoolbox() : "show" == this.options.imagetoolboxmode ? this.showimagetoolbox(a) :
						this.hideimagetoolbox();
					this.onChange();
					c = b(".html5gallery-elem-" + this.id, l);
					c.find("iframe").each(function() {
						b(this).attr("src", "")
					});
					c.find("video").each(function() {
						b(this).attr("src", "")
					});
					this.isVideoPlaying = this.disableTouchSwipe = !1;
					d = this.options.autoplayvideo || this.options.playvideoonclick && d || e;
					var l = this.isFullscreen ? this.$fullscreen : this.$gallery;
					this.showingPoster = !1;
					!this.options.donotuseposter && (5 == a || 6 == a || 7 == a || 8 == a || 9 == a || 10 == a || 11 == a) && !d && this.elemArray[this.curElem][12] ? (this.showingPoster = !0, this.showPoster()) : (b(".html5gallery-video-play-" + this.id, l).length && b(".html5gallery-video-play-" + this.id, l).remove(), 1 == a ? this.showImage() : (this.options.hidetitlewhenvideoisplaying && b(".html5gallery-title-" + this.id, l).hide(), 5 == a || 6 == a || 7 == a || 8 == a ? this.showVideo(d, e) : 9 == a ? this.showYoutube(d) : 10 == a ? this.showVimeo(d) : 11 == a ? this.showEmbedVideo(d) : 2 == a ? this.showSWF() : 12 == a && this.showIframe()));
					this.checkMK();
					this.prevElem in this.elemArray && 1 == this.elemArray[this.prevElem][9] && ((new Image).src = this.elemArray[this.prevElem][2]);
					this.nextElem in this.elemArray && 1 == this.elemArray[this.nextElem][9] && ((new Image).src = this.elemArray[this.nextElem][2]);
					this.prevElem in this.elemArray && (!this.options.autoplayvideo && this.elemArray[this.prevElem][12]) && ((new Image).src = this.elemArray[this.prevElem][12]);
					this.nextElem in this.elemArray && (!this.options.autoplayvideo && this.elemArray[this.nextElem][12]) && ((new Image).src = this.elemArray[this.nextElem][12]);
					this.curElem == this.elemArray.length - 1 && this.looptimes++;
					var g = this;
					if ((1 == a || this.showingPoster) &&
						!this.isPaused && 1 < this.elemArray.length && (!this.options.loop || this.looptimes < this.options.loop)) e = this.elemArray[this.curElem][16] ? this.elemArray[this.curElem][16] : this.options.slideshowinterval, this.firstrun && this.options.setfirstslideshowinterval && (e = this.options.firstslideshowinterval), this.slideshowTimeout.setInterval(e), this.slideshowTimeout.start(), this.isFullscreen ? b(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
						width: 0
					}) : b(".html5gallery-timer-" + this.id, this.$gallery).css({
						width: 0
					});
					this.options.loop && this.looptimes >= this.options.loop && (this.looptimes = 0, this.pauseGallery());
					a = this.elemArray[this.curElem][9];
					(this.elemArray[this.curElem][5] || (this.options.lightbox || this.elemArray[this.curElem][22]) && !this.isFullscreen) && (!this.options.linkonlyonvideo || !(5 == a || 6 == a || 7 == a || 8 == a)) ? (c.css({
						cursor: "pointer"
					}), c.off("click").on("click", function() {
						(g.options.lightbox || g.elemArray[g.curElem][22]) && !g.isFullscreen ? g.goFullscreen() : g.elemArray[g.curElem][5] && (g.elemArray[g.curElem][6] ?
							window.open(g.elemArray[g.curElem][5], g.elemArray[g.curElem][6]) : window.open(g.elemArray[g.curElem][5]))
					})) : (c.css({
						cursor: ""
					}), c.off("click"))
				}
			},
			showImage: function() {
				var a = b(".html5gallery-elem-" + this.id, this.isFullscreen ? this.$fullscreen : this.$gallery);
				$preloading = "" === a.html() ? b("<div class='html5gallery-loading-center-" + this.id + "'></div>").appendTo(a) : b("<div class='html5gallery-loading-" + this.id + "'></div>").appendTo(a);
				var c = this,
					d = new Image;
				b(d).on("load", function() {
					$preloading.remove();
					c.elemArray[c.curElem][10] =
						this.width;
					c.elemArray[c.curElem][11] = this.height;
					var d;
					if (c.isFullscreen) {
						var e = c.elemArray[c.curElem][17] ? Math.min(c.elemArray[c.curElem][17], c.fullscreenWidth) : c.fullscreenWidth;
						d = c.elemArray[c.curElem][18] ? Math.min(c.elemArray[c.curElem][18], c.fullscreenHeight) : c.fullscreenHeight;
						d = Math.min(e / this.width, d / this.height);
						d = 1 < d ? 1 : d
					} else d = "fill" == c.options.resizemode ? Math.max(c.options.width / this.width, c.options.height / this.height) : Math.min(c.options.width / this.width, c.options.height / this.height);
					e = Math.round(d * this.width);
					d = Math.round(d * this.height);
					var j = c.isFullscreen ? e : c.options.width,
						l = c.isFullscreen ? d : c.options.height,
						g = Math.round(j / 2 - e / 2),
						k = Math.round(l / 2 - d / 2);
					c.isFullscreen && c.adjustFullscreen(j, l);
					a.css({
						width: j,
						height: l
					});
					e = b("<div class='html5gallery-elem-img-" + c.id + "' style='display:block; position:absolute; overflow:hidden; width:" + j + "px; height:" + l + "px; left:0px; margin-left:" + (c.options.slideshadow && !c.isFullscreen ? 4 : 0) + "px; top:0px; margin-top:" + (c.options.slideshadow && !c.isFullscreen ?
						4 : 0) + "px;'><img alt='" + c.html2Text(c.elemArray[c.curElem][25]) + "'" + (c.options.addimgtitle ? " title='" + c.html2Text(c.elemArray[c.curElem][7]) + "'" : "") + " class='html5gallery-elem-image html5gallery-elem-image-" + c.id + "' style='border:none; position:absolute; filter:inherit; padding:0px; margin:0px; left:" + g + "px; top:" + k + "px; max-width:none; max-height:none; width:" + e + "px; height:" + d + "px;' src='" + c.elemArray[c.curElem][2] + "' />" + c.options.watermarkcode + "</div>");
					d = b(".html5gallery-elem-img-" +
						c.id, a);
					d.length ? (a.prepend(e), a.html5boxTransition(c.id, d, e, {
						effect: c.options.effect,
						easing: c.options.easing,
						duration: c.options.duration,
						direction: c.curElem >= c.savedElem,
						slide: c.options.slide
					}, function() {})) : a.html(e);
					c.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Image", "Play", c.elemArray[c.curElem][2]]);
					c.checkMK()
				});
				b(d).on("error", function() {
					$preloading.remove();
					c.isFullscreen && c.adjustFullscreen(c.options.width, c.options.height);
					a.html("<div class='html5gallery-elem-error-" +
						c.id + "' style='display:block; position:absolute; overflow:hidden; text-align:center; width:" + c.options.width + "px; left:0px; top:" + Math.round(c.options.height / 2 - 10) + "px; margin:4px;'><div class='html5gallery-error-" + c.id + "'>The requested content cannot be found</div>");
					c.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Image", "Error", c.elemArray[c.curElem][2]])
				});
				d.src = this.elemArray[this.curElem][2]
			},
			adjustFullscreen: function(a, c, d) {
				var e = b(window).width();
				this.fullscreenWidth =
					e - 2 * this.fullscreenMargin - 2 * this.fullscreenOutsideMargin;
				var f = b(window).height();
				this.fullscreenHeight = f - 2 * this.fullscreenMargin - this.fullscreenBarH - 2 * this.fullscreenOutsideMargin;
				var j = Math.max(f, b(document).height()),
					l = this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : this.fullscreenWidth,
					g = this.elemArray[this.curElem][18] ? Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) : this.fullscreenHeight,
					l = Math.min(l / a, g / c);
				1 > l && (a *= l, c *= l);
				f =
					b(window).scrollTop() + Math.round((f - (c + 2 * this.fullscreenMargin + this.fullscreenBarH)) / 2);
				b(".html5gallery-fullscreen-" + this.id).css({
					width: e + "px",
					height: j + "px"
				});
				b(".html5gallery-fullscreen-title-" + this.id, this.$fullscreen).css({
					width: a - 2 * this.fullscreenMargin - 72
				});
				d ? (b(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).css({
					width: a + 2 * this.fullscreenMargin,
					height: c + 2 * this.fullscreenMargin + this.fullscreenBarH,
					top: f
				}), b(".html5gallery-fullscreen-elem-" + this.id, this.$fullscreen).css({
					width: a + 2 *
						this.fullscreenMargin,
					height: c + 2 * this.fullscreenMargin
				}), b(".html5gallery-fullscreen-elem-wrapper-" + this.id, this.$fullscreen).css({
					width: a,
					height: c
				}), b(".html5gallery-fullscreen-bar-" + this.id, this.$fullscreen).css({
					width: a + 2 * this.fullscreenMargin
				})) : (b(".html5gallery-fullscreen-box-" + this.id, this.$fullscreen).animate({
					width: a + 2 * this.fullscreenMargin,
					height: c + 2 * this.fullscreenMargin + this.fullscreenBarH,
					top: f
				}, "slow"), b(".html5gallery-fullscreen-elem-" + this.id, this.$fullscreen).animate({
					width: a + 2 * this.fullscreenMargin,
					height: c + 2 * this.fullscreenMargin
				}, "slow"), b(".html5gallery-fullscreen-elem-wrapper-" + this.id, this.$fullscreen).animate({
					width: a,
					height: c
				}, "slow"), b(".html5gallery-fullscreen-bar-" + this.id, this.$fullscreen).animate({
					width: a + 2 * this.fullscreenMargin
				}, "slow"));
				b(".html5gallery-fullscreen-next-" + this.id, this.$fullscreen).css({
					top: Math.round(c / 2)
				});
				b(".html5gallery-fullscreen-prev-" + this.id, this.$fullscreen).css({
					top: Math.round(c / 2)
				});
				b(".html5gallery-fullscreen-play-" + this.id, this.$fullscreen).css("display",
					this.isPaused && 1 < this.elemArray.length && 1 == this.elemArray[this.curElem][9] ? "block" : "none");
				b(".html5gallery-fullscreen-pause-" + this.id, this.$fullscreen).css("display", this.isPaused || 1 >= this.elemArray.length || 1 != this.elemArray[this.curElem][9] ? "none" : "block");
				b(".html5gallery-elem-" + this.id, this.$fullscreen).css({
					width: a,
					height: c
				});
				b(".html5gallery-fullscreen-timer-" + this.id, this.$fullscreen).css({
					top: String(c - 4) + "px"
				});
				b(".html5gallery-elem-video-" + this.id, this.$fullscreen).css({
					width: a + "px",
					height: c +
						"px"
				});
				b(".html5gallery-elem-video-container-" + this.id, this.$fullscreen).css({
					width: "100%",
					height: "100%"
				});
				b(".html5gallery-elem-video-container-" + this.id, this.$fullscreen).find("video").css({
					width: "100%",
					height: "100%"
				});
				b("#html5gallery-elem-video-" + this.id, this.$fullscreen).css({
					width: a + "px",
					height: c + "px"
				});
				b("#html5gallery-elem-video-" + this.id, this.$fullscreen).attr("width", a);
				b("#html5gallery-elem-video-" + this.id, this.$fullscreen).attr("height", c);
				b(".html5gallery-elem-video-" + this.id, this.$fullscreen).find("iframe").attr("width",
					a);
				b(".html5gallery-elem-video-" + this.id, this.$fullscreen).find("iframe").attr("height", c);
				b("#html5gallery-elem-video-" + this.id, this.$fullscreen).find("iframe").attr("width", a);
				b("#html5gallery-elem-video-" + this.id, this.$fullscreen).find("iframe").attr("height", c);
				b(".html5gallery-elem-iframe-" + this.id, this.$fullscreen).css({
					width: a + "px",
					height: c + "px"
				});
				b(".html5gallery-elem-iframe-" + this.id, this.$fullscreen).find("iframe").attr("width", a);
				b(".html5gallery-elem-iframe-" + this.id, this.$fullscreen).find("iframe").attr("height",
					c)
			},
			showPoster: function() {
				var a = this.isFullscreen ? this.$fullscreen : this.$gallery,
					c = b(".html5gallery-elem-" + this.id, a);
				$preloading = "" === c.html() ? b("<div class='html5gallery-loading-center-" + this.id + "'></div>").appendTo(c) : b("<div class='html5gallery-loading-" + this.id + "'></div>").appendTo(c);
				var d = this,
					e = this.elemArray[this.curElem][10],
					f = this.elemArray[this.curElem][11],
					j = new Image;
				b(j).on("load", function() {
					$preloading.remove();
					d.elemArray[d.curElem][23] = this.width;
					d.elemArray[d.curElem][24] = this.height;
					var j, g, k;
					d.isFullscreen ? (g = d.elemArray[d.curElem][17] ? Math.min(d.elemArray[d.curElem][17], d.fullscreenWidth) : Math.min(e, d.fullscreenWidth), k = d.elemArray[d.curElem][18] ? Math.min(d.elemArray[d.curElem][18], d.fullscreenHeight) : Math.min(f, d.fullscreenHeight), j = Math.max(g / this.width, k / this.height), j = 1 < j ? 1 : j) : (j = "fill" == d.options.resizemode ? Math.max(d.options.width / this.width, d.options.height / this.height) : Math.min(d.options.width / this.width, d.options.height / this.height), g = d.options.width, k = d.options.height);
					var m = Math.round(j * this.width);
					j = Math.round(j * this.height);
					var n = Math.round(g / 2 - m / 2),
						s = Math.round(k / 2 - j / 2);
					d.isFullscreen && d.adjustFullscreen(g, k);
					c.css({
						width: g,
						height: k
					});
					g = b("<div class='html5gallery-elem-img-" + d.id + "' style='display:block; position:absolute; overflow:hidden; width:" + g + "px; height:" + k + "px; left:0px; margin-left:" + (d.options.slideshadow && !d.isFullscreen ? 4 : 0) + "px; top:0px; margin-top:" + (d.options.slideshadow && !d.isFullscreen ? 4 : 0) + "px;'><img alt='" + d.html2Text(d.elemArray[d.curElem][25]) +
						"'" + (d.options.addimgtitle ? " title='" + d.html2Text(d.elemArray[d.curElem][7]) + "'" : "") + " class='html5gallery-elem-image html5gallery-elem-image-" + d.id + "' style='border:none; position:absolute; filter:inherit; padding:0px; margin:0px; left:" + n + "px; top:" + s + "px; max-width:none; max-height:none; width:" + m + "px; height:" + j + "px;' src='" + d.elemArray[d.curElem][12] + "' />" + d.options.watermarkcode + "</div>");
					k = b(".html5gallery-elem-img-" + d.id, c);
					k.length ? (c.prepend(g), c.html5boxTransition(d.id,
						k, g, {
							effect: d.options.effect,
							easing: d.options.easing,
							duration: d.options.duration,
							direction: d.curElem >= d.savedElem,
							slide: d.options.slide
						},
						function() {})) : c.html(g);
					if (!b(".html5gallery-video-play-" + d.id, a).length) b("<div class='html5gallery-video-play-" + d.id + "' style='position:absolute;display:block;cursor:pointer;top:50%;left:50%;width:64px;height:64px;margin-left:-32px;margin-top:-32px;background:url(\"" + d.options.playvideoimage + "\") no-repeat center center;'></div>").appendTo(c).off(d.eClick).on(d.eClick,
						function() {
							d.options.hidetitlewhenvideoisplaying && b(".html5gallery-title-" + d.id, d.$gallery).hide();
							b(this).remove();
							d.slideshowTimeout.stop();
							b(".html5gallery-timer-" + d.id, d.$gallery).css({
								width: 0
							});
							d.showingPoster = !1;
							var a = d.elemArray[d.curElem][9];
							5 == a || 6 == a || 7 == a || 8 == a ? d.showVideo(!0) : 9 == a ? d.showYoutube(!0) : 10 == a ? d.showVimeo(!0) : 11 == a && d.showEmbedVideo(!0);
							d.checkMK()
						});
					d.checkMK()
				});
				b(j).on("error", function() {
					$preloading.remove();
					d.isFullscreen && d.adjustFullscreen(d.options.width, d.options.height);
					c.html("<div class='html5gallery-elem-error-" + d.id + "' style='display:block; position:absolute; overflow:hidden; text-align:center; width:" + d.options.width + "px; left:0px; top:" + Math.round(d.options.height / 2 - 10) + "px; margin:4px;'><div class='html5gallery-error-" + d.id + "'>The requested content cannot be found</div>");
					d.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Image", "Error", d.elemArray[d.curElem][12]])
				});
				j.src = this.elemArray[this.curElem][12]
			},
			getFlashMovieObject: function(a) {
				return null;
			},
			playVideo: function() {
				var a = this.elemArray[this.curElem][9];
				if (5 == a || 6 == a || 7 == a || 8 == a) this.isHTML5 && 0 < b("#html5gallery-elem-html5-video-" + this.id).length ? b("#html5gallery-elem-html5-video-" + this.id, this.container).get(0).play() : (a = this.getFlashMovieObject("html5gallery-elem-video-flash-" + this.id)) && "function" === typeof a.playVideo && a.playVideo()
			},
			stopAllPlaying: function() {
				b("video").length && b("video").get(0).pause();
				b("audio").length && b("audio").get(0).pause();
				if ("undefined" !== typeof html5GalleryObjects && html5GalleryObjects && html5GalleryObjects.objects)
					for (var a = 0; a < html5GalleryObjects.objects.length; a++)
						if (html5GalleryObjects.objects[a].id != this.id) try {
							html5GalleryObjects.objects[a].ytPlayer && "function" == typeof html5GalleryObjects.objects[a].ytPlayer.pauseVideo && html5GalleryObjects.objects[a].ytPlayer.pauseVideo(), html5GalleryObjects.objects[a].vimeoPlayer &&
								html5GalleryObjects.objects[a].vimeoPlayer.api("pause")
						} catch (c) {}
			},
			pauseVideo: function() {
				var a = this.elemArray[this.curElem][9];
				5 == a || 6 == a || 7 == a || 8 == a ? this.isHTML5 && 0 < b("#html5gallery-elem-html5-video-" + this.id).length ? b("#html5gallery-elem-html5-video-" + this.id, this.container).get(0).pause() : (a = this.getFlashMovieObject("html5gallery-elem-video-flash-" + this.id)) && "function" === typeof a.pauseVideo && a.pauseVideo() : 9 == a ? this.ytPlayer && "function" == typeof this.ytPlayer.pauseVideo && this.ytPlayer.pauseVideo() :
					10 == a ? this.vimeoPlayer && this.vimeoPlayer.api("pause") : b("video", this.container).length && b("video", this.container).get(0).pause()
			},
			showVideo: function(a, c) {
				this.options.stopallplaying && this.stopAllPlaying();
				this.isVideoPlaying = !0;
				a && this.options.autoslideandplayafterfirstplayed && (this.options.autoplayvideo = !0, this.isPaused = !1);
				this.disableTouchSwipe = !0;
				var d = this.isFullscreen ? this.$fullscreen : this.$gallery,
					e = this.elemArray[this.curElem][10],
					f = this.elemArray[this.curElem][11];
				if (this.isFullscreen) {
					var e =
						this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : Math.min(e, this.fullscreenWidth),
						j = this.elemArray[this.curElem][18] ? Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) : Math.min(f, this.fullscreenHeight);
					this.adjustFullscreen(e, j);
					f = e;
					e = j
				} else b(".html5gallery-elem-" + this.id, this.$gallery).css({
					width: this.options.width,
					height: this.options.height
				}), f = this.options.width, e = this.options.height;
				j = -1;
				c && b(".html5gallery-elem-" + this.id, d).find("video").length &&
					(j = b(".html5gallery-elem-" + this.id, d).find("video:first").get(0).currentTime);
				b(".html5gallery-elem-" + this.id, d).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div class='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + f + "px;height:" + e + "px;'></div>" + this.options.watermarkcode);
				this.isHTML5 = !1;
				if (this.options.isIE678 ||
					this.options.isIE9 && this.options.useflashonie9 || this.options.isIE10 && this.options.useflashonie10 || this.options.isIE11 && this.options.useflashonie11) this.isHTML5 = !1;
				else if (this.options.isMobile) this.isHTML5 = !0;
				else if ((this.options.html5player || !this.options.flashInstalled) && this.options.html5VideoSupported)
					if (this.isHTML5 = !0, this.options.isFirefox || this.options.isOpera)
						if (!this.elemArray[this.curElem][4] && !this.elemArray[this.curElem][3] && (!this.options.canplaymp4 || this.options.useflashformp4onfirefox)) this.isHTML5 = !1;
				if (this.isHTML5) {
					var l = this.elemArray[this.curElem][2],
						g = this.elemArray[this.curElem][13];
					if (this.options.isFirefox || this.options.isOpera) this.elemArray[this.curElem][4] ? l = this.elemArray[this.curElem][4] : this.elemArray[this.curElem][3] && (l = this.elemArray[this.curElem][3]), this.elemArray[this.curElem][15] ? g = this.elemArray[this.curElem][15] : this.elemArray[this.curElem][14] && (g = this.elemArray[this.curElem][14]);
					this.embedHTML5Video(b(".html5gallery-elem-video-" + this.id, d), f, e, l, g, a, j, c)
				} else j = this.elemArray[this.curElem][2],
					"/" != j.charAt(0) && ("http:" != j.substring(0, 5) && "https:" != j.substring(0, 6)) && (j = this.options.htmlfolder + j), l = "", this.elemArray[this.curElem][13] && (l = this.elemArray[this.curElem][13], "/" != l.charAt(0) && ("http:" != l.substring(0, 5) && "https:" != l.substring(0, 6)) && (l = this.options.htmlfolder + l)), f = {
						width: f,
						height: e,
						hidecontrols: this.options.videohidecontrols ? "1" : "0",
						hideplaybutton: "0",
						videofile: j,
						hdfile: l,
						ishd: this.isHd ? "1" : "0",
						autoplay: a ? "1" : "0",
						errorcss: ".html5box-error" + this.options.errorcss,
						id: this.id
					},
					this.elemArray[this.curElem][5] && (f.clickthrough = this.elemArray[this.curElem][5], this.elemArray[this.curElem][6] && (f.clickthroughtarget = this.elemArray[this.curElem][6])), this.embedFlash(b(".html5gallery-elem-video-" + this.id, d), "100%", "100%", this.options.jsfolder + "html5boxplayer.swf", "transparent", f, "html5gallery-elem-video-flash-" + this.id);
				this.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][2]])
			},
			showSWF: function() {
			},
			prepareYoutubeHref: function(a) {
				var b = a.match(/(\?v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/)[2],
					b = "https://www." + (-1 !== a.indexOf("youtube-nocookie.com") ? "youtube-nocookie.com" : "youtube.com") + "/embed/" + b;
				a = this.getYoutubeParams(a);
				var d = !0,
					e;
				for (e in a) d ? (b += "?", d = !1) : b += "&", b += e + "=" + a[e];
				return b
			},
			getYoutubeParams: function(a) {
				var b = {};
				if (0 > a.indexOf("?")) return b;
				a = a.substring(a.indexOf("?") + 1).split("&");
				for (var d = 0; d < a.length; d++) {
					var e = a[d].split("=");
					e && (2 == e.length && "v" != e[0].toLowerCase()) && (b[e[0].toLowerCase()] = e[1])
				}
				return b
			},
			initYoutubeApi: function() {
				var a, b = !1,
					d = !1;
				for (a = 0; a < this.elemArray.length; a++) 9 ==
					this.elemArray[a][9] && -1 === this.elemArray[a][2].indexOf("youtube-nocookie.com") ? b = !0 : 10 == this.elemArray[a][9] && (d = !0);
				b && (a = document.createElement("script"), a.src = "https://www.youtube.com/iframe_api", b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b));
				d && (a = document.createElement("script"), a.src = this.options.jsfolder + "froogaloop2.min.js", b = document.getElementsByTagName("script")[0], b.parentNode.insertBefore(a, b))
			},
			showEmbedVideo: function(a) {
				this.options.stopallplaying && this.stopAllPlaying();
				this.isVideoPlaying = !0;
				a && this.options.autoslideandplayafterfirstplayed && (this.options.autoplayvideo = !0, this.isPaused = !1);
				var c = this.isFullscreen ? this.$fullscreen : this.$gallery,
					d = this.elemArray[this.curElem][10],
					e = this.elemArray[this.curElem][11];
				if (this.isFullscreen) {
					var d = this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : Math.min(d, this.fullscreenWidth),
						f = this.elemArray[this.curElem][18] ? Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) :
						Math.min(e, this.fullscreenHeight);
					this.adjustFullscreen(d, f);
					e = d;
					d = f
				} else b(".html5gallery-elem-" + this.id, this.$gallery).css({
					width: this.options.width,
					height: this.options.height
				}), e = this.options.width, d = this.options.height;
				f = this.elemArray[this.curElem][2];
				b(".html5gallery-elem-" + this.id, c).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div id='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + (this.options.slideshadow && !this.isFullscreen ?
					4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + e + "px;height:" + d + "px;'></div>" + this.options.watermarkcode);
				f.match(/\:\/\/.*(dai\.ly)/i) && (f = "https://www.dailymotion.com/embed/video/" + f.match(/(dai\.ly\/)([a-zA-Z0-9\-\_]+)/)[2]);
				a && (f = 0 > f.indexOf("?") ? f + "?autoplay=1" : f + "&autoplay=1");
				b("#html5gallery-elem-video-" + this.id, c).html("<iframe width='" + e + "' height='" + d + "' src='" + f + "' frameborder='0' allow='autoplay' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
				this.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][2]])
			},
			showYoutube: function(a) {
				this.options.stopallplaying && this.stopAllPlaying();
				this.isVideoPlaying = !0;
				a && this.options.autoslideandplayafterfirstplayed && (this.options.autoplayvideo = !0, this.isPaused = !1);
				var c = this.isFullscreen ? this.$fullscreen : this.$gallery,
					d = this.elemArray[this.curElem][10],
					e = this.elemArray[this.curElem][11];
				if (this.isFullscreen) {
					var d = this.elemArray[this.curElem][17] ?
						Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : Math.min(d, this.fullscreenWidth),
						f = this.elemArray[this.curElem][18] ? Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) : Math.min(e, this.fullscreenHeight);
					this.adjustFullscreen(d, f);
					e = d;
					d = f
				} else b(".html5gallery-elem-" + this.id, this.$gallery).css({
					width: this.options.width,
					height: this.options.height
				}), e = this.options.width, d = this.options.height;
				f = this.elemArray[this.curElem][2];
				b(".html5gallery-elem-" + this.id, c).html("<div class='html5gallery-loading-center-" +
					this.id + "'></div><div id='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + e + "px;height:" + d + "px;'></div>" + this.options.watermarkcode);
				var j = -1 !== f.indexOf("youtube-nocookie.com"),
					l = this;
				if (!ASYouTubeIframeAPIReady && !j && (ASYouTubeTimeout += 100, 3E3 > ASYouTubeTimeout)) {
					setTimeout(function() {
						l.showYoutube(a)
					}, 100);
					return
				}
				ASYouTubeIframeAPIReady &&
					!this.options.isMobile && !this.options.isIE6 && !this.options.isIE7 && !j ? (c = this.elemArray[this.curElem][2].match(/(\?v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/)[2], f = function() {}, a && (f = function(a) {
						a.target.playVideo()
					}), j = this.getYoutubeParams(this.elemArray[this.curElem][2]), j = b.extend({
						html5: 1,
						controls: l.options.videohidecontrols ? "0" : "1",
						showinfo: l.options.videohidecontrols ? "0" : "1",
						autoplay: a ? 1 : 0,
						rel: 0,
						wmode: "transparent"
					}, j), this.ytPlayer = new YT.Player("html5gallery-elem-video-" + this.id, {
						width: e,
						height: d,
						videoId: c,
						playerVars: j,
						events: {
							onReady: f,
							onStateChange: function(a) {
								a.data == YT.PlayerState.ENDED && (l.onVideoEnd(), l.isPaused || l.slideRun(-1))
							}
						}
					})) : (f = this.prepareYoutubeHref(f), a && (f = 0 > f.indexOf("?") ? f + "?autoplay=1" : f + "&autoplay=1"), f = 0 > f.indexOf("?") ? f + "?wmode=transparent&rel=0" : f + "&wmode=transparent&rel=0", l.options.videohidecontrols && (f += "&controls=0&showinfo=0"), b("#html5gallery-elem-video-" + this.id, c).html("<iframe width='" + e + "' height='" + d + "' src='" + f + "' frameborder='0' allow='autoplay' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"));
				this.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][2]])
			},
			showVimeo: function(a) {
				this.options.stopallplaying && this.stopAllPlaying();
				this.isVideoPlaying = !0;
				a && this.options.autoslideandplayafterfirstplayed && (this.options.autoplayvideo = !0, this.isPaused = !1);
				var c = this;
				if ("function" !== typeof $f && (ASVimeoTimeout += 100, 3E3 > ASVimeoTimeout)) {
					setTimeout(function() {
						c.showVimeo(a)
					}, 100);
					return
				}
				var d = this.isFullscreen ? this.$fullscreen : this.$gallery,
					e = this.elemArray[this.curElem][10],
					f = this.elemArray[this.curElem][11];
				if (this.isFullscreen) {
					var e = this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : Math.min(e, this.fullscreenWidth),
						j = this.elemArray[this.curElem][18] ? Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) : Math.min(f, this.fullscreenHeight);
					this.adjustFullscreen(e, j);
					f = e;
					e = j
				} else b(".html5gallery-elem-" + this.id, this.$gallery).css({
						width: this.options.width,
						height: this.options.height
					}),
					f = this.options.width, e = this.options.height;
				j = this.elemArray[this.curElem][2];
				j = 0 > j.indexOf("?") ? j + "?" : j + "&";
				j = a && !this.options.isAndroid ? j + "autoplay=1" : j + "autoplay=0";
				j += "&api=1&player_id=html5gallery_vimeo_" + this.id;
				b(".html5gallery-elem-" + this.id, d).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div class='html5gallery-elem-video-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;left:" + (this.options.slideshadow &&
					!this.isFullscreen ? 4 : 0) + "px;width:" + f + "px;height:" + e + "px;'></div>" + this.options.watermarkcode);
				b(".html5gallery-elem-video-" + this.id, d).html("<iframe id='html5gallery_vimeo_" + this.id + "' width='" + f + "' height='" + e + "' src='" + j + "' frameborder='0' allow='autoplay' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
				"function" === typeof $f && (a && !this.options.isAndroid) && (d = b("#html5gallery_vimeo_" + this.id)[0], c = this, c.vimeoPlayer = $f(d), c.vimeoPlayer.addEvent("ready", function() {
					c.vimeoPlayer.addEvent("finish",
						function() {
							c.onVideoEnd();
							c.isPaused || c.slideRun(-1)
						})
				}));
				this.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Video", "Play", this.elemArray[this.curElem][2]])
			},
			showIframe: function() {
				var a = this.isFullscreen ? this.$fullscreen : this.$gallery,
					c = this.elemArray[this.curElem][10],
					d = this.elemArray[this.curElem][11];
				if (this.isFullscreen) {
					var c = this.elemArray[this.curElem][17] ? Math.min(this.elemArray[this.curElem][17], this.fullscreenWidth) : Math.min(c, this.fullscreenWidth),
						e = this.elemArray[this.curElem][18] ?
						Math.min(this.elemArray[this.curElem][18], this.fullscreenHeight) : Math.min(d, this.fullscreenHeight);
					this.adjustFullscreen(c, e);
					d = c;
					c = e
				} else b(".html5gallery-elem-" + this.id, this.$gallery).css({
					width: this.options.width,
					height: this.options.height
				}), d = this.options.width, c = this.options.height;
				e = this.elemArray[this.curElem][2];
				b(".html5gallery-elem-" + this.id, a).html("<div class='html5gallery-loading-center-" + this.id + "'></div><div class='html5gallery-elem-iframe-" + this.id + "' style='display:block;position:absolute;overflow:hidden;top:" +
					(this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;left:" + (this.options.slideshadow && !this.isFullscreen ? 4 : 0) + "px;width:" + d + "px;height:" + c + "px;'></div>" + this.options.watermarkcode);
				b(".html5gallery-elem-iframe-" + this.id, a).html("<iframe id='html5gallery-iframe-" + this.id + "' width='" + d + "' height='" + c + "' src='" + e + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
				this.options.googleanalyticsaccount && window._gaq && window._gaq.push(["_trackEvent", "Iframe", "Play",
					this.elemArray[this.curElem][2]
				])
			},
			checkType: function(a) {
				return !a ? -1 : a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i) ? 1 : a.match(/[^\.]\.(swf)\s*$/i) ? 2 : a.match(/[^\.]\.(mp3)\s*$/i) ? 3 : a.match(/[^\.]\.(pdf)\s*$/i) ? 4 : a.match(/\.(flv)(.*)?$/i) ? 5 : a.match(/\.(mp4|m4v)(.*)?$/i) ? 6 : a.match(/\.(ogv|ogg)(.*)?$/i) ? 7 : a.match(/\.(webm)(.*)?$/i) ? 8 : a.match(/\:\/\/.*(youtube\.com)/i) || a.match(/\:\/\/.*(youtu\.be)/i) || a.match(/\:\/\/.*(youtube-nocookie\.com)/i) ? 9 : a.match(/\:\/\/.*(vimeo\.com)/i) ? 10 : a.match(/\:\/\/.*(dailymotion\.com)/i) ||
					a.match(/\:\/\/.*(dai\.ly)/i) ? 11 : 1
			},
			onChange: function() {
				b(window).trigger("html5gallery.onchange", [this.id, this.curElem]);
				if (this.options.onchange && window[this.options.onchange] && "function" == typeof window[this.options.onchange]) window[this.options.onchange](this.elemArray[this.curElem].concat([this.id]))
			},
			onSlideshowOver: function() {
				b(window).trigger("html5gallery.onslideshowover", [this.id, this.curElem]);
				if (this.options.onslideshowover && window[this.options.onslideshowover] && "function" == typeof window[this.options.onslideshowover]) window[this.options.onslideshowover](this.elemArray[this.curElem])
			},
			onThumbOver: function(a) {
				b(window).trigger("html5gallery.onthumbover", [this.id, a]);
				if (this.options.onthumbover && window[this.options.onthumbover] && "function" == typeof window[this.options.onthumbover]) window[this.options.onthumbover](this.elemArray[a])
			},
			onThumbClick: function(a) {
				b(window).trigger("html5gallery.onthumbclick", [this.id, a]);
				if (this.options.onthumbclick && window[this.options.onthumbclick] && "function" == typeof window[this.options.onthumbclick]) window[this.options.onthumbclick](this.elemArray[a].concat([this.id]));
				this.options.thumbjumptotop && (this.options.thumbjumpanchor && 0 < this.options.thumbjumpanchor.length && 0 < b("#" + this.options.thumbjumpanchor).length ? (a = b("#" + this.options.thumbjumpanchor).offset().top, b(window).scrollTop(a)) : 0 <= this.options.thumbjumpposition ? b(window).scrollTop(this.options.thumbjumpposition) : (a = this.container.offset().top, a < b(window).scrollTop() && b(window).scrollTop(a)))
			},
			onVideoEnd: function() {
				b(window).trigger("html5gallery.videoend", [this.id, this.curElem]);
				if (this.options.onvideoend &&
					window[this.options.onvideoend] && "function" == typeof window[this.options.onvideoend]) window[this.options.onvideoend](this.elemArray[this.curElem]);
				this.options.reloadonvideoend ? this.slideRun(this.curElem) : this.options.loadnextonvideoend && this.slideRun(-1)
			},
			embedHTML5Video: function(a, c, d, e, f, j, l, g) {
				var k = this;
				if ((this.options.isIE11 || this.options.isIE) && this.options.usenativehtml5controlsonie || this.options.isFirefox && this.options.usenativehtml5controlsonfirefox || this.options.isIPhone && this.options.usenativehtml5controlsoniphone ||
					this.options.isIPad && this.options.usenativehtml5controlsonipad || this.options.isAndroid && this.options.usenativehtml5controlsonandroid) this.options.nativehtml5controls = !0;
				if (this.options.isIOS || this.options.isAndroid) this.options.fullscreennativecontrols = !0;
				this.options.mutevideo && (this.options.defaultvideovolume = 0);
				a.html("<div class='html5gallery-elem-video-container-" + this.id + "' style='position:relative;display:block;background-color:#000;width:100%;height:100%;'><video id='html5gallery-elem-html5-video-" +
					this.id + "' width='100%' height='100%'" + (this.options.nativehtml5controls && !this.options.videohidecontrols ? " controls" : "") + (this.options.html5videonodownload ? ' controlsList="nodownload"' : "") + (this.options.mutevideo ? " muted" : "") + (this.options.playsinline ? " playsinline" : "") + (this.options.loopvideo ? " loop" : "") + (this.options.donotuseposter && this.options.showhtml5videoposter && this.elemArray[this.curElem][12] ? ' poster="' + this.elemArray[this.curElem][12] + '"' : "") + "></div>");
				b("video", a).get(0).setAttribute("src",
					(f && this.isHd ? f : e) + (0 < l ? "#t=" + l : ""));
				!this.options.nativehtml5controls && !this.options.videohidecontrols && (b("video", a).data("src", e), b("video", a).data("hd", f), b("video", a).data("ishd", this.isHd), b("video", a).addHTML5VideoControls(this.options.skinfolder, this, "#html5gallery-elem-html5-video-" + this.id, !1, !1, this.options.defaultvideovolume, this.options.fullscreennativecontrols, this.options.html5videonodownload, null));
				this.elemArray[this.curElem][5] && (b("video", a).css({
					cursor: "pointer"
				}), b("video", a).off("click").on("click",
					function() {
						k.elemArray[k.curElem][5] && (k.elemArray[k.curElem][6] ? window.open(k.elemArray[k.curElem][5], k.elemArray[k.curElem][6]) : window.open(k.elemArray[k.curElem][5]))
					}));
				(j || g) && b("video", a).get(0).play();
				b("video", a).off("ended").on("ended", function() {
					k.onVideoEnd();
					k.isPaused || k.slideRun(-1)
				})
			},
			embedFlash: function(a, b, d, e, f, j, k) {
			}
		};
		this.each(function() {
			var a = b(this);
			k = k || {};
			for (var c in k) c.toLowerCase() !== c && (k[c.toLowerCase()] = k[c], delete k[c]);
			if ((!b(this).data("donotinit") || k && k.forceinit) && !b(this).data("inited")) {
				b(this).data("inited", 1);
				this.options = b.extend({}, k);
				var d = this;
				b.each(a.data(), function(a, b) {
					d.options[a.toLowerCase()] = b
				});
				"skin" in this.options && (this.options.skin = this.options.skin.toLowerCase());
				c = {
					skinfolder: "skins/horizontal/",
					padding: 6,
					bgcolor: "#ffffff",
					bgimage: "",
					galleryshadow: !0,
					slideshadow: !1,
					showsocialmedia: !1,
					headerpos: "top",
					showdescription: !0,
					titleoverlay: !0,
					titleautohide: !0,
					titlecss: " {color:#ffffff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; padding:10px 0px 10px 10px; background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
					titlecsslink: " a {color:#ffffff;}",
					descriptioncss: " {color:#ffffff; font-size:13px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; padding:0px 0px 10px 10px; background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
					descriptioncsslink: " a {color:#ffffff;}",
					showcarousel: !0,
					carouselmargin: 0,
					carouselbgtransparent: !1,
					carouselbgcolorstart: "#494f54",
					carouselbgcolorend: "#292c31",
					carouseltopborder: "#666666",
					carouselbottomborder: "#111111",
					thumbwidth: 64,
					thumbheight: 48,
					thumbgap: 4,
					thumbmargin: 6,
					thumbunselectedimagebordercolor: "#ffffff",
					thumbimageborder: 1,
					thumbimagebordercolor: "",
					thumbshowplayonvideo: !0,
					thumbshadow: !1,
					thumbopacity: 0.8
				};
				var h = {
						padding: 12,
						skinfolder: "skins/light/",
						bgcolor: "",
						bgimage: "",
						galleryshadow: !1,
						slideshadow: !0,
						showsocialmedia: !1,
						headerpos: "top",
						showdescription: !0,
						titleoverlay: !0,
						titleautohide: !0,
						titlecss: " {color:#ffffff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
						titlecsslink: " a {color:#ffffff;}",
						descriptioncss: " {color:#ffffff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
						descriptioncsslink: " a {color:#ffffff;}",
						showcarousel: !0,
						carouselmargin: 10,
						carouselbgtransparent: !0,
						thumbwidth: 48,
						thumbheight: 48,
						thumbgap: 8,
						thumbmargin: 12,
						thumbunselectedimagebordercolor: "#fff",
						thumbimageborder: 2,
						thumbimagebordercolor: "#fff",
						thumbshowplayonvideo: !0,
						thumbshadow: !0,
						thumbopacity: 0.8
					},
					f = {
						padding: 0,
						skinfolder: "skins/mediapage/",
						bgcolor: "",
						bgimage: "",
						galleryshadow: !1,
						slideshadow: !1,
						showsocialmedia: !1,
						headerpos: "top",
						showdescription: !0,
						titleoverlay: !0,
						titleautohide: !0,
						titlecss: " {color:#ffffff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
						titlecsslink: " a {color:#ffffff;}",
						descriptioncss: " {color:#ffffff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
						descriptioncsslink: " a {color:#ffffff;}",
						showcarousel: !0,
						carouselmargin: 24,
						carouselmultirows: !0,
						thumbrowgap: 16,
						carouselbgtransparent: !0,
						thumbwidth: 120,
						thumbheight: 60,
						thumbgap: 10,
						thumbmargin: 12,
						thumbunselectedimagebordercolor: "#fff",
						thumbimageborder: 0,
						thumbimagebordercolor: "#fff",
						thumbshowplayonvideo: !0,
						thumbshadow: !1,
						thumbopacity: 0.8,
						thumbjumptotop: !0,
						thumbshowtitle: !0,
						thumbtitlecss: "{text-align:center; color:#000; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden;}",
						thumbtitleheight: 24
					},
					j = {
						padding: 12,
						skinfolder: "skins/gallery/",
						bgcolor: "",
						bgimage: "",
						galleryshadow: !1,
						slideshadow: !0,
						showsocialmedia: !1,
						headerpos: "top",
						showdescription: !0,
						titleoverlay: !0,
						titleautohide: !0,
						titlecss: " {color:#ffffff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
						titlecsslink: " a {color:#ffffff;}",
						descriptioncss: " {color:#ffffff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 10px;  background:rgb(102, 102, 102) transparent; background: rgba(102, 102, 102, 0.6); filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; -ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#99666666, endColorstr=#99666666)'; }",
						descriptioncsslink: " a {color:#ffffff;}",
						showcarousel: !0,
						carouselmargin: 10,
						carouselbgtransparent: !0,
						thumbwidth: 120,
						thumbheight: 60,
						thumbgap: 8,
						thumbmargin: 12,
						thumbunselectedimagebordercolor: "#fff",
						thumbimageborder: 2,
						thumbimagebordercolor: "#fff",
						thumbshowplayonvideo: !0,
						thumbshadow: !0,
						thumbopacity: 0.8,
						thumbshowtitle: !0,
						thumbtitlecss: "{text-align:center; color:#000; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal;}",
						thumbtitleheight: 18
					},
					l = {
						padding: 12,
						skinfolder: "skins/gallery/",
						bgcolor: "",
						bgimage: "",
						galleryshadow: !1,
						slideshadow: !0,
						showsocialmedia: !1,
						headerpos: "bottom",
						showdescription: !0,
						titleoverlay: !1,
						titleheight: 72,
						titleautohide: !0,
						titlecss: "{color:#333;font-size:14px;font-family:Arial,Helvetica,sans-serif;overflow:hidden;text-align:center;padding:16px 8px 4px 8px;}",
						titlecsslink: "a{color:#333;}",
						descriptioncss: "{color:#333;font-size:12px;font-family:Arial,Helvetica,sans-serif;overflow:hidden;text-align:center;padding:4px 8px; }",
						descriptioncsslink: "a{color:#333;}",
						titlesmallscreen: !0,
						showcarousel: !0,
						carouselmargin: 10,
						carouselbgtransparent: !0,
						thumbwidth: 120,
						thumbheight: 60,
						thumbgap: 8,
						thumbmargin: 12,
						thumbunselectedimagebordercolor: "#fff",
						thumbimageborder: 2,
						thumbimagebordercolor: "#fff",
						thumbshowplayonvideo: !0,
						thumbshadow: !0,
						thumbopacity: 0.8,
						thumbshowtitle: !1,
						thumbtitlecss: "{text-align:center; color:#000; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal;}",
						thumbtitleheight: 18
					},
					g = {
						padding: 12,
						skinfolder: "skins/gallery/",
						bgcolor: "",
						bgimage: "",
						galleryshadow: !1,
						slideshadow: !0,
						showsocialmedia: !1,
						headerpos: "bottom",
						showdescription: !0,
						titleoverlay: !1,
						titleheight: 72,
						titleautohide: !0,
						titlecss: "{color:#333;font-size:14px;font-family:Arial,Helvetica,sans-serif;overflow:hidden;text-align:center;padding:16px 8px 4px 8px;}",
						titlecsslink: "a{color:#333;}",
						descriptioncss: "{color:#333;font-size:12px;font-family:Arial,Helvetica,sans-serif;overflow:hidden;text-align:center;padding:4px 8px; }",
						descriptioncsslink: "a{color:#333;}",
						titlesmallscreen: !0,
						showcarousel: !0,
						carouselmargin: 10,
						carouselposition: "top",
						carouselbgtransparent: !0,
						thumbwidth: 120,
						thumbheight: 60,
						thumbgap: 8,
						thumbmargin: 12,
						thumbunselectedimagebordercolor: "#fff",
						thumbimageborder: 2,
						thumbimagebordercolor: "#fff",
						thumbshowplayonvideo: !0,
						thumbshadow: !0,
						thumbopacity: 0.8,
						thumbshowtitle: !0,
						thumbtitlecss: "{text-align:center; color:#000; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal;}",
						thumbtitleheight: 18
					},
					m = {
						padding: 12,
						skinfolder: "skins/gallery/",
						bgcolor: "",
						bgimage: "",
						galleryshadow: !1,
						slideshadow: !0,
						showsocialmedia: !1,
						headerpos: "bottomoutside",
						showdescription: !0,
						titleoverlay: !1,
						titleheight: 72,
						titleautohide: !0,
						titlecss: "{color:#333;font-size:14px;font-family:Arial,Helvetica,sans-serif;overflow:hidden;text-align:center;padding:16px 8px 4px 8px;}",
						titlecsslink: "a{color:#333;}",
						descriptioncss: "{color:#333;font-size:12px;font-family:Arial,Helvetica,sans-serif;overflow:hidden;text-align:center;padding:4px 8px; }",
						descriptioncsslink: "a{color:#333;}",
						titlesmallscreen: !0,
						showcarousel: !0,
						carouselmargin: 10,
						carouselbgtransparent: !0,
						thumbwidth: 120,
						thumbheight: 60,
						thumbgap: 8,
						thumbmargin: 12,
						thumbunselectedimagebordercolor: "#fff",
						thumbimageborder: 2,
						thumbimagebordercolor: "#fff",
						thumbshowplayonvideo: !0,
						thumbshadow: !0,
						thumbopacity: 0.8,
						thumbshowtitle: !0,
						thumbtitlecss: "{text-align:center; color:#000; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal;}",
						thumbtitleheight: 18
					},
					n = {
						skinfolder: "skins/darkness/",
						padding: 12,
						bgcolor: "#444444",
						bgimage: "background.jpg",
						galleryshadow: !1,
						slideshadow: !1,
						headerpos: "bottom",
						showdescription: !1,
						titleoverlay: !1,
						titleautohide: !1,
						titlecss: " {color:#ffffff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px;}",
						titlecsslink: " a {color:#ffffff;}",
						descriptioncss: " {color:#ffffff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 0px;}",
						descriptioncsslink: " a {color:#ffffff;}",
						showcarousel: !0,
						carouselmargin: 8,
						carouselbgtransparent: !1,
						carouselbgcolorstart: "#494f54",
						carouselbgcolorend: "#292c31",
						carouseltopborder: "#666666",
						carouselbottomborder: "#111111",
						thumbwidth: 64,
						thumbheight: 48,
						thumbgap: 4,
						thumbmargin: 6,
						thumbunselectedimagebordercolor: "#ffffff",
						thumbimageborder: 1,
						thumbimagebordercolor: "",
						thumbshowplayonvideo: !0,
						thumbshadow: !1,
						thumbopacity: 0.8
					},
					s = {
						skinfolder: "skins/verticallight/",
						padding: 12,
						bgcolor: "#fff",
						bgimage: "",
						galleryshadow: !1,
						slideshadow: !1,
						headerpos: "bottom",
						showdescription: !1,
						titleoverlay: !1,
						titleautohide: !1,
						titlecss: " {color:#333; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px;}",
						titlecsslink: " a {color:#333;}",
						descriptioncss: " {color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 0px;}",
						descriptioncsslink: " a {color:#333;}",
						showcarousel: !0,
						carouselmargin: 8,
						carouselposition: "right",
						carouselposresponsive: !0,
						carouselposresponsiveonscreenwidth: 800,
						carouselheight: 280,
						carouselbgtransparent: !1,
						carouselbgcolorstart: "#fff",
						carouselbgcolorend: "#fff",
						carouseltopborder: "#fff",
						carouselbottomborder: "#fff",
						carouselhighlightbgcolorstart: "#f0f0f0",
						carouselhighlightbgcolorend: "#f0f0f0",
						carouselhighlighttopborder: "#f0f0f0",
						carouselhighlightbottomborder: "#f0f0f0",
						carouselhighlightbgimage: "",
						thumbwidth: 148,
						thumbheight: 48,
						thumbgap: 2,
						thumbmargin: 6,
						thumbunselectedimagebordercolor: "",
						thumbimageborder: 0,
						thumbimagebordercolor: "#fff",
						thumbshowplayonvideo: !0,
						thumbshadow: !1,
						thumbopacity: 0.8,
						thumbshowimage: !0,
						thumbshowtitle: !0,
						thumbtitlecss: "{text-align:center; color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal;}"
					},
					t = {
						skinfolder: "skins/vertical/",
						padding: 12,
						bgcolor: "#444444",
						bgimage: "background.jpg",
						galleryshadow: !1,
						slideshadow: !1,
						headerpos: "bottom",
						showdescription: !1,
						titleoverlay: !1,
						titleautohide: !1,
						titlecss: " {color:#ffffff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px;}",
						titlecsslink: " a {color:#ffffff;}",
						descriptioncss: " {color:#ffffff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 0px;}",
						descriptioncsslink: " a {color:#ffffff;}",
						showcarousel: !0,
						carouselmargin: 8,
						carouselposition: "right",
						carouselposresponsive: !0,
						carouselposresponsiveonscreenwidth: 800,
						carouselheight: 280,
						carouselbgtransparent: !1,
						carouselbgcolorstart: "#494f54",
						carouselbgcolorend: "#292c31",
						carouseltopborder: "#666666",
						carouselbottomborder: "#111111",
						carouselhighlightbgcolorstart: "#999999",
						carouselhighlightbgcolorend: "#666666",
						carouselhighlighttopborder: "#cccccc",
						carouselhighlightbottomborder: "#444444",
						carouselhighlightbgimage: "",
						thumbwidth: 148,
						thumbheight: 48,
						thumbgap: 2,
						thumbmargin: 6,
						thumbunselectedimagebordercolor: "",
						thumbimageborder: 1,
						thumbimagebordercolor: "#cccccc",
						thumbshowplayonvideo: !0,
						thumbshadow: !1,
						thumbopacity: 0.8,
						thumbshowimage: !0,
						thumbshowtitle: !0,
						thumbtitlecss: "{text-align:center; color:#ffffff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal;}"
					},
					x = {
						skinfolder: "skins/showcase/",
						padding: 12,
						bgcolor: "#444444",
						bgimage: "background.jpg",
						galleryshadow: !1,
						slideshadow: !1,
						showsocialmedia: !1,
						headerpos: "bottom",
						showdescription: !1,
						titleoverlay: !1,
						titleautohide: !1,
						titlecss: " {color:#ffffff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:10px 0px;}",
						titlecsslink: " a {color:#ffffff;}",
						descriptioncss: " {color:#ffffff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; text-align:left; padding:0px 0px 10px 0px;}",
						descriptioncsslink: " a {color:#ffffff;}",
						showcarousel: !0,
						carouselmargin: 8,
						carouselposition: "bottom",
						carouselheight: 280,
						carouselposresponsive: !1,
						carouselbgtransparent: !1,
						carouselbgcolorstart: "#494f54",
						carouselbgcolorend: "#292c31",
						carouseltopborder: "#666666",
						carouselbottomborder: "#111111",
						carouselhighlightbgcolorstart: "#999999",
						carouselhighlightbgcolorend: "#666666",
						carouselhighlighttopborder: "#cccccc",
						carouselhighlightbottomborder: "#444444",
						carouselhighlightbgimage: "",
						thumbwidth: 148,
						thumbheight: 60,
						thumbgap: 2,
						thumbmargin: 6,
						thumbunselectedimagebordercolor: "",
						thumbimageborder: 1,
						thumbimagebordercolor: "#cccccc",
						thumbshowplayonvideo: !0,
						thumbshadow: !1,
						thumbopacity: 0.8,
						thumbshowimage: !0,
						thumbshowtitle: !0,
						thumbtitlecss: "{text-align:left; color:#ffffff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; padding: 6px 0;}",
						thumbshowdescription: !0,
						thumbdescriptioncss: "{font-size:10px;}"
					},
					z = {
						freelink: "http://html5box.com/html5gallery/watermark.php",
						watermark: "",
						watermarklink: "",
						enabletabindex: !1,
						playvideoimage: "playvideo_64.png",
						playvideothumbimage: "playvideo.png",
						loadinggif: "loading.gif",
						centerloadinggif: "loading_center.gif",
						skin: "horizontal",
						googlefonts: "",
						mobileresizeevent: !1,
						enabletouchswipe: !0,
						enabletouchswipeonandroid: !1,
						disablehovereventontouch: !1,
						responsive: !1,
						responsivefullscreen: !1,
						resizedelay: 10,
						screenquery: {},
						firstitemid: 0,
						addimgtitle: !1,
						src: "",
						xml: "",
						xmlnocache: !0,
						stopallplaying: !1,
						lightbox: !1,
						autoslide: !1,
						slideshowinterval: 6E3,
						random: !1,
						borderradius: 0,
						loop: 0,
						pauseonmouseover: !1,
						arrowloop: !0,
						setfirstslideshowinterval: !1,
						firstslideshowinterval: 6E3,
						reverse: !1,
						notupdatecarousel: !1,
						updatecarouselinterval: 6E4,
						youtubeimage: "0.jpg",
						youtubethumb: "0.jpg",
						autoplayvideo: !1,
						html5player: !0,
						playvideoonclick: !0,
						videohidecontrols: !1,
						useflashformp4onfirefox: !1,
						reloadonvideoend: !1,
						loadnextonvideoend: !1,
						nativehtml5controls: !1,
						hddefault: !1,
						useflashonie9: !0,
						useflashonie10: !1,
						useflashonie11: !1,
						fullscreennativecontrols: !0,
						html5videonodownload: !0,
						usenativehtml5controlsoniphone: !0,
						usenativehtml5controlsonipad: !0,
						usenativehtml5controlsonandroid: !0,
						usenativehtml5controlsonie: !1,
						usenativehtml5controlsonfirefox: !1,
						defaultvideovolume: 1,
						mutevideo: !1,
						playsinline: !1,
						loopvideo: !1,
						autoslideandplayafterfirstplayed: !1,
						lazyloadtags: "lazy-src,lazyload-src,cfsrc,src",
						linkonlyonvideo: !0,
						hidetitlewhenvideoisplaying: !1,
						hideplaypausefullscreenwhenvideoisplaying: !1,
						lightboxborder: 8,
						lightboxtextheight: 72,
						lightboxmargin: 12,
						lightboxbgcolor: "#fff",
						lightboxshowtitle: !0,
						lightboxtitlecss: " {color:#333333; font:bold 12px Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; line-height:18px;}",
						lightboxtitlelinkcss: " a {color:#333333;}",
						lightboxshowdescription: !0,
						lightboxdescriptioncss: " {color:#333333; font:normal 12px Arial,Helvetica,sans-serif; overflow:hidden; white-space:normal; line-height:14px;}",
						lightboxdescriptionlinkcss: " a {color:#333333;}",
						effect: "fade",
						easing: "easeOutCubic",
						duration: 1500,
						slide: {
							duration: 1E3,
							easing: "easeOutExpo"
						},
						width: 480,
						height: 270,
						showtimer: !0,
						resizemode: "fit",
						showtitle: !0,
						titleheight: 45,
						errorcss: " {text-align:center; color:#ff0000; font-size:14px; font-family:Arial, sans-serif;}",
						shownumbering: !1,
						numberingformat: "%NUM / %TOTAL",
						googleanalyticsaccount: "",
						showsocialmedia: !1,
						socialheight: 30,
						socialurlforeach: !1,
						showfacebooklike: !0,
						facebooklikeurl: "",
						twitterurl: "",
						twitterusername: "",
						twittervia: "html5box",
						showgoogleplus: !0,
						googleplusurl: "",
						initsocial: !1,
						showsocial: !1,
						socialmode: "mouseover",
						socialposition: "position:absolute;top:8px;right:8px;",
						socialpositionlightbox: "position:absolute;top:8px;right:8px;",
						socialdirection: "horizontal",
						socialbuttonsize: 32,
						socialbuttonfontsize: 18,
						socialrotateeffect: !0,
						showfacebook: !0,
						showtwitter: !0,
						showpinterest: !0,
						showlinkedin: !1,
						showgplus: !1,
						showemail: !1,
						showimagetoolbox: "always",
						imagetoolboxstyle: "side",
						imagetoolboxmode: "mouseover",
						showplaybutton: !0,
						showprevbutton: !0,
						shownextbutton: !0,
						showfullscreenbutton: !0,
						showplaypausefullscreenforall: !1,
						showcarouselforsingle: !1,
						carouselbgtransparent: !0,
						carouselbgcolorstart: "#ffffff",
						carouselbgcolorend: "#ffffff",
						carouseltopborder: "#ffffff",
						carouselbottomborder: "#ffffff",
						carouselbgimage: "",
						carouseleasing: "easeOutCirc",
						carouselarrowwidth: 32,
						carouselarrowheight: 32,
						thumbresponsive: "samesize",
						thumbcolumns: 5,
						thumbcolumnsresponsive: !1,
						thumbmediumcolumns: 3,
						thumbmediumsize: 800,
						thumbsmallcolumns: 2,
						thumbsmallsize: 480,
						thumbmediumwidth: 64,
						thumbmediumheight: 64,
						thumbsmallwidth: 48,
						thumbsmallheight: 48,
						addthumbnailtitle: !1,
						carouselmultirows: !1,
						thumbrowgap: 16,
						thumblinkintitle: !1,
						thumbjumptotop: !1,
						thumbjumpposition: -1,
						thumbjumpanchor: "",
						thumbshowtitle: !1,
						thumbtitlecss: "{text-align:center; color:#000; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden;}",
						thumbtitleheight: 24,
						thumbmediumtitleheight: 48,
						thumbsmalltitleheight: 72,
						youtubeapikey: "",
						youtubeplaylistid: "",
						youtubeplaylistmaxresults: "",
						youtubeplaylistusemaxres: !0,
						titlesmallscreen: !1,
						titlesmallscreenwidth: 640,
						titleheightsmallscreen: 148,
						donotuseposter: !1,
						showhtml5videoposter: !0,
						splitvsliderontouch: !0,
						forcetouch: !1,
						version: "3.6",
						frve: !0,
						fm: "72,84,77,76,53,32,71,97,108,108,101,114,121,32,70,114,101,101,32,86,101,114,115,105,111,110"
					},
					z = "vertical" == this.options.skin ? b.extend(z, t) : "verticallight" ==
					this.options.skin ? b.extend(z, s) : "showcase" == this.options.skin ? b.extend(z, x) : "light" == this.options.skin ? b.extend(z, h) : "gallery" == this.options.skin ? b.extend(z, j) : "gallerywithtext" == this.options.skin ? b.extend(z, l) : "gallerywithtopthumbs" == this.options.skin ? b.extend(z, g) : "gallerywithtextbottom" == this.options.skin ? b.extend(z, m) : "horizontal" == this.options.skin ? b.extend(z, c) : "darkness" == this.options.skin ? b.extend(z, n) : "mediapage" == this.options.skin ? b.extend(z, f) : b.extend(z, c);
				this.options = b.extend(z, this.options);
				this.options.titleheightlargescreen = this.options.titleheight;
				this.options.lightbox && (this.options.showfullscreenbutton = !1);
				"slideduration" in this.options && (this.options.slide.duration = this.options.slideduration);
				this.options.htmlfolder = window.location.href.substr(0, window.location.href.lastIndexOf("/") + 1);
				if (!this.options.jsfolder || !this.options.jsfolder.length) this.options.jsfolder = u;
				"/" != this.options.skinfolder.charAt(0) && ("http:" != this.options.skinfolder.substring(0, 5) && "https:" != this.options.skinfolder.substring(0,
					6)) && (this.options.skinfolder = this.options.jsfolder + this.options.skinfolder);
				h = ["bgimage", "playvideoimage", "playvideothumbimage", "loadinggif", "centerloadinggif"];
				for (c = 0; c < h.length; c++) this.options[h[c]] && (0 < this.options[h[c]].length && "http://" != this.options[h[c]].substring(0, 7).toLowerCase() && "https://" != this.options[h[c]].substring(0, 8).toLowerCase()) && (this.options[h[c]] = this.options.skinfolder + this.options[h[c]]);
				h = "";
				f = this.options.fm.split(",");
				for (c = 0; c < f.length; c++) h += String.fromCharCode(f[c]);
				this.options.frvem = h;
				f = "hmtamgli5cboxh.iclolms";
				for (c = 1; 5 >= c; c++) f = f.slice(0, c) + f.slice(c + 1);
				h = f.length;
				for (c = 0; 5 > c; c++) f = f.slice(0, h - 9 + c) + f.slice(h - 8 + c); - 1 != this.options.htmlfolder.indexOf(f) && (this.options.frve = !1);
				h = b(window).width();
				if (this.options.screenquery)
					for (c in this.options.screenquery) h <= this.options.screenquery[c].screenwidth && (this.options.screenquery[c].gallerywidth && (this.options.width = this.options.screenquery[c].gallerywidth), this.options.screenquery[c].galleryheight && (this.options.height =
						this.options.screenquery[c].galleryheight), this.options.screenquery[c].thumbwidth && (this.options.thumbwidth = this.options.screenquery[c].thumbwidth), this.options.screenquery[c].thumbheight && (this.options.thumbheight = this.options.screenquery[c].thumbheight));
				"galleryid" in this.options ? c = this.options.galleryid : (c = F, F++);
				h = new e(a, this.options, c);
				a.data("html5galleryobject", h);
				a.data("html5galleryid", c);
				html5GalleryObjects.addObject(h)
			}
		});
		return this
	};
	jQuery(document).ready(function() {
		jQuery.fn.html5gallery &&
			jQuery(".html5gallery").html5gallery()
	})
}

function HTML5GalleryTimer(u, s, m) {
	var t = this;
	t.timeout = u;
	var x = null,
		k = 0,
		A = !1,
		n = !1,
		b = !1;
	this.setInterval = function(b) {
		t.timeout = b
	};
	this.pause = function() {
		n && (A = !0, clearInterval(x))
	};
	this.resume = function(u) {
		if (!b || u) b = !1, n && A && (A = !1, x = setInterval(function() {
			k += 50;
			k > t.timeout && (clearInterval(x), s && s());
			m && m(k / t.timeout)
		}, 50))
	};
	this.stop = function() {
		clearInterval(x);
		m && m(-1);
		k = 0;
		n = A = !1
	};
	this.start = function() {
		k = 0;
		A = !1;
		n = !0;
		x = setInterval(function() {
				k += 50;
				k > t.timeout && (clearInterval(x), s && s());
				m && m(k / t.timeout)
			},
			50)
	};
	this.startandpause = function() {
		k = 0;
		b = n = A = !0
	}
}

var html5GalleryObjects = new function() {
	this.objects = [];
	this.addObject = function(u) {
		this.objects.push(u)
	};
	this.loadNext = function(u) {
		this.objects[u].onVideoEnd();
		this.objects[u].isPaused || this.objects[u].slideRun(-1)
	};
	this.setHd = function(u, s, m) {
		this.objects[u].setHd(s, m)
	};
	this.gotoSlide = function(u, s) {
		"undefined" === typeof s && (s = 0);
		this.objects[s] && this.objects[s].slideRun(u)
	}
};
if ("undefined" === typeof ASYouTubeIframeAPIReady) var ASYouTubeIframeAPIReady = !1,
	ASYouTubeTimeout = 0,
	onYouTubeIframeAPIReady = function() {
		ASYouTubeIframeAPIReady = !0
	};
var ASVimeoTimeout = 0;