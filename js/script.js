const epicMix = [
  "Hybrid Moments",
  "Sound System",
  "Counting Worms",
  "Holy Roller",
  "180db_[130]",
  "No One",
  "Little Bitty Pretty One",
  "Bonita Applebum",
  "Waiting Room",
  "Loca",
  "Suavemente",
  "Train in Vain (Stand by Me)"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function(song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}<span> ${song}`;
    mixList.append(li); 
  });

};
