import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Header from './layout/Header'
import BooksDirectoryPage from './components/BooksDirectoryPage'
import BookPage from './components/BookPage'
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
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path='/:category?' component={BooksDirectoryPage} />
            <Route path='/book/:book' component={BookPage} />
          </Switch>
        </Container>
      </Router>
    </div>
  )
}

export default App
