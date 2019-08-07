Reference: https://medium.com/@kitsonk/develop-with-deno-and-visual-studio-code-225ce7c5b1ba

deno types > lib/lib.deno_runtime.d.ts

configure Visual Studio Code to use the locally installed version of TypeScript
    - >Typescript:

export DENO_DIR="/Users/shudong/workspace/hello_deno/deno"

deno run --log-level=info --reload --allow-env --allow-net --allow-read --allow-write mod.ts

deno run –allow-net=deno.land/ –allow-write=/tmp script.ts

deno run --config ./tsconfig_deno.json ts_array.ts