# Tenzies Game

This project involved creating an interactive dice game built with React, based on the design provided in the following Figma file:
[Figma Design](https://www.figma.com/design/FqsxRUhAaXM4ezddQK0CdR/Tenzies?node-id=0-1&t=aE7rG5leYe23iVrK-1)

Players click on dice to hold them in place, then roll the remaining dice to try and match all dice to the same value. The goal is to get all ten dice showing the same number in the fewest rolls possible. Once achieved, the player wins and can start a new game with celebratory confetti.

## Setup Requirements

To run this project locally:

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

**Key Concepts Applied:**

- **React State Management with Complex Data:** Implemented state management using `useState` to maintain an array of dice objects at the application level. Each die object contained properties for its value, unique ID, and hold status, enabling precise tracking of game state and user interactions across multiple dice simultaneously.

- **useRef Hook for DOM Access:** Leveraged the `useRef` hook to create direct references to DOM elements, specifically targeting the New Game button to programmatically focus it. This implementation enhanced the application's accessibility by ensuring keyboard navigation users have a clear focus indicator after game completion.

- **useEffect Hook for Side Effects:** Implemented React's `useEffect` hook to manage side effects and DOM interactions outside of the normal render cycle. Used this hook to automatically focus the New Game button when the player wins, demonstrating how to safely interact with the DOM in a React application while maintaining component lifecycle best practices.

- **Advanced Array Methods for Game Logic:** Implemented comprehensive game logic using JavaScript's built-in array methods:

  - Used `.map()` to transform dice data and generate dynamic Die components
  - Applied `.every()` to determine win conditions by checking if all dice share the same value and are held
  - Leveraged array manipulation techniques for rolling specific dice while preserving held dice states

- **Dynamic Conditional Rendering:** Created user interface elements that adapt based on game state, including displaying victory confetti animations (react-confetti), dynamically changing button text between "Roll" and "New Game," and switching button functionality based on whether the player has won or is still playing.

**Learning Journey Highlights:**

The most significant breakthrough came from understanding how to structure complex state in React applications. Managing an array of objects where each object represents a die with multiple properties (value, ID, and hold status) required careful consideration of state updates and immutability principles. This experience reinforced the importance of treating state as immutable and creating new state objects rather than mutating existing ones.

Working with the `useRef` hook provided valuable insights into when direct DOM manipulation is appropriate in React applications. While React typically handles DOM updates through its virtual DOM system, there are specific cases—like programmatic focus management for accessibility—where direct DOM access is not only acceptable but necessary for creating inclusive user experiences.

The implementation of win condition logic using the `.every()` array method was particularly educational. This required understanding how to combine multiple boolean conditions (all dice held AND all dice showing the same value) into a single, efficient check that triggers game completion. The experience highlighted the power of functional programming concepts in creating clean, readable game logic.

Another key insight emerged from implementing conditional rendering patterns that go beyond simple show/hide functionality. The dynamic button behavior—where the same button element serves different purposes depending on game state—demonstrated advanced React patterns for creating flexible, reusable interface components.

The project also provided hands-on experience with component composition and data flow in React. Passing click handlers and state data down to child Die components while maintaining centralized game logic illustrated React's unidirectional data flow principles and the importance of proper component architecture in interactive applications.
