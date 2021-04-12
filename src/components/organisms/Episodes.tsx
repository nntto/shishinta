import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useInView } from 'react-intersection-observer';
import { Episode } from 'data/EpisodeItems';
import { Slide } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },

  secondarytail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Histories = ({ episodes }: { episodes: Episode[] }) => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px',
  });
  return (
    <Timeline align="alternate">
      {episodes.map((episode) => (
        <TimelineItem ref={ref}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {episode.date}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <Slide in={inView}>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  {episode.title}
                </Typography>
                <Typography>{episode.description}</Typography>
              </Paper>
            </TimelineContent>
          </Slide>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
export default Histories;
