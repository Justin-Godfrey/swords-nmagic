import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/login' componenet={login} />
        <Route path='/highlights' component={highlights} /> */}
    </Switch>
)