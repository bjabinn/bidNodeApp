module.exports = {
  name: 'bid-handle-errors',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bid-handle-errors',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
