import './Admin.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import adminBg from '../Images/register.jpg';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Admin = () => {
    const [state, setState] = useState({ password: '' })
    const [go, setGo] = useState(false)
    let passwordKey = 'ikromjon'

    const notify = () => toast.success("password is correct", {
      autoClose: 3000,
      theme: 'dark'
    })

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
            <button className="btn-admin" type='submit' onClick={notify}>to try</button>
        </form>
        <ToastContainer />
        <Link className={go ? "go-active" : "go"}>Go To Dashboard</Link>
      </div>
      </div>

    </div>
  )
}

export default Admin
