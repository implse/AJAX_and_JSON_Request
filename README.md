## How to use AJAX to load external JSON file

Simple project explaining how to use `XMLHttpRequest()` to load and parse external JSON data.
Then we render JSON data to a DOM element.

- `XMLHttpRequest()` : The constructor initializes an XMLHttpRequest. It must be called before any other method calls.

- `open()` : Initializes a request.

- `send()`: Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.

- `onreadystatechange` : An `EventHandler` that is called whenever the readyState attribute changes.

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

To start the local Dev Server on port `8000`:

`python -m http.server`
