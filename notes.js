const fs = require('fs')
const style = require('chalk')

// 1. Add Notes Function:
const addNotes = (title , body) =>
{
    const notes = loadNotes()
    debugger
    const duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes.length === 0)
    {
        notes.push({
            title: title ,
            body: body
        })
        saveNotes(notes)
        console.log(style.green.inverse('Note is Added'  + '\n'))
    }
    else console.log(style.red.inverse('This title is already taken!'  + '\n'))
}

// 2. Save Notes Function:

const saveNotes =  (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataJSON)
}

// 3. Load Notes Function:
const loadNotes  = () =>
{
    try
    {
        const buffer = fs.readFileSync('./notes.json')
        const data = buffer.toString()
        return JSON.parse(data)
    }
    catch (e)
    {
        return []
    }
}

// 4. Remove Notes Function:
const removeNote = (title) =>
{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title !== title)

    if(notes.length - duplicateNotes.length  === 1)
    {
        saveNotes(duplicateNotes)
        console.log(style.green.inverse('Note is Removed'  + '\n'))
    }
    else console.log(style.red.inverse('There is no note with this title'  + '\n'))
}

// 5. List Notes Function:
const listNotes = () =>
{
    let i = 0;
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log("Note " + ++i + " : title: " + note.title + " , body: " + note.body + " ." )
    })

}

//6. Read a Note
const readNote = (title) =>
{
    const notes = loadNotes();
    let searchedNote = notes.find((note) => note.title === title)
    if( searchedNote ===  undefined) console.log("There is no note with this title to read!..")
    else console.log(searchedNote.body)

}

module.exports = {
    addNote : addNotes ,
    removeNote : removeNote ,
    listNotes : listNotes ,
    readNote: readNote
}