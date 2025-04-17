document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('search-button')
  const input = document.getElementById('user-input')
  const output = document.getElementById('output')

  button.addEventListener('click', async () => {
    const gamertag = input.value.trim()
    if (!gamertag) {
      output.textContent = 'Please enter a GamerTag'
      return
    }

    try {
      const res = await fetch(`/cod-stats?username=${encodeURIComponent(gamertag)}`)
      const data = await res.json()

      if (data.error) {
        output.textContent = 'Error: ' + data.error
        return
      }

      const stats = data.stats || {}

      output.innerHTML = `
        <h3>Stats for ${data.player}</h3>
        <p>Kills: ${stats.kills}</p>
        <p>Wins: ${stats.wins}</p>
        <p>K/D Ratio: ${stats.kdRatio}</p>
      `
    } catch (err) {
      output.textContent = 'An error occurred: ' + err.message
      console.error(err)
    }
  })
})
