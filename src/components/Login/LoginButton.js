import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect} = useAuth0();

    return (
        <button className="bg-lightBlue-500  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
        type="button"
        onClick={() => loginWithRedirect() }>
            Log In        
        </button>
    )
}

export default LoginButton