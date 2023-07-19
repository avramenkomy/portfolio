import React from 'react';
import { Outlet } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';

const useStyles = createUseStyles({
  hr: {
    margin: '20px auto',
    padding: 0,
    height: '1px',
    maxWidth: '1000px',
    width: '90vw',
    border: 'none',
    backgroundColor: 'var(--primary)',
  },
})

const Hr = () => {
  const classes = useStyles();
  return <hr className={classes.hr}/>
}


function Layout() {

  return (
    <React.Fragment>

      <HeaderComponent id="header"/>

      <main className="container" id="main">
        <Outlet />
      </main>

      <Hr id="hr"/>

      <FooterComponent id="footer"/>
    </React.Fragment>
  )
}

export default Layout;
