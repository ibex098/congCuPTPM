import { fade } from '@material-ui/core/styles';

const style = (theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    margin: 'auto 1rem',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 7),
    // transition: theme.transitions.create('width'),
    margin: 'auto 0 auto 1rem',
    width: '40vw',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
});

export default style;
