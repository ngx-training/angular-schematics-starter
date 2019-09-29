import {
  apply,
  applyTemplates,
  chain,
  HostTree,
  mergeWith,
  Rule,
  url
} from '@angular-devkit/schematics';

export interface ComponentOptions {
  spec: boolean;
}

export function component(_options: ComponentOptions): Rule {
  return (_host: HostTree) => {
    const templates = apply(url('./files'), [applyTemplates({})]);

    return chain([mergeWith(templates)]);
  };
}
