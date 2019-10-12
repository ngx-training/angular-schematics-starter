import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

const fancyLogMessage = `
########### WDC2019 <3 HAMBURG ############
Willkommen zum Angular Schematics Workshop!
###########################################
`;

export function logger(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    return context.logger.info(fancyLogMessage);
  }
}
