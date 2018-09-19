var pop = document.getElementById("overlib");
var xoffset = 15;
var yoffset = 10;
var el = "";
document.onmousemove = function(k) {
  var h, j, m, e, l;
  if (typeof isIE8 != "undefined") {
    h = window.event.x;
    j = window.event.y;
    el = window.event.target || window.event.srcElement;
  } else {
    try {
      h = k.pageX;
      j = k.pageY;
      el = k.target || k.srcElement;
    } catch (k) {
      h = window.event.x;
      j = window.event.y;
      h += document.documentElement.scrollLeft;
      j += document.documentElement.scrollTop;
      el = window.event.target || window.event.srcElement;
    }
  }
  h += xoffset;
  j += yoffset;
  pop.style.top = j + "px";
  pop.style.left = h + "px";
};
function overlib(b) {
  pop.innerHTML = b;
  pop.style.display = "block";
  deAlt(el);
}
function deAlt() {
  if (el) {
    if (el.alt) {
      el.alt = "";
    }
    if (el.title) {
      el.title = "";
    }
    aKid = el.childNodes || el.children || null;
    if (aKid) {
      for (var a = 0; a < aKid.length; a++) {
        el = aKid[a];
        deAlt();
      }
    }
  }
}
function nd() {
  pop.style.display = "none";
}
function addPlugin() {
  window.external.AddSearchProvider("https://rarbg.to/plugins/ff.xml");
}
function addPluginIE() {
  var l = "RARBG.TO";
  var g = "https://rarbg.to/torrents.php?search=TEST";
  l = l.replace(/^\s+|\s+$/g, "");
  g = g.replace(/^\s+|\s+$/g, "");
  var h = "UTF-8";
  if (g.length < 1) {
    alert("Please enter the URL of the search results page.");
    document.getElementById("sURI").focus();
    return false;
  }
  if (g.indexOf("TEST") < 0) {
    alert(
      "The search results URL must contain the word TEST.  Please check the URL.\nIt's possible that this tool cannot be used to build a query for that search engine."
    );
    document.getElementById("sURI").focus();
    return false;
  }
  if (l.length < 1) {
    alert("Please enter a NAME for the new search provider");
    document.getElementById("sName").focus();
    return false;
  }
  var k =
    "Encoding=" +
    encodeURIComponent(h) +
    "&Name=" +
    encodeURIComponent(l) +
    "&URI=" +
    encodeURIComponent(g);
  var j = "http://www.microsoft.com/windows/ie/searchguide/spbuilder.mspx?" + k;
  try {
    window.external.AddSearchProvider(j);
  } catch (m) {
    if (70 == (m.number & 65535)) {
      alert(
        "For security reasons, you must use the mouse\n(or the Enter key) to click the Install button."
      );
    } else {
      alert(
        "Unable to add search provider. The Create Your\nOwn tool requires Internet Explorer 7.   [" +
          (m.number & 65535) +
          "]"
      );
    }
  }
  return false;
}
var BrowserDetect = {
  init: function() {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version =
      this.searchVersion(navigator.userAgent) ||
      this.searchVersion(navigator.appVersion) ||
      "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function(g) {
    for (var f = 0; f < g.length; f++) {
      var e = g[f].string;
      var h = g[f].prop;
      this.versionSearchString = g[f].versionSearch || g[f].identity;
      if (e) {
        if (e.indexOf(g[f].subString) != -1) {
          return g[f].identity;
        }
      } else {
        if (h) {
          return g[f].identity;
        }
      }
    }
  },
  searchVersion: function(c) {
    var d = c.indexOf(this.versionSearchString);
    if (d == -1) {
      return;
    }
    return parseFloat(c.substring(d + this.versionSearchString.length + 1));
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
    },
    { string: navigator.vendor, subString: "Apple", identity: "Safari" },
    { prop: window.opera, identity: "Opera" },
    { string: navigator.vendor, subString: "iCab", identity: "iCab" },
    { string: navigator.vendor, subString: "KDE", identity: "Konqueror" },
    { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
    { string: navigator.vendor, subString: "Camino", identity: "Camino" },
    {
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
    },
    {
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
    }
  ],
  dataOS: [
    { string: navigator.platform, subString: "Win", identity: "Windows" },
    { string: navigator.platform, subString: "Mac", identity: "Mac" },
    { string: navigator.platform, subString: "Linux", identity: "Linux" }
  ]
};
BrowserDetect.init();
function addsearchplugin() {
  if (BrowserDetect.browser == "Firefox") {
    addPlugin();
  } else {
    if (BrowserDetect.browser == "Explorer" && BrowserDetect.version == 7) {
      addPluginIE();
    }
  }
}
function Bookmark() {
  var f = "RARBG.to";
  var d = "https://rarbg.to";
  if (window.sidebar) {
    window.sidebar.addPanel(f, d, "");
  } else {
    if (window.opera && window.print) {
      var e = document.createElement("a");
      e.setAttribute("rel", "sidebar");
      e.setAttribute("href", d);
      e.setAttribute("title", f);
      e.click();
    } else {
      if (document.all) {
        window.external.AddFavorite(d, f);
      }
    }
  }
}
if (window != top) top.location.href = location.href;
