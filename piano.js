keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
})

let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    console.log(noteSound);
}

let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classlist.add('active');
    noteSound.addEventListener('ended', () => {
        key.classlist.remove('active');
    })
}