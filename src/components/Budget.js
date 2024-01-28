
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency,dispatch,expenses } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        
        if(event.target.value > 20000){
            alert("Budget cannot exceed 20,000 pounds.");
            setNewBudget(20000);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        
       }
       else if(event.target.value < totalExpenses){
        alert("Budget cannot be reduced to lower than the current spending.");
            setNewBudget(totalExpenses);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
       }
        else{
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
      
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onchange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;