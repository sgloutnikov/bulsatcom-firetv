(function(exports) {
    'use strict';
    
    //initialize the app
    var settings = {
        // Your username (email)
        username: "",
        // Encrypted password hash from bscEncrypt.jar
        password: "",
        //Set a device name
        deviceId: "aftv2",
        Model: BulsatcomModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "https://api.iptv.bulsat.com/tv/full/live",
        showSearch: false,
        displayButtons: false,
        controlsHideTime: 3000
    };
    exports.app = new App(settings);
}(window));
