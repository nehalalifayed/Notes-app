const notes = require('./notes.js');
const style = require('chalk');
const yargs = require('yargs')


// yargs.version("1.1.0")
//1.Adding a Note
yargs.command({
    command : 'add' ,
    describe : 'Add a new Note' ,
    builder : 
        {
            title :
                {
                    describe : "Note Title",
                    demandOption : true ,
                    type : String
                } ,
            body :
                {
                    describe : "Note Body" ,
                    demandOption : true ,
                    type : String
                }
        } ,
    handler(argv){
        notes.addNote(argv.title , argv.body)

    }
})

// 2.Removing a Note
yargs.command({
    command : 'remove' ,
    describe : 'remove an existing Note' ,
    builder :
        {
            title :
                {
                    describe : "Note Title",
                    demandOption : true ,
                    type : String
                }
        } ,
    handler (argv)
    {
        console.log(style.blueBright.inverse('Removing The Note ...' + '\n'))
        notes.removeNote(argv.title)
    }
})

//3. Listing Notes :
yargs.command({
    command : 'list' ,
    describe : 'list the existing note' ,
    builder :
        { } ,
    handler (argv)
    {
        console.log(style.redBright.inverse('Listing Notes :)) ' + '\n'))
        notes.listNotes()
    }
})

//4. Read a Note:
yargs.command({
    command : 'read' ,
    describe : 'Read a note' ,
    builder :
        {
            title:
                {
                    describe : "Note Title",
                    demandOption : true ,
                    type : String
                }
        } ,
    handler (argv)
    {
        console.log(style.blue.inverse('Your Note is : '))
        notes.readNote(argv.title)
    }
})

yargs.parse()

