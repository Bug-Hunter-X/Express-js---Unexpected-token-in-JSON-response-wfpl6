# Express.js - Unexpected token in JSON response

This repository demonstrates a common error in Express.js applications: receiving an "Unexpected token" error when trying to parse a JSON response from the server.

The error is caused by sending an invalid JSON structure from the server.  The client (typically a web browser or another application making an API call) then fails to parse the malformed JSON.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run `node bug.js`.
4. Make a request to `http://localhost:3000/api/data`.
5. Observe the error in your browser's console or your network request tool (like Postman).  You should see a JSON parse error because the JSON sent from the server is incomplete.

## Solution

The `bugSolution.js` file provides a corrected version of the code that produces valid JSON.  Careful attention to JSON syntax is needed to prevent this issue.