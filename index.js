var katzDeliLine = [];

function takeANumber(num, name) {
 num.push(name);
 return `Welcome, ${name}. You are number ${num.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift(1) + ".";

  }
  else {
    return `There is nobody waiting to be served!`;

  }

}

function currentLine(katzDeliLine) {
  var p = "The line is currently: ";


    if (katzDeliLine.length > 0) {
      for (var i = 0; i < katzDeliLine.length; i++) {
        p += (i+1) + ". " + katzDeliLine[i] + ", ";
      }
        return p.slice(0, p.length-2);

    }
    else {
      return `The line is currently empty.`;
    }
  }
