import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  block: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 3,
    top: 0,
    left: 0,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lds_ellipsis: {
    display: 'inline-block',
    position: 'relative',
    width: '80px',
    height: '80px',
    '& div': {
      position: 'absolute',
      top: '33px',
      width: '13px',
      height: '13px',
      borderRadius: '50%',
      background: 'var(--primary)',
      animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
    },
    '& div:nth-child(1)': {
      left: '8px',
      animation: '$lds-ellipsis1 0.6s infinite',
    },
    '& div:nth-child(2)': {
      left: '8px',
      animation: '$lds-ellipsis2 0.6s infinite',
    },
    '& div:nth-child(3)': {
      left: '32px',
      animation: '$lds-ellipsis2 0.6s infinite',
    },
    '& div:nth-child(4)': {
      left: '56px',
      animation: '$lds-ellipsis3 0.6s infinite',
    },
  },
  '@keyframes lds-ellipsis1': {
    '0%': {
      transform: 'scale(0)',
    },
    '100%': {
      transform: 'scale(1)'
    }
  },
  '@keyframes lds-ellipsis3': {
    '0%': {
      transform: 'scale(1)',
    },
    '100%': {
      transform: 'scale(0)'
    }
  },
  '@keyframes lds-ellipsis2': {
    '0%': {
      transform: 'translate(0, 0)',
    },
    '100%': {
      transform: 'translate(24px, 0)',
    }
  },
});


export default function Loader() {
    const classes = useStyles();

    return (
        <div
          container
          className={classes.block}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div class={classes.lds_ellipsis}>
            <div /><div /><div /><div />
          </div>
        </div>
    )
}
