#import "AppDelegate.h"
<<<<<<< HEAD
<<<<<<< HEAD
#import <React/RCTLinkingManager.h>
#import <React/RCTBundleURLProvider.h>
#import <Firebase.h>

=======

=======
#import <Firebase.h>
>>>>>>> f31f635 (Mobile new features)
#import <React/RCTBundleURLProvider.h>
>>>>>>> 6fcaa3b (Initial commit)

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
<<<<<<< HEAD
<<<<<<< HEAD
  
    [FIRApp configure];
  self.moduleName = @"Sima-Scan";
=======
=======
  [FIRApp configure];
>>>>>>> f31f635 (Mobile new features)
  self.moduleName = @"Sima";
>>>>>>> 6fcaa3b (Initial commit)
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
<<<<<<< HEAD
=======
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
>>>>>>> 6fcaa3b (Initial commit)
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

<<<<<<< HEAD
- (BOOL)application:(UIApplication *)application
   openURL:(NSURL *)url
   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [RCTLinkingManager application:application openURL:url options:options];
}

=======
>>>>>>> 6fcaa3b (Initial commit)
@end
