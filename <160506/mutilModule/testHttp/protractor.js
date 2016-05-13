it('should add Hello to the name', function() {
  expect(element(by.binding("greeting")).getText()).toEqual('Bonjour World!');
});

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/