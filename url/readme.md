
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

* format 方法允许将一个URL对象转换为URL字符串

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
* parse 方法来将一个URL字符串转换为URL对象

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

* resolve 方法可以用于拼接URL
    ```
        url.resolve('http://www.example.com/foo/bar', '../baz');
        /* =>
        http://www.example.com/baz
        */
    ```

## path  
    >  简化路径相关操作

* normalize 将传入的路径转换为标准路径
    > 标准化之后的路径里的斜杠在Windows系统下是\，而在*nix系统下是/。如果想保证任何系统下都使用/作为路径分隔符的话，需要用 ```<strong>.replace(/\\/g, '/')</strong> ```再替换一下标准路径。
* join 将传入的多个路径拼接为标准路径
    ```
        path.join('foo/', 'baz/', '../bar'); // => "foo/bar"
    ```
* extname 获得不同文件额扩展名
    ```
        path.extname('foo/bar.js'); // => ".js"
    ```








