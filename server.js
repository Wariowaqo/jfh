/**
 * server.js
 * 
 * This Node.js server acts as a proxy for your client-side application.
 * It exposes an API endpoint that accepts contact form submissions and sends them to Supabase.
 * The service key, which has higher privileges than the anon key, is stored securely in .env.
 */

// Load environment variables from the .env file.
require('dotenv').config();

// Import necessary libraries.
const express = require('express');      // Express for the server framework.
const cors = require('cors');            // CORS middleware to allow cross-origin requests.
const { createClient } = require('@supabase/supabase-js');  // Supabase client library.

const app = express();

// Use CORS middleware to enable requests from different origins.
app.use(cors());
// Use JSON middleware to automatically parse JSON bodies.
app.use(express.json());

// Retrieve Supabase configuration from environment variables.
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

// Create a Supabase client instance using the service key.
// WARNING: The service key has broader permissions than the anon key.
// Use it only on the server where it is kept secret.
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

/**
 * POST /api/contact
 * This endpoint receives JSON data from the client (contact form submissions),
 * then inserts the data into the 'contact_messages' table in Supabase.
 */
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body; // Destructure the incoming data.

  try {
    // Insert the data into Supabase.
    const { data, error } = await supabaseClient
      .from('contact_messages')
      .insert([{ name, email, message }]);

    if (error) {
      // If Supabase returns an error, send a 400 response with the error message.
      return res.status(400).json({ error: error.message });
    }
    // If successful, send the inserted data back with a 200 status.
    res.status(200).json({ data });
  } catch (err) {
    // If any unexpected error occurs, log it and send a 500 response.
    console.error('Server error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server on the port specified in .env (or 3000 by default).
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
