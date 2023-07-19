import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../hook/useAuth';
import useMediaQuery from '../hook/useMediaQuery';
import { ThemeContext, themes } from '../hoc/ThemeProvider';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import Toggle from '../../elements/Toggle';


const useStyles = createUseStyles({
  root: {
    height: '10vh',
    maxHeight: '50px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
  },
  img__logo: {
    flexGrow: 1,
    '@media (max-width: 840px)': {
      display: 'none',
    }
  },
  props: {
    marginRight: '10px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon__bar: {
    display: 'none',
    '@media (max-width: 839px)': {
      display: 'block',
      marginLeft: '20px',
      fontSize: '1.5rem',
      cursor: 'pointer',
    }
  }
});


function HeaderComponent () {
  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const classes = useStyles();
  const widthMore840 = useMediaQuery('(min-width: 840px)');

  const handleLogout = () => {
    signout(() => navigate('/', { replace: true }));
  }

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <header className={classes.root}>
          <div className={classes.img__logo}></div>

          <FontAwesomeIcon
            className={classes.icon__bar}
            icon={faBars}
            color={'var(--primary)'}
            onClick={() => setOpenMobileMenu(true)}
          />

          {widthMore840
            ? <DesktopHeader />
            : <div onClick={() => { setOpenMobileMenu(false) }}>
                <MobileHeader open={openMobileMenu} onClose={() => { setOpenMobileMenu(false) }} />
              </div>
          }

          <div className={classes.props}>
            {user && <button onClick={handleLogout}>Logout</button>}
            
            <Toggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark)
                if (theme === themes.dark) setTheme(themes.light)
              }}
              value={theme === themes.dark}
            />
          </div>

        </header>
      )}
    </ThemeContext.Consumer>
  )
}

export default HeaderComponent;
