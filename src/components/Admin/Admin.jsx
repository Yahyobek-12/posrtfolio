import './Admin.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import adminBg from '../Images/register.jpg';

const Admin = () => {
    const [state, setState] = useState({ password: '' })
    const [go, setGo] = useState(false)
    let passwordKey = '12345'

    const changeHandlerInput = (e) => {
        setState({[e.target.name]: [e.target.value]})
    }

    const formHandler = (e) => {
        e.preventDefault()
        let oldPasswordVal = state.password[0]

        if(oldPasswordVal === passwordKey) {
            setGo(true);
        } else {
            setGo(false)
            alert("inCorrect Password you are not admin")
        }

        e.target.reset()
    }

  return (
    <div className='admin'>

        <div className="admin-bg">
            <img src={adminBg} alt="adminBg" />
        </div>

      <div className="filter">
      <div className="admin-register">
        <h1>are you admin</h1>
        <form onSubmit={formHandler}>
            <input type="text" placeholder='please write admin password' onChange={changeHandlerInput} name='password' />
            <button className="btn-admin" type='submit'>to try</button>
        </form>
        <Link to='/my-app/src/components/Dashboard/Dashboard.jsx' className={go ? "go-active" : "go"}>Go To Dashboard</Link>
      </div>
      </div>

    </div>
  )
}

export default Admin
