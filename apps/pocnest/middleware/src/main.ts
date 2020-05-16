import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors({
        origin: 'http://localhost:4200'
    });
    const options = new DocumentBuilder()
        .setTitle('Nest Gateway')
        .setDescription('API Doc for Gateway')
        .setVersion('1.0')
        .addTag('Steps')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/doc', app, document);

    const port = process.env.port || 80;
    await app.listen(port, () => {
        console.log(
            'Listening at http://localhost:' + port + '/' + globalPrefix
        );
    });
}

bootstrap();
