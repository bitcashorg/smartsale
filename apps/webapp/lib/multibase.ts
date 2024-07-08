import { init } from '@multibase/js'

const MULTIBASE_API_KEY = process.env.MULTIBASE_API_KEY || ""

if (!MULTIBASE_API_KEY) {
    throw new Error("Missing MULTIBASE_API_KEY")
}

export function initMultibase() {
    init(MULTIBASE_API_KEY)
}