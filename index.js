var katzDeliLine = [];

function takeANumber(line, name)
{
  line.push(name)
return `Welcome, ${name}. You are number ${line.length} in line.`


}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length>0)
  {
    return "Currently serving " + katzDeliLine.shift(1)+ "."
  }
  else
  {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(katzDeliLine)
{

  if (katzDeliLine.length>0)

  {
    var line =  "The line is currently: "
      for (var i=0; i<katzDeliLine.length; i++)
      {
        line +=   (i+1) + ". " + katzDeliLine[i] + ", ";

      }

        return line.slice(0, line.length-2)

  } else {
      return "The line is currently empty.";
  }

}
