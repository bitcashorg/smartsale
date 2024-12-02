export function fromEntries(data: FormData) {
  const object = Object.fromEntries(data)
  const result: Record<string, string> = {}
  for (const key of Object.keys(object)) {
    result[key] = object[key].toString()
  }
  return result
}
