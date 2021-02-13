import React from 'react';
import './ResponsiveNav.css';
import { Link } from 'react-router-dom';

function ResponsiveNav() {
    return (
        <>
        <div className="menuToggle" onclick="ToggleMeni()">

        </div>
        <div className="navigation">
            <div className="navArea">
                <ul>
                    <li>
                        <a href="#" onmouseenter="changeImage('host1')">Home</a>
                    </li>
                    <li>
                        <a href="#" onmouseenter="changeImage('host1')">About</a>
                    </li>
                    <li>
                        <a href="#" onmouseenter="changeImage('host1')">Services</a>
                    </li>
                    <li>
                        <a href="#" onmouseenter="changeImage('host1')">Portfolio</a>
                    </li>
                    <li>
                        <a href="#" onmouseenter="changeImage('host1')">Team</a>
                    </li>
                    <li>
                        <a href="#" onmouseenter="changeImage('host1')">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="imgArea">
                <img src="./img/host1.png" id="slider" alt=""/>
            </div>
        </div>
        </>
    )
}
/**
 * function changeImage(anything) {
 *  document.getElementById('slider').src = anything;
 * }
 * 
 * function ToggleMenu() {
 *  const menuToggle = document.querySelector('.menuToggle');
 *  const navigation = document.querySelector('.navigation');
 *  menuToggle.classList.toggle('active');
 *  navigation.classList.toggle('active');
 * }
 */

export default ResponsiveNav
