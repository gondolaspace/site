/*
    Instantiate with an array of frame URLs and the ID of the favicon element. 
    Then start the animation with the animate method.
    eg. 
        const myThing = new AnimatedFavicon(['/image1.png', '/image2.png'], 'favicon-link');
        myThing.animate()
*/
class AnimatedFavicon {

    defaultPause = 2000;
    loopTimeout = null;

    constructor(frames, faviconId) {
        frames.forEach(frame => (new Image()).src = frame); //preload images
        this.frames = frames;
        this.faviconEl =  document.getElementById(faviconId)
    }

    // private
    changeFavicon = (iconURL) => this.faviconEl.href = iconURL;

    // private
    change = (iconURL, optionalDocTitle) => {
        this.clearTimeout(this.loopTimeout);
        if (optionalDocTitle) doc.title = optionalDocTitle;
        if (iconURL !== "") this.changeFavicon(iconURL);
    }

    // public
    animate = (optionalDelay = this.defaultPause) => {
        clearTimeout(this.loopTimeout);

        let iconIndex = 0;
        this.changeFavicon(this.frames[iconIndex]);

        const animateFunc = () => {
            iconIndex = (iconIndex + 1) % this.frames.length;
            this.changeFavicon(this.frames[iconIndex]);
            this.loopTimeout = setTimeout(animateFunc, optionalDelay);
        }

        this.loopTimeout = setTimeout(animateFunc, optionalDelay);
    }

    // public
    stopAnimate = () => clearTimeout(this.loopTimeout);
};

const gondolaFrames = [
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
]

const animatedFavicon = new AnimatedFavicon(gondolaFrames, "gondola-favicon-link")
animatedFavicon.animate(60);