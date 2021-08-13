import React from 'react';
import styled, { keyframes } from 'styled-components';
//found at: https://www.joshwcomeau.com/snippets/react-components/fade-in/
const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`
const fadeOut = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`
const Fade = ({
    duration = 500,
    delay = 0,
    type,
    children,
    ...delegated
}) => {
    const style = {
        ...(delegated.style || {}),
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms'
    }
    if (type === 'fadein') {
        return (
            <FadeIn
                {...delegated}
                style={style}
            >
                {children}
            </FadeIn>
        );
    } else if (type === 'fadeout') {
        return (
            <FadeOut
                {...delegated}
                style={style}
            >
                {children}
            </FadeOut>
        );
    }
    return (
        <>{children}</>
    )
};

const FadeIn = styled.div`
    height: 100%;
    @media (prefers-reduced-motion: no-preference) {
        animation-fill-mode: backwards;
        animation-name: ${fadeIn}
    }
`
const FadeOut = styled.div`
    height: 100%;
    @media (prefers-reduced-motion: no-preference) {
        animation-fill-mode: backwards;
        animation-name: ${fadeOut}
    }
`

export default Fade