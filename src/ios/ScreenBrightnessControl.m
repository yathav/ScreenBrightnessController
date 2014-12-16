//
//  ScreenBrightnessControl.m
//  ScreenBrightnessControl
//
//  Created by Yathavraj V on 12/12/14.
//
//

#import "ScreenBrightnessControl.h"

@implementation ScreenBrightnessControl

- (void)adjustBrightness:(CDVInvokedUrlCommand *)cmd
{
    NSArray *arguments = cmd.arguments;
    float brightnessVal = ([[arguments firstObject] floatValue])/100;
    [[UIScreen mainScreen] setBrightness:brightnessVal];
}

@end
