import React from 'react';
import './Articel.css'


const customStyle={
    color: 'tomato',
    fontWeight: 'bold',
    textDecoration: 'underline'
}
const Artical = () => {
    return (
        <div className='container text-center blog'>
            <article>Welcome to you world of react. In this world we will practice a single page application website . Beside this we also practice tuktak problem. success hote hoile emotional hoiya jawya jabena . code er modder blog page motivation na like english practice korle valo hoito boss. Okay let's write something about react.

                <h3 style={customStyle}>How does it works?</h3>
                <p style={{ color: 'blue' }}> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </article>
        </div>
    );
};

export default Artical;