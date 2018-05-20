# TypeScript Module Path Aliases Demo

Demo showing how one can use absolute paths and aliases in TypeScript. This helps get away from this sort of hell.

```
import { whatever } from '../../../something/some/path'
```

The goal of this demo is to end up with something neat like so.

```
import { whatever } from '@something/some/path'
```

# Explanation

TypeScript **does not** convert something like `@something/some/path` to the "correct" path when generating JavaScript from TypeScript. Without any additional intervention or work, you may find that your TypeScript compiles fine using absolute paths, but that you see errors like so.

```
Error: Cannot find module
```

I misunderstood the purpose of `baseUrl`, `paths`, and `rootDir` in `tsconfig.json` and assumed `tsc` automatically handled this path resolution behavior in the generated JavaScript, but that is not the case.

As of time of writing, **the TypeScript team have made the choice to not supply this behavior** because it can be achieved with WebPack, SystemJS, RequireJS, or a similar module builder/resolution tool.

See all these articles for reference:

[[FEATURE] absolute->relative module path transformation](https://github.com/Microsoft/TypeScript/issues/15479)

> Our general take on this is that you should write the import path that works at runtime, and set your TS flags to satisfy the compiler's module resolution step, rather than writing the import that works out-of-the-box for TS and then trying to have some other step "fix" the paths to what works at runtime.
>
> We have about a billion flags that affect module resolutions already (baseUrl, path mapping, rootDir, outDir, etc). Trying to rewrite import paths "correctly" under all these schemes would be an endless nightmare.

[Cannot find module if alias paths are added to tsconfig ](https://github.com/wallabyjs/ngCliWebpackSample/issues/28)

> TypeScript path setting doesn't affect compiled JavaScript code or webpack bundling at all.

[Module path maps are not resolved in emitted code](https://github.com/Microsoft/TypeScript/issues/10866)

> Well and to add context, "paths" is designed for use with loaders that allow remapping, unlike the Node.js require(). The intended behaviour is to allow TypeScript to resolve type information for various module IDs used by various loaders, not to rewrite module IDs. Basically it doesn't do what you thought it did. Nor should it in my opinion, it should only have the capability to mirror the resolution strategies of loaders.

# Using module-alias

For a dead simple app, I found [module-alias](https://github.com/ilearnio/module-alias) was the best solution to handle this path resolution and aliasing. See the demo app in this repo for sample code. I found [this article by Claudio Cicali](https://medium.com/@caludio/how-to-use-module-path-aliases-in-visual-studio-typescript-and-javascript-e7851df8eeaa) very helpful.

```
npm install
npm start
```

# Other alternatives

* https://github.com/TypeStrong/ts-loader
* https://github.com/s-panferov/awesome-typescript-loader
* https://github.com/duffman/tspath
