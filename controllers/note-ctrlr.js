const notesSchema = require("../models/db-model");


// When called, this controller will respond to the client with a status 
// code of 200 and a JSON object with our 'foundNotes'.
const getAllNotes = (req, res) => {
    notesSchema.find({}, function(err, foundNotes){
        if(err){
          return res
                    .status(400)
                    .json({success: false, error: err});
        }else{
        //send back all articles to client
        return res
                .status(200)
                .json({success: true, data: foundNotes});
      }
      }).catch(err => console.log(err));
};


const addNote = (req, res) => {
    const body = req.body;
    if(!body){
        return res
                .status(400)
                .json({success: false, error: 'Please enter a note'});
    }

    const newNote = new notesSchema(body)

    if(!newNote){
        return res.status(400).json({
            success: false,
            error: err
        });
    }

    newNote.save()
           .then(() => {
               return res.status(201).json({
                   success: true,
                   id: newNote._id,
                   message: 'Sucessfully added a new note'
               });
           })
           .catch(error => {
               return res.status(400).json({
                   error,
                   message: 'Note not added'
               });
           })
};

const deleteNote = (req, res) => {

    notesSchema.deleteOne(
        {_id: req.params.noteId},
        (err, note) => {
          if(err){
            // res.send(err);
            return res.status(400).json({
                success: false,
                error: err
            });
          }

          return res.status(200).json({
              success: true,
              data: note
          });

        }
        ).catch(err => console.log(err));
}




module.exports = {
    getAllNotes,
    addNote,
    deleteNote
};