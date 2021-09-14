import React from 'react'

const Display = ({contacts}) => {
    return (
        <div>
            {/* {JSON.stringify(contacts, null, 2) } */}
            <center><h1>Display List</h1></center>
            {contacts.map((contact, index) => ( 
                <div key={index}>
                    {contact.title}
                   {/* <div class="card">*/}
                        {/*<div class="card-body">*/}
                            {/*<h5 class="card-title"></h5>*/}
                            {/*<h6 class="card-subtitle mb-2 text-muted">{contact.score}</h6>*/}
                            {/*<p class="card-text">{contact.company.catchPhrase}</p>*/}
                        {/* </div>*/}
                    {/* </div>*/}
                 </div>   
             ))} 
        </div>
    )
};

export default Display;