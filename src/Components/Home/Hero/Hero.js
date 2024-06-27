"use client"
import React, { useEffect } from "react";
import "./Hero.css";
import Hero_Blobs from "../Blob/Blob";

const Hero = () => {
  useEffect(() => {
    const resolver = {
      resolve: function resolve(options, callback) {
        const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
        const combinedOptions = { ...options, resolveString };

        function getRandomInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function randomCharacter(characters) {
          return characters[getRandomInteger(0, characters.length - 1)];
        }

        function doRandomiserEffect(options, callback) {
          const { characters, timeout, element, partialString, iterations } = options;

          setTimeout(() => {
            if (iterations >= 0) {
              const nextOptions = { ...options, iterations: iterations - 1 };

              if (iterations === 0) {
                element.innerHTML = partialString;
              } else {
                element.innerHTML = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
              }

              doRandomiserEffect(nextOptions, callback);
            } else if (typeof callback === "function") {
              callback();
            }
          }, timeout);
        }

        function doResolverEffect(options, callback) {
          const { resolveString, characters, offset } = options;
          const partialString = resolveString.substring(0, offset);
          const combinedOptions = { ...options, partialString };

          doRandomiserEffect(combinedOptions, () => {
            const nextOptions = { ...options, offset: offset + 1 };

            if (offset <= resolveString.length) {
              doResolverEffect(nextOptions, callback);
            } else if (typeof callback === "function") {
              callback();
            }
          });
        }

        doResolverEffect(combinedOptions, callback);
      }
    };

    const strings = [
      'VERSATILE<br/>THROUGH<br/>NEXUS.',
    ];

    let counter = 0;
    const options = {
      offset: 0,
      timeout: 35,
      iterations: 5,
      characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
      resolveString: strings[counter],
    };

    const element = document.querySelector('[data-target-resolver]');
    if (element) {
      options.element = element;
      resolver.resolve(options, callback);
    }

    function callback() {
      setTimeout(() => {
        counter++;

        if (counter >= strings.length) {
          // Stop recursion once all strings have been displayed once
          return;
        }

        const nextOptions = { ...options, resolveString: strings[counter] };
        resolver.resolve(nextOptions, callback);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      var scrollTop = window.scrollY;
      var parallaxValue = scrollTop * 0.15; // Adjust the factor to control the intensity of parallax
      const heroContent = document.querySelector('.hero_content');
      if (heroContent) {
        heroContent.style.transform = 'translateY(-' + parallaxValue + 'px)';
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="container hero_content">
        <div className="hero_info">
          <div className="left_body">
            <p className="hero_para">
              VersaNex: Elevating your online presence with the latest tech and
              techniques for a powerful digital impact!
            </p>
          </div>
          <div className="right_body">
            <h1 data-target-resolver></h1>
          </div>
        </div>
      </div>
      <Hero_Blobs />
    </section>
  );
};

export default Hero;
