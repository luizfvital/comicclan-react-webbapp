import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Header from './layout/Header'
import BooksDirectoryPage from './components/BooksDirectoryPage'
import BookPage from './components/BookPage'
// import PageNotFound from './components/PageNotFound'
import { Container } from './components/common/Container'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100%',
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
          <Route exact path='/:category?' component={BooksDirectoryPage} />
          <Route path='/book/:book' component={BookPage} />
          {/* <Route component={PageNotFound} /> */}
        </Container>
      </Router>
    </div>
  )
}

export default App
