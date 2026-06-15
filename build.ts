import { $ } from 'bun';

await $`rm -rf ./dist`;

await Bun.build({
    entrypoints: ['./lib/index.ts'],
    outdir: './dist',
    format: 'esm',
    target: 'bun',
    tsconfig: './tsconfig.build.json',
    packages: 'external',
    splitting: true,
    sourcemap: 'linked',
});

await $`tsc -p tsconfig.build.json`;
