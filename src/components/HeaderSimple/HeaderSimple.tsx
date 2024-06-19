import { useState, useEffect } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './HeaderSimple.module.css';
import LocalLogo from '../../assets/Signnary.svg';

const links = [
  { link: '/', label: 'About Us' },
  { link: '/predictpage', label: 'Predict' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Set the initial active state based on the current location
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleClick = (link: string) => {
    setActive(link);
    navigate(link);
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`${classes.link} ${active === link.link ? classes.active : ''}`}
      onClick={(event) => {
        event.preventDefault();
        handleClick(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div className={classes.logoContainer}>
          <img src={LocalLogo} alt="Logo" className={classes.logo} />
          <span className={classes.logoName}>Signnary</span>
        </div>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
