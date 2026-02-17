let heading = document.querySelector("h1")
let ul = document.querySelector("ul")
let api = "https://jsonplaceholder.typicode.com/users"

ul.innerHTML = "<div class='loader'></div>"


setTimeout((async function fetchUser() {

    try {
        let responseObj = await fetch(api)
        let result = await responseObj.json()
        ul.innerHTML = ""

        result.forEach(user => {

            let li = document.createElement("li")
            li.textContent = user.name
            ul.appendChild(li)

        });

        heading.textContent = "Users Fetched"
    }

    catch (err) {
        let li = document.createElement("li")
        li.textContent = "Something Went Wrong!"
        ul.appendChild(li)
    }

}), 1500)


/*
NOTES - setTimeout and fetch explained simple:

1. setTimeout waits 1500 ms before running the code inside it
2. The code inside is a function that fetches user data from the API
3. "try" = we try to get the data from the internet
4. fetch(api) = ask the website to send us user data
5. await = wait for the data to come back
6. responseObj.json() = change the data into something JavaScript can use
7. ul.innerHTML = "" = delete the loader spinner from the page
8. forEach = go through each user one by one
9. createElement("li") = create a new bullet point for the list
10. textContent = put the user's name inside the bullet point
11. appendChild = add the bullet point to the page
12. heading.textContent = change the title at the top to "Users Fetched"
13. "catch" = if something goes wrong (no internet, wrong address, etc)
14. Show error message = "Something Went Wrong!"
*/


/* 
fetch(api)
     .then((responseObj) => {
        return responseObj.json()
    })     .then((result) => {
        console.log(result)
    })


let fetchRes = fetch(api) returns a promise immediately of pending state
 console.log(fetchRes);  logging that promise state

 fetchRes.then(() => {
     console.log(fetchRes)    returns a promise that says fulfilled state and nothing else
 })

// fetchRes.then((responseObj) => console.log(responseObj))
// returns a the response obj that we get from the promise.



This object contains things like:

status (200, 404…)
headers
body (the data stream)
methods like .json(), .text(), .blob()

The Response object does contain the data, but not in usable form yet.

Think of it like this:

Response object = sealed package
Actual data = item inside the package

The data is inside the body stream of the response.
JavaScript cannot use it until you open and parse the package.

That’s why we must call one of these:

res.json()   // open package + convert JSON → JS object
res.text()   // open package + read as text
res.blob()   // open package + read as file

*/
