var adjustScreenBrightness = function(brightnessVal) {
    cordova.exec(pluginSuccessCallBack,pluginErrorCallBack,"ScreenBrightnessControl","adjustBrightness",[brightnessVal]);
}

function pluginSuccessCallBack(){
	
}

function pluginErrorCallBack(){
	
}
