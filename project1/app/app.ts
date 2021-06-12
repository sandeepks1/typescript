function startGame() {
  // starting a new game
  let playername:string = 'sandeep';
  logplayer(playername);
  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
}

function getplayer(elementid:string):string|undefined|null
{
  const inputElement:HTMLElement = <HTMLElement>document.getElementById(elementid);
  if(inputElement.nodeValue ==='')
  {
    return undefined;
  }
  else
  {
    return inputElement.nodeValue;
  }
}

document.getElementById('startGame')!.addEventListener('click', startGame);
function logplayer(player:string)
{
  console.log(`player name is: ${player}`)
}