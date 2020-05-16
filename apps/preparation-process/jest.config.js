module.exports = {
    name: "preparation-process",
    preset: "../../jest.config.js",
    coverageDirectory: "../../coverage/apps/preparation-process",
    snapshotSerializers: [
        "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
        "jest-preset-angular/build/AngularSnapshotSerializer.js",
        "jest-preset-angular/build/HTMLCommentSerializer.js"
    ]
};
