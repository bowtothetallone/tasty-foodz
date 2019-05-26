# Questions for Admiral

- Formatting response page so it inherits CSS or replacing widget with text upon send?
  OLD WAY
  - Hit submit on the form, and the browser navigates to the URL of the post action/displays resulting page
    - Server needs to take info, send email, and display page
  NEW WAY
  - Form tag - form has fields that exists on the page. When user hits submit, the javascript reads form values, write into JS object, read action address/have variable stating where we'll be submitting
  - JS Event listener listens for submit, prevents default behavior (action URL). Read all the values from inputs, make JS object that looks like the objects of this form. Then you can either:
    - XML HTTP request - body of the request is XML. We use JSON instead of XML. Make a request to send data to server
    - OR Use Fetch - a browser API. 
  - Tell either of these request flavors that it's post, send to URL, data that you'd like to send along to message body
  - Might need to set up headers stating that it's JSON data, that it's a string (JSON best, easiest, fastest way to serialize/deserialize data).
  - When it gets to the server, we deserialize it.
   - Server's response - sends back down data to client's side, also sends data where it should go server side (database, email)
   - sends it back down as JSON - either create new HTML elements on the page, or show something that was hidden
 
  Asynchronous
  Javascript
  And 
  XML
  
- How to integrate email-sending service?
- How to build a shadowbox gallery?
- How to import and use Three.js?
- Favorite responsive layout strategies?
