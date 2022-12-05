const notes = [100, 50, 20, 10];


 const getCash = (cash) => {
    let yourNotes =[];
    for (let i = 0; i < notes.length; i++){
        while (cash - notes[i] >= 0){
            cash -= notes[i]
            yourNotes.push(notes[i])
        }
    };
    return yourNotes
 }

 console.log(getCash(90))