import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { SkillItem } from 'data/SkillItems';
import SimpleRating from 'components/atoms/SimpleRating';
import { useInView } from 'react-intersection-observer';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  icon: {
    fontSize: 100,
    textAlign: 'center',
  },
});

const SkillCard = ({ skill }: { skill: SkillItem }) => {
  const classes = useStyles();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px',
  });
  return (
    <Grow in={inView}>
      <Card
        ref={ref}
        className={classes.root}
        style={{ border: 'none', boxShadow: 'none', borderRadius: 0 }}
      >
        <CardActionArea>
          <CardContent>
            <Typography className={classes.icon}>{skill.icon}</Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {skill.title}
            </Typography>
            <SimpleRating value={skill.rate} />
            <Typography variant="body2" component="p">
              {skill.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
};
export default SkillCard;
