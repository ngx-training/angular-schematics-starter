import { DirEntry, FileEntry, HostTree } from '@angular-devkit/schematics';

export function getAllComponents(host:HostTree): FileEntry[] {
  return getSubFilesRecursively(host).filter(file => file.path.endsWith('component.ts'))
}

export function getSubFilesRecursively(host: HostTree): FileEntry[] {
  function _recurse(entry: DirEntry): FileEntry[] {
    return entry.subdirs.reduce((files, subDir) => [
      ...files,
      ..._recurse(entry.dir(subDir)),
    ], entry.subfiles.map(subFile => entry.file(subFile) as FileEntry));
  }

  return _recurse(host.getDir('.'));
}

