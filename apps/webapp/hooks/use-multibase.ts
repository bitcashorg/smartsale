import { init, identify, track } from '@multibase/js'

const MULTIBASE_API_KEY = process.env.MULTIBASE_API_KEY || ""


export function useMultibase() {
    if (!MULTIBASE_API_KEY) {
        throw new Error("Missing MULTIBASE_API_KEY")
    }
    
    init(MULTIBASE_API_KEY)

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