function shakeMagic8Ball () {
  const question = prompt('Ask the Magic 8-Ball a question:')
  if (question === null) {
    // If the user clicks Cancel
    document.getElementById('response-text').innerText =
      'Please ask a question!'
    return
  }

  if (!question.trim()) {
    // If the user enters an empty string
    alert('Please enter a valid question!')
    return
  }

  const randomNumber = Math.floor(Math.random() * 8)
    let answer, color
  
    // Add shake animation
    const ball = document.querySelector('.magic-8-ball')
    ball.classList.remove('shake')
    setTimeout(() => ball.classList.add('shake'), 10)

  switch (randomNumber) {
    case 0:
      answer = 'Yes'
      color = 'text-success'
      break
    case 1:
      answer = 'No, but nice try!',
      color = 'text-danger'
      break
    case 2:
      answer = 'Maybe'
      color = 'text-warning'
      break
    case 3:
      answer = 'Ask again later'
      color = 'text-secondary'
      break
    case 4:
      answer = 'Cannot predict now, Im buffering.',
      color = 'text-muted'
      break
    case 5:
      answer = "Don't count on it"
      color = 'text-danger'
      break
    case 6:
      answer = 'You may rely on it, but double-check.',
      color = 'text-success'
      break
    case 7:
      answer = 'Outlook not so good, but I’m just a ball.',
      color = 'text-danger'
      break
    default:
      break
  }

  const responseText = document.getElementById('response-text')
  responseText.innerText = answer
    responseText.classList = 'answer-display fade-in'
}
    // Reset animation
    setTimeout(() => {
      responseText.classList.remove('fade-in')
    }, 500)