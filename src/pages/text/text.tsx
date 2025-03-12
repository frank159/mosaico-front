import React, { useEffect, useRef } from 'react';
import { AnimatedText } from './textStyled';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

interface TextComponentProps {
  type: 'p' | 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}

const TextComponent: React.FC<TextComponentProps> = ({ type, children = '' as React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Inicia com o texto vazio
      textRef.current.innerText = '';

      // Anima a opacidade do elemento
      gsap.fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );

      // Após 1 segundo, anima o texto preenchendo o elemento
      gsap.to(textRef.current, {
        text: { value: (children || '').toString(), delimiter: '' },
        duration: 2,
        ease: 'none',
        delay: 1,
      });
    }
  }, [children]);

  return <AnimatedText as={type} ref={textRef}>{children}</AnimatedText>;
};

export default TextComponent;
