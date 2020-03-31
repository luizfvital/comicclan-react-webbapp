import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './layout/Header'
import BooksCollection from './components/BooksCollection'
import Book from './components/Book'
import { Container } from './components/common/Container'

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Container>
          <Route exact path='/' component={BooksCollection} />
          <Route path='/book' component={Book} />
        </Container>
      </Router>
    </div>
  )
}

export default App
