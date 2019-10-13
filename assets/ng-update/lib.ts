import { DirEntry, FileEntry, HostTree } from '@angular-devkit/schematics';
import { basename, dirname } from 'path';

interface ComponentMeta {
  name: string;
  path: string;
}

/*
 * Get all component files in the project
 * @return collection of components
 */
export function getAllComponents(host: HostTree): ComponentMeta[] {
  return getSubFilesRecursively(host)
    .filter(file => file.path.endsWith('component.ts'))
    .map(component => ({
      name: basename(component.path).replace('.component.ts', ''),
      path: dirname(component.path)
    }));
}

export function getSubFilesRecursively(host: HostTree): FileEntry[] {
  function _recurse(entry: DirEntry): FileEntry[] {
    return entry.subdirs.reduce(
      (files, subDir) => [...files, ..._recurse(entry.dir(subDir))],
      entry.subfiles.map(subFile => entry.file(subFile) as FileEntry)
    );
  }

  return _recurse(host.getDir('.'));
}
