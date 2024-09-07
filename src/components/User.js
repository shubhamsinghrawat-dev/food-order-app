import { useState } from "react";

const User = (props) =>
{
    const [count,setcount ]= useState(0);
    return (
        <div className="user">
            <h1>name:{props.name}</h1>
            <h3>count:{count}</h3>
            <h2>Location:{props.location}</h2>
            <h3>Age: 25</h3>
        </div>
    )
}
export default User;