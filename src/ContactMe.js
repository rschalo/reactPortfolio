import React from 'react';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => (
  <section id='contact'>
    <h2>CONTACT</h2>
    <section>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <a href='mailto:reed0schalo@gmail.com?subject=Resume%20Interest' target='_blank'>
          <FontAwesomeIcon
            className='social-icons'
            icon={faEnvelopeOpenText}
            style={{ color: 'grey', width: '30px' }}
            size='2x'
          />
        </a>
      </div>
    </section>
    <section>
      <ul
        style={{
          marginTop: '-2px',
          paddingLeft: '0',
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
      >
        <li style={{ margin: '4px' }}>
          <a href='https://github.com/rschalo' target='_blank'>
            <FontAwesomeIcon
              className='social-icons'
              icon={faGithubAlt}
              style={{ color: 'grey' }}
              size='2x'
            />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/reed-schalo/' target='_blank'>
            <FontAwesomeIcon
              className='social-icons'
              icon={faLinkedinIn}
              style={{ color: 'grey' }}
              size='2x'
            />
          </a>
        </li>
      </ul>
    </section>
  </section>
);

export default ContactMe;
