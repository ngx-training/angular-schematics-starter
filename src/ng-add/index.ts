import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { addPackageJsonDependency, NodeDependency, NodeDependencyType } from '@schematics/angular/utility/dependencies';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

function addPackageJsonDependencies(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      {
        type: NodeDependencyType.Default,
        version: '>=0.0.0',
        name: 'wdc2019'
      }
    ];

    dependencies.forEach(dependency => {
      addPackageJsonDependency(tree, dependency);
      context.logger.info(`✅️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return tree;
  }
}

function installDependencies(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.info(`🔍 Installing packages...`);

    return tree;
  }
}

export default function(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return chain([
      addPackageJsonDependencies(),
      installDependencies()
    ])(tree, _context);
  }
}
