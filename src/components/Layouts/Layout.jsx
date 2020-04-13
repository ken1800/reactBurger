import React from 'react'
import Aux from '../../containers/hoc/Aux'

 const Layout = (props)=> (

    <Aux>
             <div>Toolbar, Side drawer </div>
            <main>{props.children}</main>
    </Aux>
       
    );


export default  Layout;