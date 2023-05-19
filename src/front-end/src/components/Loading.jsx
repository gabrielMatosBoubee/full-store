import React from 'react';
import loading from '../images/oval.svg'

function Loading() {
    return (
        <div>
          <img src={loading} alt="" style={{width: "300px"}} />
        </div>
    );
}

export default Loading;