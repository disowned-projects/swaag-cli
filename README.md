# swaag-cli 😎

> Swagger UI server CLI

When documentating APIs in swagger, using the online editor can cause troubles if we try to split documentation in multiple files. <br>`swaag` helps to easily host swagger-ui locally.<br>

Note that it hosts `swagger-ui`, not `swagger-editor`. You must edit the swagger files on your local editor.

To use the API directly, see [swaag](https://github.com/doshisid/swaag).

## Install

```
$ npm install -g swaag-cli
```

## Usage

```bash
$ swaag-cli -h

  Usage: swaag [options]


  Options:

    -V, --version             output the version number
    -e, --entry-point <file>  entry point of swagger documentation file
    -p, --port <p>            port number
    -w, --watch               watch the directory of entryPoint and update
    -h, --help                output usage information
```

## License

MIT © [Sid Doshi](https://sid.sh)
