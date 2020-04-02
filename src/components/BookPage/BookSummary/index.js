import React from 'react'

import Typography from '@material-ui/core/Typography'

import { useStyles } from './styles'

const BookSummary = () => {
  const classes = useStyles()

  return (
    <div className={classes.summary}>
      <Typography variant='body1' className={classes.text}>
        Eiusmod ad sit veniam sunt minim consectetur commodo ut incididunt
        nostrud qui incididunt nulla excepteur cillum. Id commodo voluptate
        commodo nulla et cillum id officia fugiat ut sunt in anim aute dolore
        nostrud elit. Proident veniam aliquip labore occaecat esse nulla enim ut
        enim officia laborum dolor ipsum ex exercitation nulla. Velit minim et
        elit fugiat dolore ipsum culpa sit laboris. Officia ipsum veniam do sint
        quis in magna eu. Voluptate pariatur ullamco reprehenderit irure sint
        sint irure do veniam pariatur in est voluptate ullamco ullamco.
      </Typography>
      <Typography variant='body1' className={classes.text}>
        Eiusmod ad sit veniam sunt minim consectetur commodo ut incididunt
        Fugiat aliquip non nisi dolore deserunt id dolore. Officia velit cillum
        consequat do adipisicing id cupidatat nostrud elit velit ad ipsum
        adipisicing ea nisi. Magna id elit aliquip tempor enim deserunt sit elit
        sit deserunt sunt reprehenderit nisi aute ea sunt laboris sint. Sunt
        duis anim sit in ipsum aliquip enim labore enim sint commodo do et do
        sit est est sit ipsum. Et mollit esse velit irure aliquip id dolore duis
        aliquip labore aliqua.
      </Typography>
    </div>
  )
}

export default BookSummary
