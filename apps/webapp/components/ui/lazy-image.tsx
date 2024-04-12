import Image, { ImageProps } from "next/image"
import React, { useMemo, useState } from "react"

import { cn } from "@/lib/utils"

const aspectRatioThreshold = 0.2

export function LazyImage({
  src,
  alt,
  className,
  imgWrapperClassName,
  ...props
}: ImageProps & { imgWrapperClassName?: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  })

  const calculateAdjustedHeight = (
    img: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const width = img.currentTarget.naturalWidth
    const height = img.currentTarget.naturalHeight

    setImageDimensions({ width, height })
  }

  const isSameDimensions = useMemo(() => {
    const aspectRatio = imageDimensions.width / imageDimensions.height
    return Math.abs(aspectRatio - 1) <= aspectRatioThreshold
  }, [imageDimensions.height, imageDimensions.width])

  return (
    <picture
      className={cn(
        // className?.includes("absolute") ? "absolute" : "relative",
        "flex w-full overflow-hidden ",
        {
          'scale-110 bg-gray-400 blur-2xl grayscale': isLoading,
        },
        imgWrapperClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        onLoad={calculateAdjustedHeight}
        loading="lazy"
        className={cn(
          "h-full w-full duration-700 ease-in-out",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          isSameDimensions
            ? "object-cover"
            : "rounded-images object-contain object-center",
          className
        )}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </picture>
  )
}
