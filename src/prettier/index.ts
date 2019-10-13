import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export interface PrettierOptions {
  path: string;
}

const PRETTIER_DEFAULT = `{
  "printWidth": 80,
  "singleQuote": true,
  "arrowParens": "avoid"
}
`;

export function prettier(options: PrettierOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const filePath = options.path ? options.path + '.prettierrc' : './.prettierrc';

    if (tree.exists(filePath)) {
      context.logger.error(`File "${filePath}" is already exist`);
      return tree;
    }

    tree.create(filePath, PRETTIER_DEFAULT);
    context.logger.info(`File "${filePath}" successfully created`);
    return tree;
  }
}
