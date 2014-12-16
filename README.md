You can install thsi plugin by navigaton to platform folder via terminal and paste this code 
"cordova plugin add https://github.com/yathav/ScreenBrightnessController.git"
This will install th plgin and do necesary configuration 

#In your index.html file add this script
<script type="text/javascript" src="plugins/com.example.screenBrightnessControlPlugin/www/js/screenBrightnessControlPlugin.js"></script>

# Replace the contenst in your "cordova_plugins.js" to this
cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});

# Now you can call the plugin via
var brightnessVal = 50 //sample value
adjustScreenBrightness(brightnessVal);
