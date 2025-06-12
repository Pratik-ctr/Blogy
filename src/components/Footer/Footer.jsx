import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaTwitter, FaPinterest, FaVimeoV } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <div className={styles.mainfooter}>
                <div className={styles.firstpart}>
                    <div className={styles.logopart}>
                        <img src="./logo.svg" alt='logo' className={styles.logo} />
                        <p>A minimal, functional theme for running a paid-membership publication on Ghost.</p>
                    </div>
                </div>
                <div className={styles.secoundpart}>
                    <div className={styles.footercolumn}>
                        <h3>Social</h3>
                        <ul>
                            <li><FaFacebook /> Facebook</li>
                            <li><FaTwitter /> Twitter</li>
                            <li><FaPinterest /> Pinterest</li>
                            <li><FaVimeoV /> Vimeo</li>
                        </ul>
                    </div>

                    <div className={styles.footercolumn}>
                        <h3>About</h3>
                        <ul>
                            <li>Style Guide</li>
                            <li>Features</li>
                            <li>Contact</li>
                            <li>404</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className={styles.footercolumn}>
                        <h3>Features</h3>
                        <ul>
                            <li>Upcoming Events</li>
                            <li>Blog & News</li>
                            <li>Features</li>
                            <li>FAQ Question</li>
                            <li>Testimonial</li>

                        </ul>
                    </div>

                    <div className={styles.footercolumn}>
                        <h3>Membership</h3>
                        <ul>
                            <li>Account</li>
                            <li>Membership</li>
                            <li>Subscribe</li>
                            <li>Tags</li>
                            <li>Authors</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>©Devcon's Software Solutions Pvt. Ltd.</p>
            </div>
        </>
    );
}

export default Footer
