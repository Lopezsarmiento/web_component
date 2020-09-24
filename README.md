# web_component
Web component for embedding React Applications using Babel and Webpack

Instructions:<br>
0 - npm install to add all the necessary dependencies.<br>
1 - Get the server running by executing "npm run dev" inside the project's folder (dubbelComponent).<br>
2 - Execute "npx webpack".<br>
3 - create a separate Html outside of the project's folder and include the following:<br>
  * !Load our React component. (to be added at the end of html the body)<br>
    <script src="http://localhost:3300/dubbelComponent.js"></script><br>
  * (div to be added anywhere inside the html the body)<br>
    (div class="col-md-12" id="web-component" div)<br>
    
The project uses bootstrap so make sure to add it in the front end html as well. 
