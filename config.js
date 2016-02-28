System.config({
  baseURL: "/",
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true },
  packages: {'app': {defaultExtension: 'ts'}},
  paths: {
    "packages:*": "bower_components/*"
  }
});
