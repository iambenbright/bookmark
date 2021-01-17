import React from 'react';

// material-ui
import Link from '@material-ui/core/Link';
import { useTheme } from '@material-ui/core';

// styles
import useStyles from './styles';

const links = ['FEATURES', 'PRICING', 'CONTACT'];

interface LinkProps {
  atBottom?: boolean;
}

export default function NavLinks(props: LinkProps) {
  const classes = useStyles();
  const theme = useTheme();

  const { atBottom } = props;

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <nav className={classes.nav}>
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={`/${link}`}
          onClick={preventDefault}
          className={`${classes.link} ${atBottom ? classes.bottomNav : ''}`}
        >
          {link}
        </Link>
      ))}
    </nav>
  );
}
