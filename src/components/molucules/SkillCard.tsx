import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FC } from 'react';
import { SkillItem } from 'data/Skills';
import SimpleRating from 'components/atoms/SimpleRating';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  icon: {
    fontSize: 100,
    textAlign: 'center',
  },
});
const SkillCard: FC<{ skill: SkillItem }> = ({ skill }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.icon}>{skill.icon}</Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {skill.title}
          </Typography>
          <SimpleRating value={skill.rate} />
          <Typography variant="body2" color="textSecondary" component="p">
            {skill.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default SkillCard;
