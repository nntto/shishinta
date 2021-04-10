import SkillCard from 'components/molucules/SkillCard';
import { SkillItem } from 'data/SkillItems';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LazyLoad from 'components/atoms/LazyLoad';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const SkillCards = ({ skills }: { skills: SkillItem[] }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4}>
            <LazyLoad>
              <SkillCard skill={skill} />
            </LazyLoad>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default SkillCards;
