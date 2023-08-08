import React from 'react';
import Header from './Header';
import style from '../styles/Layout.module.css'
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className={style.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;