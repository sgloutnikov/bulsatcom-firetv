(function(exports) {
    'use strict';
    
    //initialize the app
    var settings = {
        deviceId: "3085a99a01ad3723",
        Model: BulsatcomModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        //dataURL: "./assets/genericLiveData.json",
        dataURL: "https://api.iptv.bulsat.com/tv/full/live",
        showSearch: false,
        displayButtons: false,
        controlsHideTime: 3000
    };
    console.log("Starting up...");
    exports.app = new App(settings);
}(window));
