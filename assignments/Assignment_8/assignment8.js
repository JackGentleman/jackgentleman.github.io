const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 68 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 1000 pounds, and it was a mild day.";
var insertX = ["Corner Goblin", "Mr. Bigglesworth", "Mr. Roboto"];
var insertY = ["the prison industrial complex", "the van down by the river", "the edge"];
var insertZ = ["collapsed and began to sob", "phased out of reality", "sunk into the ground"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(1000 / 14.0) + " stone";
    const temperature =  Math.round((68 -32) * (5.0 / 9.0)) + " centigrade";
    newStory = newStory.replace("1000 pounds", weight);
    newStory = newStory.replace("68 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}