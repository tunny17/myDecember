import gsap from 'gsap';
import SplitText from '../../utils/Split3.min.js';
import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader';
import useOnScreen from '../../hooks/useOnScreen';
import './style.scss'
import cn from 'classnames';

const About = () => {

  const ref = useRef();

  const [reveal, setReveal] = useState(false)

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if(reveal) {
      const split = new SplitText('#headline', {
        type: 'lines',
      });
  
      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2',
      });
    }
  }, [reveal]);



  return (
    <section  className={cn('about-section')}
      data-scroll-section
    >
    <SectionHeader  title='about' />
      <p ref={ref} id='headline'
        className={cn({'is-reveal': reveal })}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aspernatur dolorum adipisci optio. 
        Soluta atque dolor perferendis accusantium error ea? 
        Omnis at quis eius veritatis cupiditate vero, unde quasi deserunt ipsum.
      </p>
    </section>
  );
}

export default About
