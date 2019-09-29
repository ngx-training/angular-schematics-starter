import { strings } from '@angular-devkit/core';
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
  name: string;
  spec: boolean;
}

export function component(options: ComponentOptions): Rule {
  return (_host: HostTree) => {
    console.log(options);

    const templates = apply(url('./files'), [
      applyTemplates({ ...options, ...strings })
    ]);

    return chain([mergeWith(templates)]);
  };
}
