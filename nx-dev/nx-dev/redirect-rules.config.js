/**
 * Executors & Generators old url schemes to package schema viewer url schemes (added 2022-03-16)
 */
const schemaUrls = {
  '/workspace/library': '/packages/workspace/generators/library',
  '/workspace/npm-package': '/packages/workspace/generators/npm-package',
  '/workspace/move': '/packages/workspace/generators/move',
  '/workspace/remove': '/packages/workspace/generators/remove',
  '/workspace/run-commands-generator':
    '/packages/workspace/generators/run-commands',
  '/workspace/workspace-generator':
    '/packages/workspace/generators/workspace-generator',
  '/workspace/convert-to-nx-project-generator':
    '/packages/workspace/generators/convert-to-nx-project',
  '/workspace/run-commands-executor':
    '/packages/workspace/executors/run-commands',
  '/workspace/run-script': '/packages/workspace/executors/run-script',
  '/js/library': '/packages/js/generators/library',
  '/js/convert-to-swc': '/packages/js/generators/convert-to-swc',
  '/js/tsc': '/packages/js/executors/tsc',
  '/js/swc': '/packages/js/executors/swc',
  '/web/application': '/packages/web/generators/application',
  '/web/build': '/packages/web/executors/webpack',
  '/web/dev-server': '/packages/web/executors/dev-server',
  '/web/file-server': '/packages/web/executors/file-server',
  '/web/package': '/packages/web/executors/rollup',
  '/angular/application': '/packages/angular/generators/application',
  '/angular/convert-tslint-to-eslint':
    '/packages/angular/generators/convert-tslint-to-eslint',
  '/angular/downgrade-module': '/packages/angular/generators/downgrade-module',
  '/angular/karma': '/packages/angular/generators/karma',
  '/angular/karma-project': '/packages/angular/generators/karma-project',
  '/angular/library': '/packages/angular/generators/library',
  '/angular/library-secondary-entry-point':
    '/packages/angular/generators/library-secondary-entry-point',
  '/angular/mfe-host': '/packages/angular/generators/mf-host',
  '/angular/mfe-remote': '/packages/angular/generators/mf-remote',
  '/packages/angular/generators/mfe-host':
    '/packages/angular/generators/mf-host',
  '/packages/angular/generators/mfe-remote':
    '/packages/angular/generators/mf-remote',
  '/angular/move': '/packages/angular/generators/move',
  '/angular/ngrx': '/packages/angular/generators/ngrx',
  '/angular/scam': '/packages/angular/generators/scam',
  '/angular/scam-directive': '/packages/angular/generators/scam-directive',
  '/angular/scam-pipe': '/packages/angular/generators/scam-pipe',
  '/angular/setup-mfe': '/packages/angular/generators/setup-mf',
  '/packages/angular/generators/setup-mfe':
    '/packages/angular/generators/setup-mf',
  '/angular/setup-tailwind': '/packages/angular/generators/setup-tailwind',
  '/angular/stories': '/packages/angular/generators/stories',
  '/angular/storybook-configuration':
    '/packages/angular/generators/storybook-configuration',
  '/angular/upgrade-module': '/packages/angular/generators/upgrade-module',
  '/angular/web-worker': '/packages/angular/generators/web-worker',
  '/angular/delegate-build': '/packages/angular/executors/delegate-build',
  '/angular/ng-packagr-lite': '/packages/angular/executors/ng-packagr-lite',
  '/angular/package': '/packages/angular/executors/package',
  '/angular/webpack-browser': '/packages/angular/executors/webpack-browser',
  '/angular/webpack-server': '/packages/angular/executors/webpack-dev-server',
  '/packages/angular/executors/webpack-server':
    '/packages/angular/executors/webpack-dev-server',
  '/react/application': '/packages/react/generators/application',
  '/react/component': '/packages/react/generators/component',
  '/react/component-cypress-spec':
    '/packages/react/generators/component-cypress-spec',
  '/react/component-story': '/packages/react/generators/component-story',
  '/react/library': '/packages/react/generators/library',
  '/react/redux': '/packages/react/generators/redux',
  '/react/stories': '/packages/react/generators/stories',
  '/react/storybook-configuration':
    '/packages/react/generators/storybook-configuration',
  '/react/hook': '/packages/react/generators/hook',
  '/jest/jest': '/packages/jest/executors/jest',
  '/cypress/cypress': '/packages/cypress/executors/cypress',
  '/cypress/cypress-project': '/packages/cypress/generators/cypress-project',
  '/storybook/configuration': '/packages/storybook/generators/configuration',
  '/storybook/cypress-project':
    '/packages/storybook/generators/cypress-project',
  '/storybook/migrate-defaults-5-to-6':
    '/packages/storybook/generators/migrate-defaults-5-to-6',
  '/storybook/migrate-stories-to-6-2':
    '/packages/storybook/generators/migrate-stories-to-6-2',
  '/storybook/executors-build': '/packages/storybook/executors/build',
  '/storybook/executors-storybook': '/packages/storybook/executors/storybook',
  '/storybook/extra-topics-for-angular-projects':
    '/storybook/overview-angular#more-documentation',
  '/linter/eslint': '/packages/linter/executors/eslint',
  '/linter/lint': '/packages/linter/executors/lint',
  '/linter/workspace-rule': '/packages/linter/generators/workspace-rule',
  '/node/application': '/packages/node/generators/application',
  '/node/library': '/packages/node/generators/library',
  '/node/webpack': '/packages/node/executors/webpack',
  '/node/node': '/packages/node/executors/node',
  '/express/application': '/packages/express/generators/application',
  '/nest/application': '/packages/nest/generators/application',
  '/nest/class': '/packages/nest/generators/class',
  '/nest/controller': '/packages/nest/generators/controller',
  '/nest/decorator': '/packages/nest/generators/decorator',
  '/nest/filter': '/packages/nest/generators/filter',
  '/nest/gateway': '/packages/nest/generators/gateway',
  '/nest/guard': '/packages/nest/generators/guard',
  '/nest/interceptor': '/packages/nest/generators/interceptor',
  '/nest/interface': '/packages/nest/generators/interface',
  '/nest/library': '/packages/nest/generators/library',
  '/nest/middleware': '/packages/nest/generators/middleware',
  '/nest/module': '/packages/nest/generators/module',
  '/nest/pipe': '/packages/nest/generators/pipe',
  '/nest/provider': '/packages/nest/generators/provider',
  '/nest/resolver': '/packages/nest/generators/resolver',
  '/nest/resource': '/packages/nest/generators/resource',
  '/nest/service': '/packages/nest/generators/service',
  '/nest/convert-tslint-to-eslint':
    '/packages/nest/generators/convert-tslint-to-eslint',
  '/next/application': '/packages/next/generators/application',
  '/next/component': '/packages/next/generators/component',
  '/next/page': '/packages/next/generators/page',
  '/next/build': '/packages/next/executors/build',
  '/next/server': '/packages/next/executors/server',
  '/next/export': '/packages/next/executors/export',
  '/detox/application': '/packages/detox/generators/application',
  '/detox/build': '/packages/detox/executors/build',
  '/detox/test': '/packages/detox/executors/test',
  '/react-native/application': '/packages/react-native/generators/application',
  '/react-native/component': '/packages/react-native/generators/component',
  '/react-native/library': '/packages/react-native/generators/library',
  '/react-native/component-story':
    '/packages/react-native/generators/component-story',
  '/react-native/stories': '/packages/react-native/generators/stories',
  '/react-native/storybook-configuration':
    '/packages/react-native/generators/storybook-configuration',
  '/react-native/build-android':
    '/packages/react-native/executors/build-android',
  '/react-native/bundle': '/packages/react-native/executors/bundle',
  '/react-native/ensure-symlink':
    '/packages/react-native/executors/ensure-symlink',
  '/react-native/run-android': '/packages/react-native/executors/run-android',
  '/react-native/run-ios': '/packages/react-native/executors/run-ios',
  '/react-native/start': '/packages/react-native/executors/start',
  '/react-native/storybook': '/packages/react-native/executors/storybook',
  '/react-native/sync-deps': '/packages/react-native/executors/sync-deps',
  '/nx-plugin/executor': '/packages/nx-plugin/generators/executor',
  '/nx-plugin/migration': '/packages/nx-plugin/generators/migration',
  '/nx-plugin/plugin': '/packages/nx-plugin/generators/plugin',
  '/nx-plugin/schematic': '/packages/nx-plugin/generators/generator',
  '/nx-plugin/e2e': '/packages/nx-plugin/executors/e2e',
};

/**
 * Guide specific rules (added 2022-01-04)
 */
const guideUrls = {
  '/core-concepts/configuration': '/reference/project-configuration',
  '/core-concepts/mental-model': '/using-nx/mental-model',
  '/core-concepts/updating-nx': '/using-nx/updating-nx',
  '/core-concepts/ci-overview': '/using-nx/ci-overview',
  '/getting-started/nx-cli': '/using-nx/nx-cli',
  '/getting-started/console': '/using-nx/console',
  '/core-extended/affected': '/using-nx/affected',
  '/core-extended/computation-caching': '/using-nx/caching',
  '/guides/nextjs': '/next/overview',
  '/using-nx/nx-devkit': '/extending-nx/nx-devkit',
  '/structure/project-graph-plugins': '/extending-nx/project-graph-plugins',
  '/guides/lerna-and-nx': '/migration/lerna-and-nx',
};

/**
 * Diataxis restructure specific rules (added 2022-09-02)
 */
const diataxis = {
  '/getting-started/nx-setup': '/getting-started/intro',
  '/getting-started/nx-core': '/getting-started/core-tutorial',
  '/getting-started/nx-and-typescript': '/getting-started/intro',
  '/getting-started/nx-and-react': '/getting-started/intro',
  '/getting-started/nx-and-angular': '/getting-started/intro',
  '/configuration/packagejson': '/reference/project-configuration',
  '/configuration/projectjson': '/reference/project-configuration',
  '/using-nx/nx-cli': '/getting-started/intro',
  '/using-nx/console': '/core-features/integrate-with-editors',
  '/using-nx/mental-model': '/concepts/mental-model',
  '/using-nx/caching': '/concepts/how-caching-works',
  '/using-nx/dte': '/core-features/distribute-task-execution',
  '/using-nx/affected': '/concepts/affected',
  '/using-nx/ci-overview': '/recipes/ci/ci-setup',
  '/using-nx/updating-nx': '/core-features/automate-updating-dependencies',
  '/using-nx/nx-nodejs-typescript-version-matrix':
    '/workspace/nx-nodejs-typescript-version-matrix',
  '/extending-nx/nx-devkit': '/plugin-features/create-your-own-plugin',
  '/extending-nx/project-inference-plugins':
    '/recipes/advanced-plugins/project-inference-plugins',
  '/extending-nx/project-graph-plugins':
    '/recipes/advanced-plugins/project-graph-plugins',
  '/migration/lerna-and-nx': '/recipes/adopting-nx/lerna-and-nx',
  '/migration/adding-to-monorepo': '/recipes/adopting-nx/adding-to-monorepo',
  '/migration/migration-cra': '/recipes/adopting-nx/migration-cra',
  '/migration/migration-angular': '/recipes/adopting-nx/migration-angular',
  '/migration/migration-angularjs': '/recipes/adopting-nx/migration-angularjs',
  '/migration/preserving-git-histories':
    '/recipes/adopting-nx/preserving-git-histories',
  '/migration/manual': '/recipes/adopting-nx/manual',
  '/executors/using-builders': '/plugin-features/use-task-executors',
  '/executors/run-commands-builder': '/recipes/executors/run-commands-executor',
  '/executors/creating-custom-builders':
    '/recipes/executors/creating-custom-executors',
  '/generators/using-generators': '/plugin-features/use-code-generators',
  '/generators/workspace-generators':
    '/recipes/generators/workspace-generators',
  '/generators/composing-generators':
    '/recipes/generators/composing-generators',
  '/generators/generator-options': '/recipes/generators/generator-options',
  '/generators/creating-files': '/recipes/generators/creating-files',
  '/generators/modifying-files': '/recipes/generators/modifying-files',
  '/structure/applications-and-libraries':
    'more-concepts/applications-and-libraries',
  '/structure/creating-libraries': '/more-concepts/creating-libraries',
  '/structure/library-types': '/more-concepts/library-types',
  '/structure/grouping-libraries': '/more-concepts/grouping-libraries',
  '/structure/buildable-and-publishable-libraries':
    '/more-concepts/buildable-and-publishable-libraries',
  '/structure/monorepo-tags': '/core-features/enforce-project-boundaries',
  '/structure/dependency-graph': '/core-features/explore-graph',
  '/structure/project-graph-plugins':
    '/recipes/advanced-plugins/project-graph-plugins',
  '/ci/monorepo-ci-azure': '/recipes/ci/monorepo-ci-azure',
  '/ci/monorepo-ci-circle-ci': '/recipes/ci/monorepo-ci-circle-ci',
  '/ci/monorepo-ci-github-actions': '/recipes/ci/monorepo-ci-github-actions',
  '/ci/monorepo-ci-jenkins': '/recipes/ci/monorepo-ci-jenkins',
  '/ci/monorepo-ci-gitlab': '/recipes/ci/monorepo-ci-gitlab',
  '/ci/monorepo-ci-bitbucket-pipelines':
    '/recipes/ci/monorepo-ci-bitbucket-pipelines',
  '/ci/distributed-builds': '/concepts/dte', // 👀
  '/ci/incremental-builds': '/more-concepts/incremental-builds',
  '/ci/setup-incremental-builds-angular':
    '/recipes/other/setup-incremental-builds-angular',
  '/guides/turbo-and-nx': '/more-concepts/turbo-and-nx',
  '/guides/why-monorepos': '/more-concepts/why-monorepos',
  '/guides/adding-assets-react': '/recipes/other/adding-assets-react',
  '/guides/environment-variables': '/reference/environment-variables',
  '/guides/monorepo-nx-enterprise': '/more-concepts/monorepo-nx-enterprise',
  '/guides/performance-profiling': '/recipes/other/performance-profiling',
  '/guides/eslint': '/recipes/other/eslint',
  '/guides/customize-webpack': '/recipes/other/customize-webpack',
  '/guides/nx-daemon': '/more-concepts/nx-daemon',
  '/guides/js-and-ts': '/recipes/other/js-and-ts',
  '/guides/browser-support': '/recipes/other/browser-support',
  '/guides/react-native': '/recipes/other/react-native',
  '/guides/deploy-nextjs-to-vercel': '/recipes/other/deploy-nextjs-to-vercel',
  '/guides/webpack-5': '/recipes/other/webpack-5',
  '/guides/using-tailwind-css-in-react':
    '/recipes/other/using-tailwind-css-in-react',
  '/guides/react-18': '/recipes/other/react-18',
  '/guides/using-tailwind-css-with-angular-projects':
    '/recipes/other/using-tailwind-css-with-angular-projects',
  '/guides/misc-ngrx': '/recipes/other/misc-ngrx',
  '/guides/misc-data-persistence': '/recipes/other/misc-data-persistence',
  '/guides/nx-devkit-angular-devkit': '/more-concepts/nx-devkit-angular-devkit',
  '/module-federation/faster-builds':
    '/recipes/module-federation/faster-builds',
  '/module-federation/micro-frontend-architecture':
    '/more-concepts/micro-frontend-architecture',
  '/module-federation/dynamic-module-federation-with-angular':
    '/recipes/module-federation/dynamic-module-federation-with-angular',
  '/examples/nx-examples': '/recipes/other/nx-examples',
  '/examples/react-nx': '/recipes/other/react-nx',
  '/examples/apollo-react': '/recipes/other/apollo-react',
  '/examples/caching': '/recipes/other/caching',
  '/examples/dte': '/recipes/other/dte',
  '/recipe/workspace-generators': '/recipes/generators/local-generators',
};

/**
 * API overview packages
 */
const overviewUrls = {
  '/workspace/nrwl-workspace-overview': '/packages/workspace',
  '/js/overview': '/packages/js',
  '/web/overview': '/packages/web',
  '/angular/overview': '/packages/angular',
  '/react/overview': '/packages/react',
  '/jest/overview': '/packages/jest',
  '/cypress/overview': '/packages/cypress',
  '/linter/overview': '/packages/linter',
  '/node/overview': '/packages/node',
  '/express/overview': '/packages/express',
  '/nest/overview': '/packages/nest',
  '/next/overview': '/packages/next',
  '/detox/overview': '/packages/detox',
  '/react-native/overview': '/packages/react-native',
  '/nx-plugin/overview': '/packages/nx-plugin',
};

/**
 * API removing CLI and putting the content into Nx
 */
const cliUrls = {
  '/cli/create-nx-workspace': '/nx/create-nx-workspace',
  '/cli/generate': '/nx/generate',
  '/cli/run': '/nx/run',
  '/cli/daemon': '/nx/daemon',
  '/cli/dep-graph': '/nx/dep-graph',
  '/cli/run-many': '/nx/run-many',
  '/cli/affected': '/nx/affected',
  '/cli/affected-dep-graph': '/nx/affected-dep-graph',
  '/cli/affected-apps': '/nx/affected-apps',
  '/cli/affected-libs': '/nx/affected-libs',
  '/cli/print-affected': '/nx/print-affected',
  '/cli/format-check': '/nx/format-check',
  '/cli/format-write': '/nx/format-write',
  '/cli/migrate': '/nx/migrate',
  '/cli/report': '/nx/report',
  '/cli/list': '/nx/list',
  '/cli/workspace-lint': '/nx/workspace-lint',
  '/cli/workspace-generator': '/nx/workspace-generator',
  '/cli/connect-to-nx-cloud': '/nx/connect-to-nx-cloud',
  '/cli/reset': '/nx/reset',
};
/**
 * Recipes
 */
const recipesUrls = {
  '/recipe/adding-to-monorepo': '/recipes/adopting-nx/adding-to-monorepo',
};

/**
 * Tutorial Updates
 */
const oldReactTutorialPaths = [
  '/react-tutorial/01-create-application',
  '/react-tutorial/02-add-e2e-test',
  '/react-tutorial/03-display-todos',
  '/react-tutorial/04-connect-to-api',
  '/react-tutorial/05-add-node-app',
  '/react-tutorial/06-proxy',
  '/react-tutorial/07-share-code',
  '/react-tutorial/08-create-libs',
  '/react-tutorial/09-dep-graph',
  '/react-tutorial/10-computation-caching',
  '/react-tutorial/11-test-affected-projects',
  '/react-tutorial/12-summary',
];
const reactRedirectDestination = '/react-tutorial/1-code-generation';
const reactTutorialRedirects = oldReactTutorialPaths.reduce((acc, path) => {
  acc[path] = reactRedirectDestination;
  return acc;
}, {});
const oldNodeTutorialPaths = [
  '/node-tutorial/01-create-application',
  '/node-tutorial/02-display-todos',
  '/node-tutorial/03-share-code',
  '/node-tutorial/04-create-libs',
  '/node-tutorial/05-dep-graph',
  '/node-tutorial/06-computation-caching',
  '/node-tutorial/07-test-affected-projects',
  '/node-tutorial/08-summary',
];
const nodeRedirectDestination = '/node-tutorial/1-code-generation';
const nodeTutorialRedirects = oldNodeTutorialPaths.reduce((acc, path) => {
  acc[path] = nodeRedirectDestination;
  return acc;
}, {});
const tutorialRedirects = Object.assign(
  reactTutorialRedirects,
  nodeTutorialRedirects
);

/**
 * Public export API
 */
module.exports = {
  cliUrls,
  diataxis,
  guideUrls,
  overviewUrls,
  recipesUrls,
  schemaUrls,
  tutorialRedirects,
};
