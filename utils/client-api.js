function client(endpoint) {
  return window
  .fetch(`https://api.github.com/${endpoint}`)
  .then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export default client 