# MSAL / Authentication

[Followed tutorial](https://learn.microsoft.com/en-us/azure/active-directory/develop/index-spa)
[docs on react hooks](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md)

## Setup

Installed @azure/msal-browser @azure/msal-react

Added authConfig with clientId, authority & redirectUri

```js
const isAuthenticated = useIsAuthenticated();
```

above hook returns true if user is signed in
