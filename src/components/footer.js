// import { Link } from "gatsby"
import React from 'react';
import Link from 'gatsby-link';


const Footer = () => (
    <footer>
        <div className='topfooter'>
            <div className='sect1'>
                <h2>Navigation</h2>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='https://membership.fossnss.org' target='blank'>
                            Membership
                        </a>
                    </li>
                    <li>
                        <a href='https://codema.in/plus-fossnss/'>
                            Loomio Discussions Group
                        </a>
                    </li>

                    <li>
                        <Link to='/codeofconduct'> Code of Conduct </Link>
                    </li>
                    <li>
                        <Link to='/supporters'> Our Supporters </Link>
                    </li>
                </ul>
            </div>
            <div className='sect2'>
                <h2>Links</h2>
                <ul>
                    <li>
                        <a href='https://plus.fosscommunity.in/'>
                            PLUS - Palakkad
                        </a>
                    </li>
                    <li>
                        <a href='https://wikiwikiweb.de/LugsList/'>
                            GLUG/FSUG India lists
                        </a>
                    </li>
                    <li>
                        <a href='https://www.gnu.org/'>GNU Project</a>
                    </li>
                    <li>
                        <a href='https://gitlab.com/fossnss/website'>
                            Website Source
                        </a>
                    </li>
                    <li>
                    <Link to='/contact'>
                            Contact us
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='footer'>
            <p>
                2020 - <strong>FOSSNSS</strong>
                <br />
                Unless otherwise stated, content is available under the
                <br />
                <a href='https://creativecommons.org/licenses/by-sa/4.0/'>
                    Creative Commons Attribution-ShareAlike Licensce
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;
