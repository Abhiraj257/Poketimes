import React, { Component } from 'react'
import Navbar from './Components/Navbar'
// import Test from './Components/test'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Post from './Components/Post'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

// Trying on my own

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className='app'>
//           <Test />
//           <Route exact path='/' component={Home} />
//           <Route path='/about' component={About} />
//           <Route path='/contact' component={Contact} />
//         </div>
//       </BrowserRouter>
//     )
//   }
// }

export default App
