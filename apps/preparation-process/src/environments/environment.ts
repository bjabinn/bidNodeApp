// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    middlewareUrl: 'http://localhost:3333/api',
    azureUrl: 'https://bidtest.blob.core.windows.net/',
    translateUrl:
        'https://1d138116-9824-427e-97b5-e6be2ea5cb8e.mock.pstmn.io/lang',
    defaultLang: 'en',
    azureSASToken:
        'sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-04-30T16:27:47Z&st=2020-04-01T08:27:47Z&spr=https&sig=sQvR33OSsfT7swkW0CD0FGPFZ%2FIozLdKLJYeF0EVgA0%3D',
    azureContainer: 'testbid',
    stepsConf: {
        uploadPackage: {
            documentLimit: 1,
            documentRestriction: {
                allowedExtensions: ['.pdf'],
                maxFileSize: 4194304
            },
            dateFormat: 'dd MMM yyyy',
            documentType: 'PPR',
            documentVersion: 'ERM',
            languages: ['es', 'en', 'pt', 'fr'],
            maxCommentLength: 8000
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
