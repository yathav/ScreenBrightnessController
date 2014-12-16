//
//  ScreenBrightnessControl.h
//  ScreenBrightnessControl
//
//  Created by Yathavraj V on 12/12/14.
//
//

#import <Cordova/CDV.h>

@interface ScreenBrightnessControl : CDVPlugin

- (void)adjustBrightness:(CDVInvokedUrlCommand *)cmd;

@end
