import React, { useState, useEffect } from 'react';
import './sideNav.css';

const SideNav = () => {
    const [currentSection, setCurrentSection] = useState('');
    const [centerOffset, setCenterOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    current = section.id;
                    setCenterOffset(window.innerHeight / 2 - rect.top);
                }
            });

            setCurrentSection(current);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)!;
        const container = document.getElementById('snapContainer');
        if (section && container) {
            container.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className="side-navigation">
                {['Home', 'Resume', 'Courses', 'Involvement', 'Projects'].map((sectionId) => (
                    <div
                        key={sectionId}
                        className={`nav-item ${sectionId === currentSection ? 'active' : ''}`}
                        onClick={() => scrollToSection(sectionId)}
                    >
                        {sectionId}
                    </div>
                ))}
            </div>
            <div className="side-nav-bg"></div>
        </>
    );
};

export default SideNav;