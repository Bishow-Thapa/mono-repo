# mono-repo



## Lerna

![lerna](https://semaphoreci.com/wp-content/uploads/2021/06/lerna-workflow-1056x395.webp)

### Installation
```
$ npm i -g lerna
$ mkdir lerna-demo
$ cd lerna-demo
```

Lerna’s bootstrap command installs package dependencies and links the packages together

- `$ lerna bootstrap`

#### Versioning modes in Lerna
Before using Lerna you need to decide on a versioning scheme for your repository. Lerna supports `two modes`:
- Fixed mode
- Independent mode

```
lerna.json
{
  "version": "independent",
  "packages": ["packages/*"],
  "npmClient": "pnpm"
}

```


---
#### Reference 

- [How To Manage Monorepos With Lerna](https://www.digitalocean.com/community/tutorials/how-to-manage-monorepos-with-lerna)
- [JavaScript Monorepos with Lerna](https://semaphoreci.com/blog/javascript-monorepos-lerna)
- [11 Great Tools for a Monorepo in 2021](https://blog.bitsrc.io/11-tools-to-build-a-monorepo-in-2021-7ce904821cc2)

##### Issue solved
- [--use-workspaces and npm #3060 ](https://github.com/lerna/lerna/issues/3060)
