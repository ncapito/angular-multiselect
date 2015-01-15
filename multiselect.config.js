(function (ng) {
  'use strict';

  /**
   * @ngdoc directive
   * @name multiselectApp.directive:multiSelect
   * @description
   * # Angular Multi Select directive
   */
  ng.module('shalotelli-angular-multiselect')
    .provider('multiSelectConfig', function MultiSelectConfig () {
      var defaults = {
        templatePath: '/directives/multi-select.html',
        templatePath2: '/directives/multi-select2.html',
        otherField: 'isOther',
        otherNgModel: 'other',
        closeOnSelect: false
      };

      /**
       * Set defaults
       * @param {Object} settings Settings object
       */
      this.setDefaults = function setDefaults (settings) {
        angular.extend(defaults, settings || {});
      };

      this.$get = [ function () {
        return defaults;
      }];
    });
})(angular);
