import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import image from '../../../../assets/png/imag_placeholder1@2x.png'

import { useStyles } from './styles'

const BookCard = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title='Book Name' />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.bookName}
          >
            Book Name
          </Typography>
          <div className={classes.usernameDiv}>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              className={classes.ownedBy}
            >
              Owned By
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
              className={classes.userName}
            >
              Username
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default BookCard
