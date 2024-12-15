export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const runAsyncFnWithoutBlocking = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  fn: (...args: any) => Promise<any>,
) => {
  fn()
}

export async function promiseAllWithConcurrencyLimit<T>(
  tasks: (() => Promise<T>)[],
  concurrencyLimit: number,
): Promise<T[]> {
  const results: T[] = new Array(tasks.length)
  const executing: Promise<void>[] = []

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]

    const p = task().then((result) => {
      results[i] = result
    })

    executing.push(p)

    if (executing.length >= concurrencyLimit) {
      await Promise.race(executing)
      executing.splice(executing.indexOf(p), 1)
    }
  }

  await Promise.all(executing) // Wait for all remaining tasks to finish
  return results
}
