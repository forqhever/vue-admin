import env from './env'

export default {
  info (msg) {
    if (!env.IS_PRODUCTION) {
      console.info(msg)
    }
  },
  warn (msg) {
    if (!env.IS_PRODUCTION) {
      console.warn(msg)
    }
  },
  error (msg) {
    if (!env.IS_PRODUCTION) {
      console.error(msg)
    }
  }
}
