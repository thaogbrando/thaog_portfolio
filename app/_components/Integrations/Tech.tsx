'use client';

import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdCircle } from 'react-icons/md'
import { gsap } from "gsap";

const tech = ['Next.Js', "Sanity", 'TailwindCss'];
gsap.registerPlugin(ScrollTrigger);

const Tech = () => {

    const component = useRef(null);
    const tech_color = '#58acbb'

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); 
  }, []);

     
    return (
        <section
            className="wrapper overflow-hidden"
            ref={component}
        >
           
            {tech.map((t, index) => (
                <div
                    key={index}
                    className="tech-row mb-8 flex items-center justify-center gap-4"
                    aria-label={t || ""}
                >
                    {Array.from({ length: 25 }, (_, index) => (
                        <React.Fragment key={index}>
                            <span
                                className={
                                    "tech-item text-4xl font-semibold uppercase tracking-tighter"
                                }
                                style={{
                                    color: index === 12 && tech_color ? tech_color : "inherit",
                                    fontWeight: index === 12 && tech_color ? '900' : "inherit",
                                    
                                }}
                            >
                                {t}
                            </span>
                            <span className="text-lg">
                                <MdCircle />
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </section>
    )
}

export default Tech