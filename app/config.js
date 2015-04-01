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
    "angular-animate": "npm:angular-animate@1.3.15",
    "angular-aria": "npm:angular-aria@1.3.15",
    "angular-material": "npm:angular-material@0.8.3",
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
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:angular-material@0.8.3": {
      "angular": "npm:angular@1.3.15",
      "angular-animate": "npm:angular-animate@1.3.15",
      "angular-aria": "npm:angular-aria@1.3.15",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:angular@1.3.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

