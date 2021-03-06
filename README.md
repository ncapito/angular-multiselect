angular-multiselect
===================

A multi select drop down list directive for AngularJS. This directive takes an array of value/label objects and formats them as a drop down list where multiple options can be selected. It also has shortcut filters to select all and select none, and an optional text box to enter new values. The element returns an array of selected objects to the specified model.

# Demo

View the demo on Plunker: http://plnkr.co/edit/Auwocsu2wvahYFlmBkiU?p=preview

# Installation

### Bower
```
$ bower install shalotelli-angular-multiselect
```

### Manual
```
1. $ git clone https://github.com/shalotelli/angular-multiselect.git
2. <script src="path/to/shalotelli-angular-multiselect/multiselect.js">
3. <link rel="stylesheet" href="path/to/shalotelli-angular-multiselect/styles/multi-select.css">
4. Add module shalotelli-angular-multiselect to dependencies list
```

# Usage

To use this directive, call the multi-select tag, including the model with the array of data objects, a reference to the output model and any display options (listed below).

To prepopulate items, add them to model.

```
<multi-select
  values="values"
  model="output"
  show-filters="true"
  other-field="isOther"
  other-ng-model='other'
  show-other="true"
  >
</multi-select>
```

# Options

| Option | Values | Description | Required | Default Value |
|--------|--------|-------------|----------|---------------|
| values | array/object | Values to load in to drop down | yes | - |
| model | array | ngModel to save output to, anything in here also shows up as selected | yes | - |
| name | string | Unique identifier (useful if there is more than one multiselect on the page) | no | - |
| show-filters | boolean | Show select all/select none | no | true |
| show-other | boolean | Enable user to enter custom values | no | false |
| other-field | string |Name of the field that indicates this is the other option e.g. isOther | no | 'isOther' |
| other-ng-model| string |field to save the other value to  | no | undefined |
| value-field | string | Specify the key to use as the value field | no | value |
| label-field | string | Specify the key to use as the label field | no | label |
| template-path | string | Specify an alternate view template path for the directive | no | bower_components/shalotelli-angular-multiselect/views/directives/multi-select.html |
