//
//  TextRecognitionModule.m
//  RNMLKitTutorial
//
//  Created by Dmytro on 17.07.2021.
//

// RCTCalendarModule.m
#import "RCTTextRecognitionModule.h"
#import <React/RCTLog.h>

@implementation RCTTextRecognitionModule

RCT_EXPORT_MODULE(TextRecognitionModule);

RCT_EXPORT_METHOD(recognizeImage:(NSString *)url)
{
  
  RCTLogInfo(@"URL: %@", url);

}

@end


