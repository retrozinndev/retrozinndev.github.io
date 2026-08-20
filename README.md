# [retrozinn.dev](https://retrozinn.dev/)
This is my personal website's repo!

You're allowed to use this under the terms of `GPL-3.0`, embedded 
in the `LICENSE` file at the root of the project directory.


## Development
Cloning, compiling and developing.

### Clone
```zsh
# via ssh:
git clone git@github.com:retrozinndev/retrozinn.dev.git
# via https:
git clone https://github.com/retrozinndev/retrozinn.dev.git
```

### Build
```zsh
pnpm build # or `pnpm astro build`
```

### Development Environment / `astro dev`
```zsh
pnpm dev # or `pnpm astro dev`
```

### Preview
```zsh
pnpm preview # or `pnpm astro preview`
```

### Shipping
Cloudflare automatically builds on push, so yeah.
```zsh
git push
```

#### Production-ready local build
```zsh
pnpm build --mode production # output on `dist/`
```
