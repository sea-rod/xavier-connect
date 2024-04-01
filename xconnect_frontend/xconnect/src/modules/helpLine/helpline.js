import React from 'react';
import './helpline.css';

export default function HelpLine() {

    const departments = [
        { name: 'BCA', phone: '9865477453', email: 'xavbca@gmail.com', imagePath: "/images/HelpLine/icon1.png" },
        { name: 'Commerce', phone: '9865477453', email: 'xavcom@gmail.com', imagePath: '/images/HelpLine/icon2.png' },
        { name: 'Arts', phone: '9865477453', email: 'xavarts@gmail.com', imagePath: '/images/HelpLine/icon3.png' },
    ];

    return (
        <>
            <div className="container">
                <div className='helpline-hero-container'>
                    <img src={process.env.PUBLIC_URL + "/images/HelpLine/hero.png"} alt="Helpline" />
                    <div className="helpline-hero-text">
                        <h1>HELPLINE</h1>
                        <p>Your well-being matters most</p>
                    </div>
                </div>

                <img className='my-3' src={process.env.PUBLIC_URL + "/images/HelpLine/2.png"} alt="Helpline" style={{ width: '100%' }} />

                <div className='mt-2'>
                    {departments.map((dept, index) => (
                        <div key={index} className={`helpline-department helpline-${dept.name.toLowerCase()}`}>
                            <div className="department-header">
                                <img src={process.env.PUBLIC_URL + dept.imagePath} alt={dept.name} className="department-icon" />
                                <h2>{dept.name}</h2>
                            </div>
                            <p>Phone Number: {dept.phone}</p>
                            <p>Email: {dept.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

