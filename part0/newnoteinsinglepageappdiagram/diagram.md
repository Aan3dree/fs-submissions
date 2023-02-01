```mermaid
sequenceDiagram
  participant browser
  participant server
  
   browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
  activate server
  server->>browser: return the HTML document
  deactivate server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server->>browser: CSS file
  deactivate server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  activate server
  server->>browser: JavaScript file
  deactivate server
  
  Note right of browser: The browser starts execute JavaScript code and fetches the server
  
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server->>browser: [{"content":"jkjl","date":"2023-02-01T13:13:02.471Z"}, ... ]
  
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server->>browser: proccess the request and returns 201 status code
  deactivate server
  
  Note right of browser: send the headers in the requisition
  Note right of server: execute code and send the result to browser
```
