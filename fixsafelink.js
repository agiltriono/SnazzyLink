(function() { var ad = document.createElement('script'); ad.type = 'text/javascript'; ad.async = true; ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ad, sc); })();

(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} };

  function openSosprofil() {
    var e = document.getElementById("sos-profil");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("search-box");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
    var e = document.getElementById("search-icon");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("close-icon");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
  };
function openMobilemenu(){var e=document.getElementById("mobile-menu-nav");"block"!==e.style.display?e.style.display="block":e.style.display="none"};
