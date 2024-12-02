export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const runAsyncFnWithoutBlocking = (
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  fn: (...args: any) => Promise<any>,
) => {
  fn()
}
