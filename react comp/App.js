import MyComp from './components/expensedisp/MyComp';
import Expenses from './components/expensedisp/Expenses';
import AddExp from './components/addexpense/AddExp';
import React, { useState } from 'react';
const dexpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  
];

function App() {
  const [expenses, setexpenses] = useState(dexpenses);

const SavedOfDataHandler = (RcOfData) => {
  const RcOfDataObj = {
    ...RcOfData
  };
  setexpenses((prevExpenses) => {
    return [RcOfData, ...prevExpenses];
  } );
console.log(RcOfDataObj);
};

  return (
    <div>
      <AddExp onSaveOfData={SavedOfDataHandler}/>
      <Expenses items ={expenses} />

    </div>
  );
}

export default App;
