module.exports = {
  name: 'bid-translate',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bid-translate',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
