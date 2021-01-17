import React from 'react';

// material-ui
import Link from '@material-ui/core/Link';

// styles
import useStyles from './styles';

const links = ['FEATURES', 'PRICING', 'CONTACT'];

interface LinkProps {
  atBottom?: boolean;
}

export default function NavLinks(props: LinkProps) {
  const classes = useStyles();
  const { atBottom } = props;

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <nav className={`${classes.nav} ${atBottom ? classes.bottomNav : ''}`}>
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={`/${link}`}
          onClick={preventDefault}
          className={`${classes.link} ${atBottom ? classes.bottomLink : ''}`}
        >
          {link}
        </Link>
      ))}
    </nav>
  );
}
