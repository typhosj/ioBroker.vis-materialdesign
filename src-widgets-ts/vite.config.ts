import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import vitetsConfigPaths from 'vite-tsconfig-paths';
import { federation } from '@module-federation/vite';
import { moduleFederationShared } from '@iobroker/types-vis-2/modulefederation.vis.config';
import { readFileSync } from 'node:fs';

const pack = JSON.parse(readFileSync('./package.json').toString());

export default {
    plugins: [
        federation({
            manifest: true,
            name: 'vis2MaterialDesignWidgets',
            filename: 'customWidgets.js',
            exposes: {
                './MaterialDesignButton': './src/MaterialDesignButton',
                './MaterialDesignCheckbox': './src/MaterialDesignCheckbox',
                './MaterialDesignIcon': './src/MaterialDesignIcon',
                './MaterialDesignSwitch': './src/MaterialDesignSwitch',
                './MaterialDesignValue': './src/MaterialDesignValue',
                './translations': './src/translations',
            },
            remotes: {},
            shared: moduleFederationShared(pack),
            dts: false,
        }),
        react(),
        vitetsConfigPaths(),
        commonjs(),
    ],
    base: './',
    build: {
        target: 'chrome89',
        outDir: './build',
        rollupOptions: {
            onwarn(warning: { code: string }, warn: (warning: { code: string }) => void): void {
                if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
                    return;
                }
                warn(warning);
            },
        },
    },
};
