import React from 'react'

import logo from '../../assets/png/Logo@2x.png'

import { useStyles } from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img src={logo} alt='Logo' />
    </div>
  )
}

export default Header
