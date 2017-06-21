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

    console.log("Trying to follow url...");

    /*
    var request = new XMLHttpRequest;
    request.open('GET', 'https://lb-m.iptv.bulsat.com/redirect/bnt/smil:bnt1_hd_mobile.smil?scheme=m3u8&bulsatCustomParameter=123372_3816411_123372_NULL_android_be21eb48f7ffeaa4de9ea5476ddcb473_&bulsatendtime=1498039646&bulsatstarttime=1498003346&bulsathash=kT2gAQy_3goUE9uHUrqnF9403zMpieLuU0CFRKJ_mXs=', false);
    /*request.onload = function(){
        console.log(request.getResponseHeader('BULSAT_URL_ADDRESS'));
    };
    request.send();
    console.log("Done");
    */

}(window));
