
import React ,{useEffect, useState}from 'react';

function Page2(props) {
    const [displayName, setDisplayName] = useState("Jane Doe");

    useEffect(() => {
        setDisplayName('page 2')
      }, []);
    
    return (
        <div>
            <h2>{props.fullname}</h2>
            <h2>{displayName}</h2>            
        </div>
    );
}

export default Page2;


