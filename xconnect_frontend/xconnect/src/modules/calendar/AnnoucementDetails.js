import React from "react";
import './AnnoucementDetails.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Details() {
    return (
        <div className="container" style={{ display: 'flex', height:'100vh'}}>
            <i className="fas fa-circle" style={{ marginRight: '10px', color: '#63E6BE', marginTop: '8px' }}></i>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ color: '#63E6BE' }}>SPORTS DAY</h2>
                <p style={{ alignSelf: 'flex-start' }}>SUNDAY - 24 FEB</p>
                <div style={{ display: 'flex'}}>
                    <i className="fa fa-bars" style={{ color: '#63E6BE', fontSize: '20px', marginTop: '5px' }}></i>
                    <p style={{ margin: '0', marginLeft: '5px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt asperiores ab sapiente fugit facilis voluptatem? Beatae blanditiis laudantium, repellendus, iusto non asperiores rerum cupiditate placeat, nam recusandae in obcaecati qui veniam ullam distinctio quos.</p>
                </div>
            </div>
        </div>
    );
}
