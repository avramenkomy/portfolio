import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    margin: '10px auto',
    width: '90vw',
    maxWidth: '1000px',
    minWidth: '300px',
    backgroundColor: 'none',
    textAlign: 'center',
    color: 'var(--primary)',
  },

  footers__up: {
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 599px)': {
      flexDirection: 'column',
    }
  },
  lists: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    '@media (max-width: 600px)': {
      width: '100%',
      marginBottom: '20px',
      justifyContent: 'space-between',
    }
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '30%',
  },
  list__title: {
    marginBottom: '10px',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    fontSize: '1.1rem',
    color: 'var(--contrast-text)',
    '@media (max-width: 800px) and (min-width: 600px)': {
      fontSize: '0.8rem',
      fontWeight: '500',
    }
  },
  list__item: {
    margin: '3px 0',
    textAlign: 'left',
    color: 'var(--contrast-text)',
    fontWeight: '400',
    fontSize: '1rem',
    '@media (max-width: 800px) and (min-width: 600px)': {
      fontSize: '0.75rem',
      fontWeight: '300',
    }
  },
  form__feedback: {
    paddingLeft: '10px',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    alignItems: 'flex-end',
    flexGrow: 1,
    flexWrap: 'nowrap',    
    '& > input': {
      marginBottom: '10px',
      width: '100%',
      border: 'none',
      borderRadius: '10px',
      background: 'whitesmoke',
      outline: 'none',
      padding: 0,
      paddingLeft: '10px',
    },
    '@media (max-width: 600px)': {
      width: '100%',
    }
  },
  message: {
    height: '100px',
  },
  sender: {
    height: '30px',
  },
  sender__email: {
    height: '30px',
  },
  btn__send: {
    padding: 0,
    width: '50%',
    height: '30px',
    fontSize: '12px',
    background: 'none',
    border: '1px solid var(--primary)',
    boxSizing: 'border-box',
    color: 'var(--primary)',
    borderRadius: '10px',
    '&:hover': {
      cursor: 'pointer',
      background: 'var(--primary)',
      color: 'whitesmoke',
    },
    '&:disabled': {
      color: '#727477',
      background: '#c5c6c7',
      border: '1px solid #727477',
      '&:hover': {
        cursor: 'not-allowed',
      }
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
    '@media (max-width: 600px)': {
      width: '50%',
    }
  },
  footers__down: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    height: '35px',
    maxWidth: '1000px',
    width: '90vw',
    margin: '0 auto',
    '@media (max-width: 450px)': {
      flexDirection: 'column-reverse',
      height: '70px',
    }
  },
  copyright: {
    flexGrow: '1',
    textAlign: 'left',
    color: 'var(--contrast-text)',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 450px)': {
      marginBottom: '15px',
    }
  },
  icon: {
    margin: '0 5px',
    paddingTop: '6px',
    paddingRight: '1px',
    width: '32px',
    height: '32px',
    border: '1px solid var(--contrast-text)',
    borderRadius: '16px',
    boxSizing: 'border-box',
    textAlign: 'center',
    color: 'var(--contrast-text)',
    '&:hover': {
      cursor: 'pointer',
    }
  },
})

function FooterComponent() {
  const classes = useStyles();

  return (
      <footer className={classes.root}>

        <div className={classes.footers__up}>
          <div className={classes.lists}>
            <div className={classes.list}>
              <span className={classes.list__title}>General</span>
              <span className={classes.list__item}>Test 1</span>
              <span className={classes.list__item}>Test 2</span>
              <span className={classes.list__item}>Test 3</span>
              <span className={classes.list__item}>Test 4</span>
              <span className={classes.list__item}>Test 5</span>
              <span className={classes.list__item}>Test 6</span>
            </div>
            <div className={classes.list}>
              <span className={classes.list__title}>Specific</span>
              <span className={classes.list__item}>Test 1</span>
              <span className={classes.list__item}>Test 2</span>
              <span className={classes.list__item}>Test 3</span>
              <span className={classes.list__item}>Test 4</span>
            </div>
            <div className={classes.list}>
              <span className={classes.list__title}>Extra</span>
              <span className={classes.list__item}>Test 1</span>
              <span className={classes.list__item}>Test 2</span>
              <span className={classes.list__item}>Test 3</span>
            </div>
          </div>
          <div className={classes.form__feedback}>
            <input type="text" className={classes.message} placeholder="Please, enter your message for me..." />
            <input type="text" className={classes.sender} placeholder="Enter your name..." />
            <input type="email" className={classes.sender__email} placeholder="If you want me to reply yout email, enter email address..."/>
            <button className={classes.btn__send}>Send</button>
          </div>
        </div>

        <div className={classes.footers__down}>
          <div className={classes.copyright}>
            <span className={classes.copyright__symbol}>&copy;</span>
            <span>&nbsp;Mikhail&nbsp;Avramenko&nbsp;{new Date().getFullYear()}</span>
          </div>
          <div className={classes.social}>
            <div className={classes.icon}>VK</div>
            <div className={classes.icon}>Y</div>
            <div className={classes.icon}>GH</div>
            <div className={classes.icon}>TG</div>
          </div>
        </div>

      </footer>
  )
}

export default FooterComponent;