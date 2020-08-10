var katzDeliLine = [];

function takeANumber(num, name) {
    num.push(name);

  return (`Welcome, ${name}. You are number ${num.length} in line.`)

}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    for(var i = 0; i < katzDeliLine.length; i++) {
      katzDeliLine.slice(0,1);
    return "Currently serving " + katzDeliLine[0] + "." ;
    
  }

  }else {
    return `There is nobody waiting to be served!`;
  }

}

function currentLine(katzDeliLine) {

  }
