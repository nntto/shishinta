import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';

export default [
  {
    id: 0,
    label: 'Twitter',
    value: 'twitter',
    icon: (
      <TwitterIcon
        onClick={() => window.open('https://twitter.com/shishinta8', '_blank')}
      />
    ),
  },
  {
    id: 1,
    label: 'Home',
    value: 'home',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    label: 'GitHub',
    value: 'github',
    icon: (
      <GitHubIcon
        onClick={() =>
          window.open('https://github.com/nntto/shishinta', '_blank')
        }
      />
    ),
  },
];
