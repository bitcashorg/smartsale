import { appConfig } from '@/lib/config'
import { identify, init, track } from '@multibase/js'

const multibaseKey = appConfig.multibase.key

if (!multibaseKey) {
  console.error("Missing MULTIBASE_API_KEY")
} else {
  init(multibaseKey)
  console.info("Multibase Initialized")
}

export function useMultibase() {
  const identifyUser = (address: `0x${string}`, properties: Record<string, any>) =>
    identify({
      address,
      properties
    })

  const trackInteraction = (label: string, properties: MultibaseTrackPropertiesProps) =>
    track(label, properties)

  return { trackInteraction, identifyUser }
}

interface MultibaseTrackPropertiesProps {
  [key: string]: any;
}