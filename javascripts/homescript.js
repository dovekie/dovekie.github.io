var philosophy = ["Every difficult coding problem just a series of trivially small coding problems.", "Take the cover off of the machine and see the gears move.", "The world is more complicated than it appears.", "Kindness, like any skill, must be practiced.", "Kindness leads to more kindness, but cruelty only leads to more cruelty.", "Optimism is the truest moral courage."];

var randomPhil = philosophy[Math.floor(Math.random() * philosophy.length)];
var theDiv = document.getElementById('philosophy');
theDiv.innerHTML = randomPhil;