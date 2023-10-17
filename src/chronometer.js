class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = 0
    if (this.currentTime === 0) {
      minutes = 0
      return minutes
    }
    else if (this.currentTime > 0) {
      minutes = Math.floor(this.currentTime / 60)
      return minutes
    }

  }

  getSeconds() {
    // ... your code goes here
    let seconds = 0
    if (this.currentTime === 0) {
      seconds = 0
      return seconds
    } else {
      seconds = this.currentTime % 60
      return seconds
    }

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here 
    if (value < 10) { return "0" + value }
    else { return value.toString() }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)

  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    let totMinutes=this.computeTwoDigitNumber(this.getMinutes())
    let totSeconds=this.computeTwoDigitNumber(this.getSeconds())
    return `${totMinutes}:${totSeconds}`
  }
}
