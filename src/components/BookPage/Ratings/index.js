import React from 'react'

import { ReactComponent as EmptyStar } from '../../../assets/svg/Empty_star.svg'
import { ReactComponent as FullStar } from '../../../assets/svg/Full_star.svg'

import { useStyles } from './styles'

const Ratings = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <FullStar className={classes.star} />
      <FullStar className={classes.star} />
      <FullStar className={classes.star} />
      <FullStar className={classes.star} />
      <EmptyStar className={classes.star} />
    </div>
  )
}

export default Ratings
