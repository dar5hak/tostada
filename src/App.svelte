<script>
  import { formatDuration } from './lib/util'

  let timeElapsed = 0
  let fumbles = 0
  let intervalId

  function onKeyDown(e) {
    console.log(e)
    switch (e.key.toLowerCase()) {
      case 'f':
        incrementFumbles()
        break
      case ' ':
        onToggleTimer()
    }
  }

  function incrementFumbles() {
    if (intervalId) fumbles++
  }

  function onToggleTimer() {
    if (intervalId) stopTimer()
    else startTimer()
  }

  function reset() {
    timeElapsed = 0
    fumbles = 0
  }

  function startTimer() {
    reset()
    intervalId = setInterval(() => {
      timeElapsed++
    }, 1000)
  }

  function stopTimer() {
    clearInterval(intervalId)
    intervalId = null
  }
</script>

<main>
  <h1>Tostada</h1>
  <p class="duration"><strong>{formatDuration(timeElapsed)}</strong> elapsed<p>
  <button on:click={onToggleTimer}>{intervalId ? 'Stop' : timeElapsed ? 'Restart' : 'Start'} timer</button>
  <span class="hint">or press <kbd>Space</kbd></span>
  <p style="margin-block-start: 3rem;"><strong>{fumbles}</strong> fumbles</p>
  <button>Record fumble</button>
  <span class="hint">or press <kbd>F</kbd></span>
</main>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
  main {
    text-align: left;
  }

  button {
    width: 10rem;
  }

  .duration {
    font-variant-numeric: tabular-nums;
  }

  .hint {
    margin-inline-start: 8px;
    color: gray;
  }
</style>
