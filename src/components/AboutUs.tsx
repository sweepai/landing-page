import React from 'react';
import williamImage from '../assets/wz_pfp.png';
import kevinImage from '../assets/KEVIN.jpeg';

const AboutUs = () => {
    return (
        <div>
            <section>
                <img src={williamImage} alt="William" />
                <p>William was an engineer at Roblox</p>
            </section>
            <section>
                <img src={kevinImage} alt="Kevin" />
                <p>Kevin was a dropout from Waterloo</p>
            </section>
        </div>
    );
};

export default AboutUs;

export

