/**
 * script.js
 *
 * This file contains all the JavaScript functionality for the "Journey for Hope" website.
 *
 * Features included:
 * 1. Supabase Client Initialization:
 *    - Uses environment variables (injected via a build tool like Vite) to initialize the client.
 *    - The Supabase anon key is safe for client-side use (secured via Row Level Security on your database).
 *
 * 2. Contact Form Submission:
 *    - Captures user input from the contact form.
 *    - Inserts the data into the 'contact_messages' table using the Supabase client.
 *
 * 3. Hamburger Menu Toggle:
 *    - Enables the mobile navigation menu to be toggled when clicking the hamburger icon.
 *
 * 4. Smooth Scrolling:
 *    - Implements smooth scrolling behavior for in-page anchor links.
 *
 * 5. Fade-In Animation on Scroll:
 *    - Uses the Intersection Observer API to add a fade-in effect to elements as they scroll into view.
 *
 * Environment:
 * - The environment variables are accessed via import.meta.env (provided by Vite or similar bundlers).
 *
 * NOTE:
 * - Ensure that you have already included the supabase-js library in your HTML (via a CDN).
 *   For example:
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@latest/dist/supabase.min.js"></script>
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===============================================================
    // 1. Initialize the Supabase Client Using Environment Variables
    // ===============================================================
    // Retrieve the Supabase URL and anon key from environment variables.
    // These environment variables are defined in your .env file with VITE_ prefix.
    const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;       // e.g., "https://abcxyz.supabase.co"
    const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY; // Your project's anon key
  
    // Create the Supabase client instance using the supabase-js library.
    // This client instance will be used to interact with your Supabase database.
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  
    // ===============================================================
    // 2. Handle Contact Form Submission to Insert Data into Supabase
    // ===============================================================
    // Select the contact form element from the DOM.
    const contactForm = document.querySelector('.contact-form');
  
    if (contactForm) {
      // Add a submit event listener on the contact form.
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent the default page refresh behavior on form submit.
  
        // Retrieve and trim the user input values from the form fields.
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        // Simple client-side validation to ensure all fields are filled.
        if (!name || !email || !message) {
          alert("Please fill out all fields.");
          return;
        }
  
        try {
          // Insert a new record into the 'contact_messages' table using the Supabase client.
          // The table must exist in your Supabase project.
          let { data, error } = await supabaseClient
            .from('contact_messages')
            .insert([{ name, email, message }]);
  
          // Check if there was any error returned by Supabase.
          if (error) {
            console.error('Error inserting data:', error);
            alert("There was an error submitting your message. Please try again later.");
          } else {
            // On successful insertion, alert the user and optionally reset the form.
            alert("Thank you for your message!");
            contactForm.reset();
          }
        } catch (err) {
          // Log any unexpected error and notify the user.
          console.error('Unexpected error:', err);
          alert("An unexpected error occurred. Please try again later.");
        }
      });
    }
  
    // ===============================================================
    // 3. Hamburger Menu Toggle for Mobile Navigation
    // ===============================================================
    // Select the hamburger menu icon and navigation links.
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    // Check if both elements exist before adding an event listener.
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation links to show/hide the mobile menu.
        navLinks.classList.toggle('active');
      });
    }
  
    // ===============================================================
    // 4. Smooth Scrolling for Internal Anchor Links
    // ===============================================================
    // This function makes clicking on an anchor link scroll smoothly to the referenced section.
    const setupSmoothScroll = () => {
      // Select all anchor links that reference an in-page target (starting with '#').
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent the default jump-to behavior.
          const targetId = this.getAttribute('href');
          if (targetId.length > 1) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              // Scroll to the target element smoothly.
              targetElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }
        });
      });
    };
    // Initialize the smooth scrolling functionality.
    setupSmoothScroll();
  
    // ===============================================================
    // 5. Fade-In Animation on Scroll Using Intersection Observer API
    // ===============================================================
    // This function observes elements with the class 'fade-in' and adds an 'appear'
    // class when they are scrolled into view.
    const setupFadeInOnScroll = () => {
      // Select all elements that should fade in.
      const faders = document.querySelectorAll('.fade-in');
  
      // Check that there are elements to observe and that the browser supports IntersectionObserver.
      if (faders.length > 0 && 'IntersectionObserver' in window) {
        // Create a new IntersectionObserver instance with a callback function.
        const appearOnScrollObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            // If the element is not intersecting (not in view), do nothing.
            if (!entry.isIntersecting) return;
  
            // When the element is in view, add the 'appear' class to trigger the CSS transition.
            entry.target.classList.add('appear');
            // Stop observing this element after it has appeared.
            observer.unobserve(entry.target);
          });
        }, {
          threshold: 0.5,            // Trigger when 50% of the element is visible.
          rootMargin: "0px 0px -50px 0px" // Adjust margin to control when the animation occurs.
        });
  
        // Observe each element with the 'fade-in' class.
        faders.forEach(fader => {
          appearOnScrollObserver.observe(fader);
        });
      }
    };
    // Initialize fade-in on scroll functionality.
    setupFadeInOnScroll();
  
    // ===============================================================
    // End of script.js
    // ===============================================================
  });
  