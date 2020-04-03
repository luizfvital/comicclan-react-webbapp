import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ReactComponent as EmptyStar } from '../../../assets/svg/Empty_star.svg'
import { ReactComponent as FullStar } from '../../../assets/svg/Full_star.svg'

import { useStyles } from './styles'

const Ratings = ({ rating }) => {
  const classes = useStyles()

  const fullStarsCount = rating
  const emptyStarsCount = 5 - rating

  const fullStar = []
  const emptyStar = []

  for (let i = 0; i < fullStarsCount; i++) {
    fullStar.push(<FullStar key={uuidv4()} className={classes.star} />)
  }

  for (let i = 0; i < emptyStarsCount; i++) {
    emptyStar.push(<EmptyStar key={uuidv4()} className={classes.star} />)
  }

  return (
    <div className={classes.root}>
      {fullStar}
      {emptyStar}
    </div>
  )
}

export default Ratings
