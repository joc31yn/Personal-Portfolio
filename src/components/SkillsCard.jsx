import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';

function SkillsCard(props) {
    const [showDesc, setShowDesc] = useState(false);
    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") {
            console.warn("IntersectionObserver is not supported in this environment.");
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });

        const elements = document.querySelectorAll(".hide");
        elements.forEach((el) => observer.observe(el));

        // Clean up observer on unmount
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <>
            <div style={{ transitionDelay: props.delay }} className={`hide w-1/5 bg-neutral-50 shadow-xl p-[2%] rounded-lg md:rounded-2xl max-w-44`}>
                <Image src={props.img} alt="skill"/>
                {/* onMouseOver={() => setShowDesc(true)}
                onMouseLeave={() => setShowDesc(false)} */}
                {/* <h2 className={`${showDesc ? "opacity-100" : "hidden"}`}
            >{props.skillName}</h2>
            <p className={`${showDesc ? "opacity-100" : "hidden"}`}>{props.desc}</p> */}
            </div >
        </>
    );
}

export default SkillsCard;