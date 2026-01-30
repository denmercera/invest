import React, { useState, useEffect, useContext, createContext } from 'react';
import { ArrowLeft, ArrowRight } from '@gravity-ui/icons';

// Create Context
export const SlideshowContext = createContext();

export const useSlideshow = () => useContext(SlideshowContext);

export const Slideshow = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = React.Children.toArray(children);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
    };

    const goToSlide = (index) => {
        if (index >= 0 && index < slides.length) setCurrentSlide(index);
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide, slides.length]);

    return (
        <SlideshowContext.Provider value={{ currentSlide, nextSlide, prevSlide, goToSlide, totalSlides: slides.length }}>
            <div className="slideshow-container" style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: 'transparent'
            }}>
                {/* Progress Bar */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '6px',
                    backgroundColor: 'var(--color-accent-main)',
                    width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    transition: 'width 0.5s ease',
                    zIndex: 50
                }} />

                {/* Slide Track with Animation */}
                <div style={{
                    display: 'flex',
                    width: `${slides.length * 100}vw`,
                    height: '100%',
                    transform: `translateX(-${currentSlide * 100}vw)`,
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)'
                }}>
                    {slides.map((slide, index) => (
                        <div key={index} style={{ width: '100vw', height: '100vh', flexShrink: 0, overflow: 'hidden' }}>
                            {slide}
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="nav-btn-prev left-4 md:left-8"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 50,
                        backgroundColor: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        display: currentSlide === 0 ? 'none' : 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        opacity: 1,
                        pointerEvents: currentSlide === 0 ? 'none' : 'auto',
                        transition: 'transform 0.2s ease',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
                >
                    <ArrowLeft style={{ width: 24, height: 24 }} />
                </button>

                <button
                    onClick={nextSlide}
                    className="nav-btn-next right-4 md:right-8"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 50,
                        backgroundColor: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        opacity: currentSlide === slides.length - 1 ? 0.5 : 1,
                        pointerEvents: currentSlide === slides.length - 1 ? 'none' : 'auto',
                        transition: 'transform 0.2s ease',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
                >
                    <ArrowRight style={{ width: 24, height: 24 }} />
                </button>

                {/* Slide Counter */}
                <div className="left-4 md:left-8 bottom-4 md:bottom-8" style={{
                    position: 'absolute',
                    color: '#888',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    zIndex: 50
                }}>
                    {currentSlide + 1} <span style={{ opacity: 0.5, fontSize: '0.9rem' }}>/ {slides.length}</span>
                </div>

                {/* Hint */}
                {currentSlide === 0 && (
                    <div className="right-4 md:right-8 bottom-4 md:bottom-8" style={{
                        position: 'absolute',
                        color: '#aaa',
                        zIndex: 50,
                        fontSize: '0.9rem'
                    }}>
                        Используйте стрелки или кликайте по краям
                    </div>
                )}
            </div>
        </SlideshowContext.Provider>
    );
};

export const Slide = ({ title, children, className = '', style = {} }) => {
    return (
        <div className={`slide-wrapper ${className}`} style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
            ...style
        }}>
            <div className={`slide-content ${className}`} style={{
                maxWidth: '1200px',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                overflowY: 'auto',
                ...style
            }}>
                {title && <h2 className="text-4xl md:text-5xl font-extrabold mb-8 md:mb-12" style={{ lineHeight: 1.1 }}>{title}</h2>}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};


