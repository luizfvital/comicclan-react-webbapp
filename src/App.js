import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Header from './layout/Header'
import BooksCollection from './components/BooksCollection'
import Book from './components/Book'
// import PageNotFound from './components/PageNotFound'
import { Container } from './components/common/Container'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    backgroundColor: theme.palette.background.default,
    fontFamily: 'Roboto'
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Router>
        <Container>
          <Route exact path='/:category?' component={BooksCollection} />
          <Route path='/book/:book' component={Book} />
          {/* <Route component={PageNotFound} /> */}
        </Container>
      </Router>
    </div>
  )
}

export default App
