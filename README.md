# azure-expressjs-unencoded-header

This example uses an Express Middleware to override the `req.path` with Azure App Services' `X_WAWS_UNENCODED_URL` header for paths that get encoded by the frontend.

[Code](https://github.com/chmald/azure-expressjs-unencoded-header/blob/master/routes/index.js#L4) example in `routes\index.js`