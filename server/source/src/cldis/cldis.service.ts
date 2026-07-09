import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  v2 as cloudinary,
  UploadApiOptions,
  UploadApiResponse,
} from 'cloudinary';

@Injectable()
export class CldisService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.getOrThrow<string>(
        'CLOUDINARY_CLOUD_NAME',
      ),
      api_key: this.configService.getOrThrow<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.getOrThrow<string>(
        'CLOUDINARY_API_SECRET',
      ),
    });
  }

  private uploadBuffer(
    file: Express.Multer.File,
    options: UploadApiOptions = {},
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
          if (error) {
            return reject(new Error(error.message));
          }

          if (!result) {
            return reject(
              new Error('Cloudinary upload failed: no result returned'),
            );
          }

          resolve(result);
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  async uploadImage(file: Express.Multer.File) {
    const image = await this.uploadBuffer(file, {
      resource_type: 'image',
      folder: 'authentication_images',
    });

    const result = {
      url: image.secure_url,
      publicId: image.public_id,
      originalName: file.originalname,
    };

    return {
      message: 'Updload image success',
      result,
    };
  }

  async replaceImage(publicId: string, file: Express.Multer.File) {
    const image = await this.uploadBuffer(file, {
      resource_type: 'image',
      public_id: publicId,
      overwrite: true,
      folder: 'authentication_images',
    });

    const result = {
      url: image.secure_url,
      publicId: image.public_id,
      originalName: file.originalname,
    };

    return {
      message: 'Replace image success',
      result,
    };
  }

  async deleteImage(publicId: string) {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: 'image',
    });
  }
}
