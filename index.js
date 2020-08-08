function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.length + 1} in line`
}

function nowServing(line) {
  if (line.length > 0) {
  var serve = line[0]
  line.shift()
  return serve
  }
  else {
    return "There is nobody waiting to be served!"
  }
}