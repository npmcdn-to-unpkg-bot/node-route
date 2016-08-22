##  fs

* 文件属性读写
    1. fs.stat
    2. fs.chmod
    3. fs.chown

* 文件内容读写
    1. fs.readFile
    2. fs.readdir
    3. fs.writeFile
    4. fs.mkdir

* 底层文件操作
    1. fs.open
    2. fs.read
    3. fs.write
    4. fs.close
    

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

