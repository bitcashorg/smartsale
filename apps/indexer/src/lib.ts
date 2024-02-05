import fs from 'fs/promises'

export async function writeToFile(data: string, filePath: string) {
  try {
    // Write the data to the specified file
    // If the file does not exist, it will be created.
    await fs.writeFile(filePath, data, 'utf8')

    console.log('Logs have been written to the file successfully.')
  } catch (error) {
    console.error('Error writing logs to file:', error)
  }
}

export function runPromisesInSeries<T>(promiseFns: (() => Promise<T>)[]): Promise<T | void> {
  // Start with a Promise<void> to ensure compatibility with the accumulator's type
  return promiseFns.reduce<Promise<T | void>>((prevPromise, currentPromiseFn) => {
    // Chain the current promise to the accumulator after the previous one completes
    // Here, we ignore the result of the previous promise, as we're focusing on chaining
    // If collecting results is needed, an additional structure would be required
    return prevPromise.then(() => currentPromiseFn())
  }, Promise.resolve())
}
