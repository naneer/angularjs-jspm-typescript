System.config({
  "baseURL": "/",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "angular-mocks": "github:angular/bower-angular-mocks@1.3.15",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.13",
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87",
    "github:angular-ui/ui-router@0.2.13": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-mocks@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    }
  }
});

