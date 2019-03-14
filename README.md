npm i

npm run build:ssr && npm run serve:ssr

We use src/app/startup.service.ts for initial backend request

We use that data it in src/app/app.component.ts

Dump of index.html

```

<!DOCTYPE html><html lang="en"><head>
  <meta charset="utf-8">
  <title>CliSsrProt</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles.3ff695c00d717f2d2a11.css"><style ng-transition="serverApp">
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */</style></head>
<body>
  <app-root _nghost-sc0="" ng-version="7.2.9"><div _ngcontent-sc0="" style="text-align:center"><h1 _ngcontent-sc0=""> Welcome to cli-ssr-prot! </h1><img _ngcontent-sc0="" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==" width="300"></div><h2 _ngcontent-sc0="">Here are some links to help you start: </h2><ul _ngcontent-sc0=""><li _ngcontent-sc0=""><h2 _ngcontent-sc0=""><a _ngcontent-sc0="" href="https://angular.io/tutorial" rel="noopener" target="_blank">Tour of Heroes</a></h2></li><li _ngcontent-sc0=""><h2 _ngcontent-sc0=""><a _ngcontent-sc0="" href="https://angular.io/cli" rel="noopener" target="_blank">CLI Documentation</a></h2></li><li _ngcontent-sc0=""><h2 _ngcontent-sc0=""><a _ngcontent-sc0="" href="https://blog.angular.io/" rel="noopener" target="_blank">Angular blog</a></h2></li></ul><router-outlet _ngcontent-sc0=""></router-outlet></app-root>
<script type="text/javascript" src="runtime.26209474bfa8dc87a77c.js"></script><script type="text/javascript" src="es2015-polyfills.c5dd28b362270c767b34.js" nomodule=""></script><script type="text/javascript" src="polyfills.8bbb231b43165d65d357.js"></script><script type="text/javascript" src="main.ab744c40fc8239922bbf.js"></script>

<script id="serverApp-state" type="application/json">{&q;G.https://reqres.in/api/users?page=2&q;:{&q;body&q;:{&q;page&q;:2,&q;per_page&q;:3,&q;total&q;:12,&q;total_pages&q;:4,&q;data&q;:[{&q;id&q;:4,&q;first_name&q;:&q;Eve&q;,&q;last_name&q;:&q;Holt&q;,&q;avatar&q;:&q;https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg&q;},{&q;id&q;:5,&q;first_name&q;:&q;Charles&q;,&q;last_name&q;:&q;Morris&q;,&q;avatar&q;:&q;https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg&q;},{&q;id&q;:6,&q;first_name&q;:&q;Tracey&q;,&q;last_name&q;:&q;Ramos&q;,&q;avatar&q;:&q;https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg&q;}]},&q;headers&q;:{&q;date&q;:[&q;Thu, 14 Mar 2019 12:54:15 GMT&q;],&q;content-type&q;:[&q;application/json; charset=utf-8&q;],&q;content-length&q;:[&q;443&q;],&q;connection&q;:[&q;keep-alive&q;],&q;x-powered-by&q;:[&q;Express&q;],&q;access-control-allow-origin&q;:[&q;*&q;],&q;etag&q;:[&q;W/\&q;1bb-wM9a6JWbwt3JpLNfwoQwxnqaC3Y\&q;&q;],&q;expect-ct&q;:[&q;max-age=604800, report-uri=\&q;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\&q;&q;],&q;server&q;:[&q;cloudflare&q;],&q;cf-ray&q;:[&q;4b766529f8eb843c-KBP&q;]},&q;status&q;:200,&q;statusText&q;:&q;OK&q;,&q;url&q;:&q;https://reqres.in/api/users?page=2&q;}}</script></body></html>
```
