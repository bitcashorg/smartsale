import { init, identify, track } from '@multibase/js'

const MULTIBASE_API_KEY = process.env.MULTIBASE_API_KEY || ""

if (!MULTIBASE_API_KEY) {
    throw new Error("Missing MULTIBASE_API_KEY")
}

export function useMultibase() {
    init(MULTIBASE_API_KEY)

    const identifyUser = (properties: Record<string, any>, address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045') =>
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