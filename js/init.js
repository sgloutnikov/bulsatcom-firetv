(function(exports) {
    'use strict';
    
    //initialize the app
    var settings = {
        Model: JSONMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "./assets/genericLiveData.json",
        showSearch: false,
        displayButtons: false,
        controlsHideTime: 3000
    };

    exports.app = new App(settings);
}(window));
