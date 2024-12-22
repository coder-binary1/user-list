There are two JavaScript file, both have done the same operation.

GET user information from --> https://jsonplaceholder.typicode.com/users
GET user avatar from -->https://xsgames.co/randomusers/avatar.php?g=male or ?g=female

WORKING STATE: The JS file called 'async.js' load the user information and avatar one by one.
ISSUE: The Js file called 'regular.js' can't load the user avatar form the mentioned API.

NOTE: The avatar API need special CORS policy. To avoid server-side CORS policy use the following chrome extension.
Chrome Extension: https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
