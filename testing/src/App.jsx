// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Card from "./components/Card/Card";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";

function App() {

  const expenses = [
    {
      ItemName : 'Pen',
      date : new Date(2012 , 2,2),
      cost : 51
    },
    {
      ItemName : 'Pen2',
      date : new Date(2012 , 22,2),
      cost : 53
    },
    {
      ItemName : 'Pen3',
      date : new Date(2012 , 21,2),
      cost : 53
    },
    {
      ItemName : 'Pen4',
      date : new Date(2012 , 24,2),
      cost : 52
    },
  ]
  return (
    <>
      <Card className="Main">
        <NewExpenses></NewExpenses>
        <Expenses ItemObj = {expenses[0]}></Expenses>
        <Expenses ItemObj = {expenses[1]}></Expenses>
        <Expenses ItemObj = {expenses[2]}></Expenses>
        <Expenses ItemObj = {expenses[3]}></Expenses>
      </Card>
    </>
  );
}

export default App;
