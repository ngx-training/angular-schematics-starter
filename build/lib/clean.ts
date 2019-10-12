import { emptyDir } from 'fs-extra';

export function clean(path: string) {
  return emptyDir(path);
}
