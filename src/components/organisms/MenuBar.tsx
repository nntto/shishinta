import { Page } from 'data/Pages';
import { Link } from 'react-scroll';
import { sizes, colors } from 'assets/styles/MyTheme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  nav: {
    paddingTop: '50px',
  },
  navUl: {
    marginTop: sizes[4],
    listStyle: 'none',
    position: 'fixed',
    top: 0,
  },
  navUlLi: {
    display: 'inline',
    padding: `0 ${sizes[4]}`,
  },
  navUlLiLink: {
    textDecoration: 'none',
    paddingLeft: sizes[1],
    textTransform: 'uppercase',
    color: colors.common.headline,
    textShadow: '1px 1px 1px #ccc',
  },
});
export default ({ pages }: { pages: Page[] }) => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <ul className={classes.navUl}>
        {pages.map((item) => (
          <li className={classes.navUlLi}>
            <Link
              className={classes.navUlLiLink}
              activeClass="active"
              to={item.elementId}
              spy
              smooth
              offset={-70}
              duration={800}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
