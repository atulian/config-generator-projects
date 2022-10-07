const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  installDependencies() {
    this.addDevDependencies({prettier: 'latest'})
    this.addDevDependencies({eslint: 'latest'})
    this.addDevDependencies({'eslint-config-prettier': 'latest'})
    this.addDevDependencies({'eslint-config-standard': 'latest'})
    this.addDevDependencies({'eslint-plugin-import': 'latest'})
    this.addDevDependencies({'eslint-plugin-node': 'latest'})
    this.addDevDependencies({'eslint-plugin-prettier': 'latest'})
    this.addDevDependencies({'eslint-plugin-promise': 'latest'})
    this.addDevDependencies({'eslint-plugin-react': 'latest'})
    this.addDevDependencies({'eslint-plugin-react-hooks': 'latest'})
    this.addDevDependencies({'@typescript-eslint/parser': 'latest'})
    this.addDevDependencies({'@typescript-eslint/eslint-plugin': 'latest'})
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
  }
};