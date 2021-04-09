import SkillCard from 'components/molucules/SkillCard';
import { SkillItem } from 'data/SkillItems';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const SkillCards = ({ skills }: { skills: SkillItem[] }) => {
  const classes = useStyles();
  const checked = true;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {skills.map((skill) => (
          <Grow
            in={checked}
            style={{
              transformOrigin: '0 0 0',
              transitionDelay: `${String(skill.id * 0.1)}s`,
            }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard skill={skill} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </div>
  );
};
export default SkillCards;
