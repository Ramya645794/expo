// Copyright 2024-present 650 Industries. All rights reserved.

import CoreImage
import CoreGraphics
import ExpoModulesCore

public class VideoThumbnail: SharedRef<UIImage> {
  var requestedTime: CMTime
  var actualTime: CMTime

  public init(_ image: CGImage, requestedTime: CMTime, actualTime: CMTime) {
    self.requestedTime = requestedTime
    self.actualTime = actualTime
    super.init(UIImage(cgImage: image))
  }
}
