
## url

* 完整的 URL
    ```json
                                href
     -----------------------------------------------------------------
                                host              path
                          --------------- ----------------------------
     http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
     -----    ---------   --------   ---- -------- ------------- -----
    protocol     auth     hostname   port pathname     search     hash
                                                    ------------
                                                       query

    ```

* format方法允许将一个URL对象转换为URL字符串

    ```js
        url.format({
            protocol: 'http:',
            host: 'www.example.com',
            pathname: '/p/a/t/h',
            search: 'query=string'
        });
        /* =>
        'http://www.example.com/p/a/t/h?query=string'
        */
    ```
* parse方法来将一个URL字符串转换为URL对象

    ```js
        url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
        /* =>
        { protocol: 'http:',
          auth: 'user:pass',
          host: 'host.com:8080',
          port: '8080',
          hostname: 'host.com',
          hash: '#hash',
          search: '?query=string',
          query: 'query=string',
          pathname: '/p/a/t/h',
          path: '/p/a/t/h?query=string',
          href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
        */
    ```

* resolve方法可以用于拼接URL
    ```
        url.resolve('http://www.example.com/foo/bar', '../baz');
        /* =>
        http://www.example.com/baz
        */
    ```