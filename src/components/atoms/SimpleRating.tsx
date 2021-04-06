import Rating from '@material-ui/lab/Rating';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }),
);

const SimpleRating = ({ value }: { value: number }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating value={value} precision={0.5} readOnly />
    </div>
  );
};

export default SimpleRating;
