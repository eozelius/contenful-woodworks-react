export type TPhotoFile = {
  contentType: 'image/jpeg';
  fileName: string;
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    }
  }
}

export type TPhoto = {
  title: string;
  description: string;
  file: TPhotoFile
}