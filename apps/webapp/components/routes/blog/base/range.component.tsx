"use client"

import React from "react"
import * as Slider from "@radix-ui/react-slider"

export const Range = (props: any) => (
  <form>
    <Slider.Root className="SliderRoot" {...props}>
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb
        className="SliderThumb transition duration-400 ease-in-out hover:scale-110"
        aria-label="Volume"
      />
      <Slider.Thumb
        className="SliderThumb transition duration-400 ease-in-out hover:scale-110"
        aria-label="Volume"
      />
    </Slider.Root>
  </form>
)
