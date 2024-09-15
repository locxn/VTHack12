Welcome to VoiceNest - speak to find your nest

Inspiration

Our original concept was to create a tool that utilized image comparison to help users find real-life listings based on visual input. However, we encountered several challenges in implementing that idea, prompting us to pivot to something a bit different. VoiceNest was born out of the desire to create a more intuitive and accessible way for users to find their dream homes using voice input.

What It Does

VoiceNest allows users to simply speak their preferences, and the website will search for real-life house listings that match their criteria. By leveraging voice recognition and AI, VoiceNest creates a streamlined, hands-free experience for home buyers or renters to find properties without the need for typing or manual searches.

How We Built It

VoiceNest’s frontend is built using React, JavaScript, CSS, and HTML. For the backend, we used Python and Flask to connect with the frontend via a Flask API. The project uses three AI models working together: one to analyze the user’s speech input, one to process and read scraped data, and another to generate personalized responses based on the results. We integrated Azure OpenAI Studio for natural language processing and Apify for web scraping, allowing us to pull real estate data from Zillow.

Challenges We Ran Into

Since it was our first time working with voice-to-text functionality, we encountered several issues implementing speech recognition. Coordinating the interaction between three AI models was another challenge, as we had to ensure that they communicated effectively to provide accurate responses. Web scraping and parsing data from Zillow was also new territory for us, and we faced our biggest hurdle in successfully connecting the frontend with the backend for seamless communication.

Accomplishments That We’re Proud Of

One of our proudest accomplishments is developing a functional demo that brings together multiple AI services and technologies. Creating a system where the AI models interact with each other to deliver personalized responses is a major milestone for us. We’re also excited about the small details, like animating the microphone button and text elements, which add polish to the user experience.

What We Learned

Through this project, we gained a deeper understanding of React and how frontend development can enhance the overall user experience. We also learned how to integrate multiple AI models to work together in a cohesive system. Scraping and processing real-time web data for the first time was a valuable learning experience, as was connecting and managing the frontend-backend flow.

What’s Next for VoiceNest

Looking ahead, we plan to expand VoiceNest to support additional input types, such as drawings and typed text, giving users more flexibility in how they interact with the platform. We also aim to broaden the scope of the real estate listings to cover more regions, ensuring VoiceNest is accessible to a wider audience across the globe.

How to Run:
"flask run" above api directory
"npm start"
*** dependencies intallations required, listed in code ***
