# FETCHING USERS USING API
Using an API to fetch user names.

## What this project does
This mini project demonstrates how to call a public users API with JavaScript, parse the JSON response, and render a list of user names into the page.

## How it works
- The HTML provides a simple container for the output.
- The JavaScript uses `fetch()` to request user data.
- The response is converted to JSON and mapped to user names.
- The DOM is updated to display the names.

## Promises, setTimeout, and error handling
- `setTimeout` delays the fetch by 1500 ms so the loader is visible before data arrives.
- The async function passed to `setTimeout` returns a Promise; `await` pauses inside that function until `fetch()` resolves and `response.json()` completes.
- If any step fails (network error, bad response, JSON parse), the `catch` block runs and renders a friendly error message.

## Files
- `index.html` contains the page structure.
- `style.css` provides basic styling.
- `script.js` fetches the data and updates the UI.

