import { HostTree, Rule } from '@angular-devkit/schematics';

export function updateToV2(): Rule {
  return (tree: HostTree) => {
    return tree;
  }
}
