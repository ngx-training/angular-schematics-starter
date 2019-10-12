import {
  apply,
  applyTemplates,
  chain,
  forEach,
  HostTree,
  mergeWith,
  move,
  Rule,
  url
} from '@angular-devkit/schematics';
import { getAllComponents } from './lib';
import { strings } from '@angular-devkit/core';

export function updateToV2(): Rule {
  return (tree: HostTree) => {
    const specFileSources = getAllComponents(tree).map(component => {
      return apply(url('./files'), [
        applyTemplates({ ...component, ...strings }),
        move(component.path),
        forEach(entry => (tree.exists(entry.path) ? null : entry))
      ]);
    });

    return chain(specFileSources.map(source => mergeWith(source)));
  };
}
