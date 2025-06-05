import React, { useEffect, useState } from 'react';

export default function Educations() {
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        fetch('/src/assets/MyData.json')
            .then(res => res.json())
            .then(setEducations);
    }, []);

    return (
        <main className="educationMain experienceMain">
            <div className="educationDiv experienceDiv">
                <h1 className="experienceHeader">Utbildningar</h1>
                <section id="gridContainer">
                    {educations.map((edu, i) => (
                        <section className={`education job job${i+1}`} key={i}>
                            <h3>{edu.school}</h3>
                            <p>
                                <strong>{edu.program}</strong> <i>{edu.period}</i>
                            </p>
                            <p>{edu.description}</p>
                        </section>
                    ))}
                </section>
            </div>
        </main>
    );
}
