import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const BookCard = ({ id, name, owner, image, history, classes }) => {
  const handleClick = () => history.push(`/book/${id}`)

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={image}
          title={`${name} - ${owner}`}
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.bookName}
          >
            {name}
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
              {owner}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default withRouter(BookCard)
