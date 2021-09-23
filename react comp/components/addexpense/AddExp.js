import React from 'react';
import './addexp.css';
import AddForm from './AddForm';

function AddExp (props) {
const SavedDataHandler = (RcData) =>{
  const rcnewdata = {
    ...RcData,
    ID: Math.random().toString
  };
  props.onSaveOfData(rcnewdata);
console.log(rcnewdata);
};

  return(
    <div className= 'new-expense'>
<AddForm onSaveData={SavedDataHandler} />
    </div>

  );
}

export default AddExp;
