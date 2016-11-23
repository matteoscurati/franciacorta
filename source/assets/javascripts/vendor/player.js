import plyr from "plyr";

plyr.setup('.js-media-player--0', {
  //iconUrl:      '../dist/plyr.svg',
  captions: {
    defaultActive: true
  }
});

plyr.setup('.js-media-player', {
  debug: true,
  controls: 'play-large',
  //iconUrl:      '../dist/plyr.svg',
  captions: {
    defaultActive: true
  }
});

//const audioControls = ["<div class='plyr__controls is-small'>",
    //"<button type='button' data-plyr='play'>",
        //"<svg><use xlink:href='#plyr-play'></use></svg>",
        //"<span class='plyr__sr-only'>Play</span>",
    //"</button>",
    //"<button type='button' data-plyr='pause'>",
        //"<svg><use xlink:href='#plyr-pause'></use></svg>",
        //"<span class='plyr__sr-only'>Pause</span>",
    //"</button>",
//"</div>"].join("");

//plyr.setup('.gallery__item__player', {
  //html: audioControls
//});
