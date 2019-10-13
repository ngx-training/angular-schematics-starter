import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';
import { Option } from './option';

function runCreateComponentTask(options: Option): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.addTask(new RunSchematicTask('component', options));
    return tree;
  }
}

export default function(options: Option): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return options.createStarterComponent ?
      runCreateComponentTask(options) : tree;
  }
}
