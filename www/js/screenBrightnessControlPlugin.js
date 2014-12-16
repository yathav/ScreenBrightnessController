function adjustScreenBrightness(brightnessVal){
	console.log(brightnessVal);
	cordova.exec(pluginSuccessCallBack,pluginErrorCallBack,"ScreenBrightnessControl","adjustBrightness",[brightnessVal])
}

function pluginSuccessCallBack(){
	
}

function pluginErrorCallBack(){
	
}