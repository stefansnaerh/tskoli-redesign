import { useEffect, useState} from "react";
import api from "../../utils/api";
import arrowIcon from "../../images/downArrow.svg"

import './people.scss'



const People = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await api.get("/users");
        const sortedUsers = data.data
        .sort((userA, userB) => (userA.name > userB.name ? 1 : -1))
        .sort((user) => (user.role === "instructor" ? -1 : 1));
  
        setUsers(sortedUsers);
        setLoading(false)
      };
  
      getUsers();
    }, []);
    console.log(users)
  
    return (
        <>
        <section className="people-container">
        <h1>{"{ People }"}</h1>
            {loading ? <>loading...</> : 
            <>
            {users.map(user => {
                return <button>{user.name}<img alt="arrow" src={arrowIcon}/></button>
            })}
            </>}
        </section>
        </>
    )
}



export default People