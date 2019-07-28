const message = "my Module message"

const name = "Kevin Wong"

const location = 'Kuala Lumpur'

const getGreeting = name => {
  return `Welcome home ${name}.`
}

export { message, name, getGreeting, location as default }