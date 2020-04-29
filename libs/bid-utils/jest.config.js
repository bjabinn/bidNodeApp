module.exports = {
  name: 'bid-utils',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bid-utils',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
