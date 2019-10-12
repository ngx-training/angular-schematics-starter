import { HostTree, Rule } from '@angular-devkit/schematics';
import { getAllComponents } from './lib';

export function updateToV2(): Rule {
  return (tree: HostTree) => {
    console.log(getAllComponents(tree));
    return tree;
  }
}
