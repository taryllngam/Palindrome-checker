const inputArea = document.getElementById('input')
const btn = document.getElementById('btn')
const display = document.getElementById('display')

const isPalindrome = () => {
  const input = inputArea.value
  const normalizedText = input.replace(/[^a-zA-Z]/g, '').toLowerCase()
  const reverse = normalizedText.split('').reverse().join('')
  if (input === '') {
    alert('Please enter a word to check')
    display.innerHTML = 'No word to check'
  }
  if (normalizedText === reverse) {
    display.innerHTML = `${input}, is a palindrome`
  } else {
    display.innerHTML = `${input}, is not a palindrome`
  }
}

btn.addEventListener('click', isPalindrome)
