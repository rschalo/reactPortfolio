import React from 'react';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeOpenText,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => (
  <section id='contact'>
    <h2>CONTACT</h2>
    <section>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
        }}
      >
        <ul
          style={{
            marginTop: '-10px',
            paddingLeft: '0',
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          <li style={{margin: '4px'}}>
            <a
              href='mailto:reed0schalo@gmail.com?subject=Resume%20Interest'
              target='_blank'
              rel='noopener noreferrer'
              title="email me and let's chat"
            >
              <FontAwesomeIcon
                className='social-icons'
                icon={faEnvelopeOpenText}
                style={{ color: 'grey', width: '30px' }}
                size='2x'
              />
            </a>
          </li>
          <li>
            <a
              href='https://docs.google.com/document/d/1pYPmxCyXu9eHma86Q4whvr9CXiowYKfV5VILJ0iA-hY/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              title='review my resume'
            >
              <FontAwesomeIcon
                className='social-icons'
                icon={faFilePdf}
                style={{ color: 'grey', width: '30px' }}
                size='2x'
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <ul
        style={{
          marginTop: '-23px',
          paddingLeft: '0',
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
      >
        <li style={{ margin: '4px' }}>
          <a
            href='https://github.com/rschalo'
            target='_blank'
            rel='noopener noreferrer'
            title='I write code on GitHub'
          >
            <FontAwesomeIcon
              className='social-icons'
              icon={faGithubAlt}
              style={{ color: 'grey' }}
              size='2x'
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/reed-schalo/'
            target='_blank'
            rel='noopener noreferrer'
            title='connect on LinkedIn'
          >
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
