import './ExpensesForm.css'


const ExpensesForm = ()=>
{
    return (
        <form>
            <label htmlFor="Name">Name</label>
            <input type="text" />
            <label htmlFor="Date">Date</label>
            <input type="date"/>
            <label htmlFor="Cost">Cost</label>
            <input type="number"/>
            <button type='submit'> Submit</button>
        </form>
    )
}

export default ExpensesForm;