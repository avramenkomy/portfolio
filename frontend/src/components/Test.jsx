import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from './hoc/ThemeProvider';
import Toggle from '../elements/Toggle';

const root_style = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
}

const item = {
  marginLeft: '20px',
  marginRight: '20px',
}


function Test () {
  return (
    <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <React.Fragment>
            <div style={{ marginTop: '100px', marginLeft: '100px'}}>
              <Toggle
                onChange={() => {
                  if (theme === themes.light) setTheme(themes.dark)
                  if (theme === themes.dark) setTheme(themes.light)
                }}
                value={theme === themes.dark}
              />
              <br />
              <br />
              <Link to="/">Home</Link>

              <h2 style={{ color: 'var(--contrast-text)'}}>Test colors</h2>
              <br />
              <div style={{ ...root_style, marginLeft: '100px' }}>
                <p style={{ ...item, color: 'var(--contrast-text)' }}>Contrast Text</p>
                <p style={{ ...item, color: 'var(--primary)' }}>Primary Text</p>
                <p style={{ ...item, color: 'var(--primary2)' }}>Primary2 Text</p>

                <p style={{ ...item, color: 'var(--secondary)' }}>Secondary Text</p>
                <p style={{ ...item, color: 'var(--secondary2)' }}>Secondary2 Text</p>

                <p style={{ ...item, color: 'var(--error)' }}>Error Text</p>
                <p style={{ ...item, color: 'var(--warning)' }}>Warning Text</p>
                <p style={{ ...item, color: 'var(--success)' }}>Success Text</p>

                <p style={{ ...item, color: 'var(--orange)' }}>Orange Text</p>
                <p style={{ ...item, color: 'var(--red)' }}>Red Text</p>      
                <p style={{ ...item, color: 'var(--yellow)' }}>Yellow Text</p>
                <p style={{ ...item, color: 'var(--green)' }}>Green Text</p>
                <p style={{ ...item, color: 'var(--white)' }}>White Text</p>
                <p style={{ ...item, color: 'var(--azur)' }}>Azur Text</p>
                <p style={{ ...item, color: 'var(--navy)' }}>Navy Text</p>
              </div>
              <br />

              <h2 style={{ color: 'var(--contrast-text)'}}>Test font-size</h2>
              <span style={{ fontSize: '0.5rem', color: 'var(--contrast-text)'}}>0.5rem</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--contrast-text)'}}>0.75rem</span>
              <span style={{ fontSize: '1rem', color: 'var(--contrast-text)'}}>1rem</span>
              <span style={{ fontSize: '1.5rem', color: 'var(--contrast-text)'}}>1.5rem</span>
              <span style={{ fontSize: '2rem', color: 'var(--contrast-text)'}}>2rem</span>
              <span style={{ fontSize: '2.5rem', color: 'var(--contrast-text)'}}>2.5rem</span>
              <span style={{ fontSize: '3rem', color: 'var(--contrast-text)'}}>3rem</span>
              <span style={{ fontSize: '3.5rem', color: 'var(--contrast-text)'}}>3.5rem</span>
              <span style={{ fontSize: '4rem', color: 'var(--contrast-text)'}}>4rem</span>
              <span style={{ fontSize: '4.5rem', color: 'var(--contrast-text)'}}>4.5rem</span>
              <span style={{ fontSize: '5rem', color: 'var(--contrast-text)'}}>5rem</span>
              <span style={{ fontSize: '6rem', color: 'var(--contrast-text)'}}>6rem</span>
              <span style={{ fontSize: '7rem', color: 'var(--contrast-text)'}}>7rem</span>
            </div>
          </React.Fragment>
        )}
    </ThemeContext.Consumer>
  )
}

export default Test;
