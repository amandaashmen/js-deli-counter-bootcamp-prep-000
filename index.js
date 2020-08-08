function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
  var serve = line[0]
  line.shift()
  return `Currently serving ${serve}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var print = ""
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    for(let i = 0; i < line.length; i++) {
      print += (i+1) + line[i]
    }
  }
  return print
}

console.log(currentLine(["a", "b"]))
