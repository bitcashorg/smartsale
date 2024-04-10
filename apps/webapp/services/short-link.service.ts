import axios from 'axios'

export async function generateShortLink(path: string) {
  try {
    const resolved: {
      shortLink: string
      qrCode: string
      key: string
    } = await axios
      .post('https://api.dub.co/links', {
        headers: {
          Authorization: `Bearer ${process.env.DUB_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: {
          url: `https://bitlauncher.ai${path}`
        }
      })
      .then(res => res.data)

    return {
      key: resolved.key,
      shortLink: resolved.shortLink,
      qrCode: resolved.qrCode
    }
  } catch (error) {
    console.error('Failed to generate short link:', error)
    return null
  }
}

export async function getShortLink(key: string) {
  try {
    const resolved: {
      shortLink: string
      qrCode: string
      key: string
    } = await axios
      .get(`https://api.dub.co/links/info?key=${key}`, {
        headers: {
          Authorization: `Bearer ${process.env.DUB_API_KEY}`,
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.data)

    return {
      key: resolved.key,
      shortLink: resolved.shortLink,
      qrCode: resolved.qrCode
    }
  } catch (error) {
    console.error('Failed to retrieve short link:', error)
    return null
  }
}
