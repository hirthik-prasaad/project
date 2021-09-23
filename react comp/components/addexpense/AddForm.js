 import './AddForm.css'
 import React, { useState } from 'react';
function AddForm (props) {
  const [settit, setnewtit] = useState('');
  const [setdate, setnewdate] = useState('');
  const [setamt, setnewamt] = useState('');


const TitleEventHandler = (event) => {
  setnewtit(event.target.value);
};

const AmtEventHandler = (event) => {
  setnewamt(event.target.value);
};

const DateEventHandler = (event) => {
  setnewdate(event.target.value);
};

const submitDataInput = (event) => {
event.preventDefault();

  const submitdata = {
    title: settit,
    amount: setamt,
    date: new Date(setdate)
  };
  props.onSaveData(submitdata);
  setnewtit('');
  setnewamt('');
  setnewdate('');
  console.log(submitdata);

};

  return(
    <form onSubmit={submitDataInput}>
    <div className='new-expense__controls'>
<div className='new-expense__control'>
<label>title</label>
<input type="text" value={settit} onChange={TitleEventHandler}/>
</div>
<div className='new-expense__control'>
<label>amount</label>
<input type='number'  min= "0.01" step="0.01" value={setamt} onChange={AmtEventHandler}/>
</div>
<div className='new-expense__control'>
<label>date</label>
<input type="date" min="2019-01-01" max="2022-12-31" value={setdate} onChange={DateEventHandler}/>
</div>

    </div>
    <div className='new-expense__actions'>
    <button type='submit'>click me </button>
    </div>
    </form>
  );
}

export default AddForm
