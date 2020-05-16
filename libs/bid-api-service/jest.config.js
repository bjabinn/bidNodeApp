module.exports = {
  name: 'bid-api-service',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bid-api-service',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
