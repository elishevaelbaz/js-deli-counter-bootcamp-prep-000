function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine){
  if(deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  var temp = deliLine[0]
  deliLine.shift()
  return `Currently serving ${temp}.`
}

function currentLine(line){
  let str = "The line is currently"
  for (let i = 0; i < line.length; i++){
    
  }
  return `The line is currently:`
}


//   describe('currentLine(line)', () => {
//     it('returns "The line is currently empty." if no one is in line', () => {
//       expect(currentLine([])).toEqual("The line is currently empty.");
//     });

//     it('says who is in line when there are people waiting', () => {
//       expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
//     });
//   });
// })
