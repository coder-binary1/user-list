## Acknowledgements

There are two JavaScript file, both have done the same operation.

```bash
 GET user information from --> https://jsonplaceholder.typicode.com/users
```

```bash
 GET user avatar from --> https://xsgames.co/randomusers/avatar.php?g=male or ?g=female
```

### WORKING STATE:

The JS file called `js/async.js` load the user information and avatar one by one.

### ISSUE:

The Js file called `js/regular.js` can't load the user avatar form the mentioned API.

### NOTE:

The avatar API need special CORS policy. To avoid server-side CORS policy use the following chrome extension.

- Link: [Chrome Extension](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
