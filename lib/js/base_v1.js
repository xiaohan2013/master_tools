if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
}
HTMLElement.prototype.on = function(b, a) {
    this.addEventListener(b, a, false)
};
var run = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
        return setTimeout(a, 16.7)
    },
    colorWolf = {
        imgPath: "960x1029/",
        mediaQueries: ["screen and (max-width:960px)", "screen and (max-width:768px)", "screen and (max-width:360px)"],
        imgPathList: ["960x1029/", "768x1024/", "360x640/"],
        show: function(a, c) {
            if (c.sbox) {
                c.sbox.show();
                return
            }
            var b = showbox({
                className: "loginFormWrap",
                content: '<p class="loading"></p>'
            });
            ajax({
                url: "./templates/" + a + ".xml?" + Math.random(),
                dataType: "xml",
                success: function(d) {
                    var e = d.documentElement,
                        f = e.getAttribute("css"),
                        g = e.getAttribute("js"),
                        h = e.getAttribute("callback");
                    b.firstChild.innerHTML = d.documentElement.firstChild.nodeValue;
                    f && getCss(f);
                    g && getScript(g);
                    h && colorWolf.showboxBind[h].call(b.firstChild)
                }
            });
            c.sbox = b
        },
        dropdownDispose: function() {
            var a = this.querySelectorAll(".dropdown"),
                b = a.length,
                c;
            while (b--) {
                c = a[b].querySelector("select");
                colorWolf.dropdownChange.call(c);
                c.onchange = colorWolf.dropdownChange
            }
        },
        dropdownChange: function() {
            this.parentNode.lastChild.nodeValue = this.options[this.selectedIndex].text
        },
        preView: function(e) {
            var c = new RegExp("\\.jpg$|\\.jpeg$|\\.png$|\\.gif$", "i");
            if (!c.test(e.value)) {
                alert("请选择jpg、png或gif格式的图片文件")
            } else {
                var a = e.form.querySelector(".avatar");
                var d = document.createElement("img"),
                    b = new FileReader();
                b.onload = function() {
                    d.src = this.result;
                    a.innerHTML = "";
                    a.appendChild(d)
                };
                b.readAsDataURL(e.files[0])
            }
        },
        activity: function(b, a) {
            var c;
            if ((location.search || "").indexOf(b) != -1 && (c = document.querySelector(".hmBody"))) {
                c.classList.add(a);
                this.createActivityHtml && this.createActivityHtml(c)
            }
        }
    };

function slidePage(l) {
    var i = 0,
        h = 0,
        d = 0,
        f = 0,
        k = null,
        c = null,
        a = 0,
        j = 0,
        b = function(n) {
            var m = n.target;
            if (!this.isMoved && m.nodeName == "SECTION") {
                if (m.classList.contains("move")) {
                    m.classList.remove("move");
                    m.classList.add("page_current");
                    m.style.cssText = "";
                    slidePage.callback(m)
                } else {
                    m.classList.remove("page_current");
                    m.style.cssText = ""
                }
            }
        },
        g = function(m) {
            this.classList.remove(m);
            this.style.cssText = ""
        },
        e = function(n) {
            switch (n.type) {
                case "mousedown":
                case "touchstart":
                    var m = n.target;
                    while (m != this && m.nodeName != "SECTION") {
                        m = m.parentNode
                    }
                    if (m.nodeName == "SECTION") {
                        k && g.call(k, "page_current");
                        c && g.call(c, "move");
                        this.isMoved = 1;
                        k = m;
                        d = k.previousElementSibling == null;
                        f = k.nextElementSibling == null;
                        d || g.call(k.previousElementSibling, "move");
                        f || g.call(k.nextElementSibling, "move");
                        j = k.offsetHeight;
                        a = n.touches[0].clientY;
                        i = 1;
                        h = 0;
                        k.classList.add("page_current")
                    } else {
                        i = 0
                    }
                    break;
                case "mousemove":
                case "touchmove":
                    if (i) {
                        n.preventDefault();
                        n.stopPropagation();
                        var o = n.touches[0].clientY;
                        if (h != (o - a) >> 31 | 1) {
                            c && g.call(c, "move");
                            c = null;
                            h = (o - a) >> 31 | 1;
                            if (o - a < 0) {
                                if (f) {
                                    return
                                }
                                c = k.nextElementSibling
                            } else {
                                if (d) {
                                    return
                                }
                                c = k.previousElementSibling
                            }
                            c.classList.add("move")
                        }
                        c && (c.style[slidePage.prefix + "ransform"] = "translateY(" + (-j * h + o - a).toFixed(4) + "px) translateZ(0)");
                        k.style[slidePage.prefix + "ransform"] = "translateY(" + ((o - a) * 50 / j).toFixed(4) + "%) translateZ(0) scale(" + (1 - (o - a) * h / j * 0.2).toFixed(4) + ")"
                    }
                    break;
                case "mouseup":
                case "mouseleave":
                case "touchcancel":
                case "touchend":
                    if (i) {
                        var o = n.changedTouches[0].clientY - a;
                        if (Math.abs(o) > 10) {
                            if (c) {
                                this.isMoved = 0;
                                k.style[slidePage.prefix + "ransition"] = c.style[slidePage.prefix + "ransition"] = "all .3s";
                                k.style[slidePage.prefix + "ransform"] = "translateY(" + (50 * h) + "%) translateZ(0) scale(0.8)";
                                c.style[slidePage.prefix + "ransform"] = "translateY(0) translateZ(0)"
                            }
                        } else {
                            k.classList.add("page_current");
                            k.style.cssText = "";
                            c && g.call(c, "move")
                        }
                    }
                    k = null;
                    c = null;
                    i = 0;
                    break
            }
        };
    l.addEventListener(slidePage.prefix == "t" ? "transitionend" : slidePage.prefix + "ransitionEnd", b, false);
    l.addEventListener("touchstart", e, false);
    l.addEventListener("touchmove", e, false);
    l.addEventListener("touchend", e, false);
    l.addEventListener("touchcancel", e, false);
    if (!("ontouchstart" in l)) {
        l.addEventListener("mousedown", function(m) {
            m.touches = [{
                clientX: m.clientX,
                clientY: m.clientY
            }];
            e.call(this, m)
        }, false);
        l.addEventListener("mousemove", function(m) {
            m.touches = [{
                clientX: m.clientX,
                clientY: m.clientY
            }];
            e.call(this, m)
        }, false);
        l.addEventListener("mouseup", function(m) {
            m.changedTouches = [{
                clientX: m.clientX,
                clientY: m.clientY
            }];
            e.call(this, m)
        }, false);
        l.addEventListener("mouseleave", function(m) {
            m.changedTouches = [{
                clientX: m.clientX,
                clientY: m.clientY
            }];
            e.call(this, m)
        }, false)
    }
}
slidePage.callback = function(j) {
    if (j.classList.contains("page-3")) {
        var b = j.firstElementChild,
            e, c, f, n, a = b.children,
            h = 2,
            g = a.length - 1,
            o, m, k;
        if (a[0].hasChildNodes()) {
            return
        }
        o = document.createElementNS(a[0].namespaceURI, "path");
        k = ["M"];
        m = b.getBoundingClientRect();
        e = m.left;
        c = m.top;
        f = m.right - e;
        n = m.bottom - c;
        a[0].setAttribute("width", f);
        a[0].setAttribute("height", n);
        m = a[1].getBoundingClientRect();
        k.push((m.left + m.right) / 2 - e, (m.top + m.bottom) / 2 - c);
        for (; h < g; h++) {
            m = a[h].getBoundingClientRect();
            h & 1 ? k.push("L", m.left + (m.bottom - m.top) / 2 - e, m.top + (m.bottom - m.top) / 2) - c : k.push("L", m.right - (m.bottom - m.top) / 2 - e, m.top + (m.bottom - m.top) / 2 - c)
        }
        k.push(f * 0.45, n * 0.8);
        o.setAttribute("d", k.join(" "));
        a[0].appendChild(o)
    }
};
slidePage.prefix = function() {
    var b = document.body.style,
        c = ["t", "webkitT", "mozT", "oT", "msT"],
        a = c.length;
    while (a--) {
        if (typeof b[c[a] + "ransition"] != "undefined") {
            return c[a]
        }
    }
    return c[0]
}();

function $(a) {
    return document.getElementById(a)
}

function ajax(b) {
    var a = new XMLHttpRequest();
    b.beforeSend && b.beforeSend();
    a.onload = function() {
        this.readyState == 4 && this.status == 200 && b.success && b.success(b.dataType == "xml" ? this.responseXML : b.dataType == "json" ? JSON.parse(this.responseText) : this.responseText)
    };
    a.open(b.type || "GET", b.url, b.async || true);
    b.type == "POST" && a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    a.send(b.data || null)
}

function Showbox(a) {
    this.cover = document.createElement("div");
    this.cover.className = "cover";
    this.cover.innerHTML = "<div>" + a + "</div>";
    this.isShow = 0;
    document.body.appendChild(this.cover);
    this.cover.jO = this;
    this.cover.on("click", this.coverClick);
    this.emit()
}
Showbox.prototype = {
    show: function() {
        this.isShow = 1;
        this.cover.classList.add("cover_show")
    },
    hide: function() {
        this.isShow = 0;
        this.cover.classList.remove("cover_show")
    },
    emit: function() {
        self.getComputedStyle ? getComputedStyle(this.cover.firstChild, null).top : this.cover.firstChild.currentStyle.top
    },
    coverClick: function(b) {
        var a = b.target;
        if (a == this || a.classList.contains("cover_close")) {
            this.jO.isShow = 0;
            this.classList.remove("cover_show")
        }
    },
};
(function() {
    var d = document.body.firstElementChild;
    slidePage(d);
    var c = d.querySelectorAll(".page-3"),
        b = c.length,
        a = function(g) {
            var f = g.target,
                h;
            if (f.nodeName == "A") {
                h = f.bx;
                if (!h) {
                    h = f.bx = new Showbox('<i class="cover_close"></i>' + $("tpl_" + f.className).innerHTML)
                }
                h.show()
            }
        };
    while (b--) {
        c[b].on("click", a)
    }
})();