import React , { useState } from 'react';
import MyComp from './MyComp';
import ExpensesFilter from '../expfilter/ExpFilter';
import './Expenses.css';
import Card from '../ui/Card';
function Expenses (props) {
const [setYear, setNewYear] = useState('2020')
const FilterData = (rcYear) => {
  setNewYear(rcYear);

};

const filteredExpense = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === setYear;
});

  console.log(setYear);
  return(
<Card className="expenses">
<ExpensesFilter onRecData={FilterData}/>
{filteredExpense.map((expense) =>(<MyComp
  key={expense.id}
  title={expense.title}
  amount={expense.amount}
  date={expense.date}/>
))}
</Card>);

}

 export default Expenses;
