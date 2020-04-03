import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

export const CustomDivider = withStyles({
  root: {
    height: '2px',
    backgroundColor: '#535353',
    marginBottom: '60px'
  }
})(Divider)
