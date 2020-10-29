import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SimpleModal from '@material-ui/core/Modal';
import '../css/Add.css';
import {useState} from 'react';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Add({handleMovie}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [url,setUrl]=useState('');
  const [rate,setRate]=useState(0);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add your best movie </h2>
      <div className='blanks'>
      Title: <input name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/> <br/>
      Description: <input value={description} onChange={(e)=>setDescription(e.target.value)}/> <br/>  <br/>   
       Url: <input value={url} onChange={(e)=>setUrl(e.target.value)}/> <br/> <br/>
      Rate: <input value={rate} onChange={(e)=>setRate(e.target.value)}/> <br/> <br/>
      <button onClick={()=>{handleMovie(title,description,url,rate);setTitle('');setDescription('');setUrl('');setRate('')}}>Submit</button>
      </div>
      <SimpleModal />
    </div>
  );

  return (
    <div className='main-button'>
      <button type="button" onClick={handleOpen}>
        Add movie
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default Add;
