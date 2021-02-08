const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../tsconfig.json'),
    []);

module.exports = {
    output: {
        uniqueName: "appFront"
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({

            remotes: {
                "inicializacao-remote": "inicializacao@http://localhost:4201/inicializacaoRemoteEntry.js",
            },
            shared: {
                "@angular/core": { singleton: true, strictVersion: false },
                "@angular/common": { singleton: true, strictVersion: false },
                "@angular/router": { singleton: true, strictVersion: false },
                // @ben Disabled, does not work (build step stuck)
                // ...sharedMappings.getDescriptors()
            }

        }),
        sharedMappings.getPlugin(),
    ],
};
