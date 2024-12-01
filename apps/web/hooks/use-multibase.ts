import { identify, track } from '@multibase/js'

export function useMultibase() {
  const identifyUser = (
    address: `0x${string}`,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    properties: Record<string, any>,
  ) => identify(address, properties)

  const trackInteraction = (
    label: string,
    properties: MultibaseTrackPropertiesProps,
  ) => track(label, properties)

  return { trackInteraction, identifyUser }
}

interface MultibaseTrackPropertiesProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any
}
