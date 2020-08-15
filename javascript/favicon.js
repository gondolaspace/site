/* http://mit-license.org/ */
var faviconId = "gondola-favicon-link";
var faviconEl =  document.getElementById(faviconId)

var loopTimeout = null;

var changeFavicon = function(iconURL) {
    faviconEl.href = iconURL;
};

var favicon = {
    "defaultPause": 2000,
    "change": function(iconURL, optionalDocTitle) {
        clearTimeout(loopTimeout);
        if (optionalDocTitle) doc.title = optionalDocTitle;
        if (iconURL !== "") changeFavicon(iconURL);
    },
    "animate": function(icons, optionalDelay) {
        clearTimeout(loopTimeout);

        // preload icons
        icons.forEach(function(icon) {
            (new Image()).src = icon;
        });

        optionalDelay = optionalDelay || this["defaultPause"];

        var iconIndex = 0;
        changeFavicon(icons[iconIndex]);

        loopTimeout = setTimeout(function animateFunc() {
            iconIndex = (iconIndex + 1) % icons.length;
            changeFavicon(icons[iconIndex]);
            loopTimeout = setTimeout(animateFunc, optionalDelay);
        }, optionalDelay);
    },
    "stopAnimate": function() {
        clearTimeout(loopTimeout);
    }
};

favicon.animate([
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (1).ico",
    "favicon/dancing-gondola (2).ico",
    "favicon/dancing-gondola (2).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (3).ico",
    "favicon/dancing-gondola (4).ico",
    "favicon/dancing-gondola (4).ico",
    "favicon/dancing-gondola (5).ico",
    "favicon/dancing-gondola (5).ico",
    "favicon/dancing-gondola (6).ico",
    "favicon/dancing-gondola (6).ico",
    "favicon/dancing-gondola (7).ico",
    "favicon/dancing-gondola (7).ico",
    "favicon/dancing-gondola (8).ico",
    "favicon/dancing-gondola (9).ico",
    "favicon/dancing-gondola (9).ico",
    "favicon/dancing-gondola (10).ico",
    "favicon/dancing-gondola (10).ico",
    "favicon/dancing-gondola (10).ico",
    "favicon/dancing-gondola (10).ico",
    "favicon/dancing-gondola (10).ico",
    "favicon/dancing-gondola (10).ico",
    "favicon/dancing-gondola (11).ico",
    "favicon/dancing-gondola (11).ico",
    "favicon/dancing-gondola (12).ico",
    "favicon/dancing-gondola (12).ico",
    "favicon/dancing-gondola (13).ico",
    "favicon/dancing-gondola (13).ico",
    "favicon/dancing-gondola (14).ico",
    "favicon/dancing-gondola (14).ico"
 ], 60)