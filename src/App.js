import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Header from './layout/Header'
import BooksDirectoryPage from './components/BooksDirectoryPage'
import BookPage from './components/BookPage'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    fontFamily: 'Roboto'
  }
}))

/**
 * =====MAIN ROUTES=====
 *
 * BooksDirectoryPage: renders the homepage with a search input,
 * category buttons for grouping options and the results from
 * search.
 *
 * BookPage: renders a book page with its details and a section
 * with 5 books randomly picked based on the search results.
 */
const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route exact path='/:category?' component={BooksDirectoryPage} />
        <Route exact path='/book/:bookId' component={BookPage} />
      </Switch>
    </div>
  )
}

export default App
