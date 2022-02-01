import React from "react";
import './LogIn.css'

function LogIn() {

    return(
        <div className={'form__wrapper'}>
        <form className={'Form'}>
            <input className={'name'} placeholder={'Name'}/>
            <input className={'password'} placeholder={'Password'}/>
            <button className={'Submit'}>Submit</button>
        </form>
        </div>
    )
}

export default LogIn;