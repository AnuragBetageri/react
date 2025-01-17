import { useState } from 'react';
import Card from '../Card/Card';
import './Expenses.css'

const Expenses = (props)=>
{
    console.log(props.ItemObj.date);
    const [title, setTitle] = useState(props.ItemObj.ItemName)

    const changeTitle  = ()=>
    {
        setTitle('updated')  

    }
    return (
        
        <Card className = "ExpenseContainer" >
            <div className='DMY'>
                {/* <h3>March</h3>
                <h3>31</h3>
                <h3>2023</h3> */}
                {props.ItemObj.date.toString()}
            </div>
            <div className='ItemName'>
            {title}
            </div>
            <div className='Cost'>
                {props.ItemObj.cost}
            </div>
            <button type="button" onClick={changeTitle}>Change</button>
        </Card>
    )
}

export default Expenses;