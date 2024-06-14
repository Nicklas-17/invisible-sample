Overview

This project demonstrates how to integrate a Rive animation within a React application. The goal was to recreate a Figma design implementation, To do this I used Rive for animations and React for web implementation. The Rive animation includes advanced hover effects and a click animation.

Features

Hover Animation: The Rive component responds with animations when hovered over, providing an interactive user experience.
Click to Reset: Clicking on the Rive component triggers an animation reset, returning it to its initial state.
Implementation

Rive Setup: A Rive animation file (invisible.riv) was created and configured with necessary animations and state machines.
React Integration: The Rive animation was integrated into a React component using the @rive-app/react-canvas library.

Explanation

useRive Hook: Loads the Rive animation file and initializes the state machine for autoplay.
RiveComponent: Renders the Rive animation with specified layout properties.

Conclusion

This project successfully demonstrates the integration of Rive animations within a React application, achieving interactive hover effects and a click animation. 
