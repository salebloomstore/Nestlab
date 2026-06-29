import { Module } from '@nestjs/common';
import { ExamplesService } from './examples.service';
import { ExamplesController } from './examples.controller';
import { Example, ExampleSchema } from './schemas/example.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Example.name,
        schema: ExampleSchema,
      },
    ]),
  ],
  controllers: [ExamplesController],
  providers: [ExamplesService],
  exports: [ExamplesService],
})
export class ExamplesModule {}
