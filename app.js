console.log("starting app");

const fs = require('fs');
const os = require('os');
const _  = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')


const argv = yargs.argv;
var command = argv._[0];
//console.log('command: ', command);
//console.log('Process ', process.argv);
//console.log('Yarg title ', argv);

if(command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if(note){
       console.log('New Note created');
       notes.logNotes(note);
   }else{
       console.log('Note Name taken')
   }
}else if(command === 'list'){
     var allNotes =  notes.getAll();
     console.log(`Printing ${allNotes.length} note(s)`);
     allNotes.forEach((note) => notes.logNotes(note));
     console.log("Line after ForEach function -----");
     
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note found');
        notes.logNotes(note);
    }else{
        console.log('Note not found');
    }
}else if(command === 'remove'){
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note was removed' : 'Not not found'
   console.log(message);
}else{
    console.log('command not recognized')
}


