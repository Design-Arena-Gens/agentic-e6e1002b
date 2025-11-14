'use client';
import { useState } from 'react';
import styles from './page.module.css';

const slides = [
  {
    title: "The Evolution of Poverty Intervention",
    content: "Today we're going to explore how approaches to poverty intervention have changed over time. We'll look at the limitations of traditional aid methods, the emergence of direct cash transfers, and what current research suggests about their impact.",
    type: "title"
  },
  {
    title: "Traditional Aid: The Starting Point",
    content: "For decades, many families around the world have lived in extreme poverty. Beginning in the 1960s, charitable organizations invested billions of dollars in traditional aid programs. These included education initiatives, job training, agricultural support, infrastructure development, and health programs, all intended to help people achieve long-term financial independence.",
    bullets: [
      "Education initiatives",
      "Job training programs",
      "Agricultural support",
      "Infrastructure development",
      "Health programs"
    ]
  },
  {
    title: "What Researchers Found",
    content: "In the late 1990s and early 2000s, economists began using randomized controlled trials to evaluate these programs. The results were surprising: many of these interventions had minimal long-term impact on poverty reduction.",
    bullets: [
      "Randomized controlled trials introduced (1990s-2000s)",
      "Many traditional programs showed minimal long-term impact",
      "Led to questioning conventional approaches"
    ]
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <div className={styles.slideContainer}>
          <div className={`${styles.slide} ${slide.type === 'title' ? styles.titleSlide : ''}`}>
            <h1 className={styles.slideTitle}>{slide.title}</h1>
            <div className={styles.slideContent}>
              <p>{slide.content}</p>
              {slide.bullets && (
                <ul className={styles.bulletList}>
                  {slide.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className={styles.controls}>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={styles.navButton}
          >
            ← Previous
          </button>

          <div className={styles.slideIndicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={styles.navButton}
          >
            Next →
          </button>
        </div>

        <div className={styles.slideCounter}>
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
}
