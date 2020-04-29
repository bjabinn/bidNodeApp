export const environment = {
    production: true,
    baseUrl: 'https://virtserver.swaggerhub.com/lperezga/lpl1la/1.0.0',
    azureUrl: 'https://bidtest.blob.core.windows.net/',
    translateUrl:
        'https://1d138116-9824-427e-97b5-e6be2ea5cb8e.mock.pstmn.io/lang',
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
