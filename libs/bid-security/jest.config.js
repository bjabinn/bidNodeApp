module.exports = {
  name: 'bid-security',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bid-security',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
