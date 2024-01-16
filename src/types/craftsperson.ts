import { TPhotoFile } from ".";

// Content Model: CraftsPerson
export type TCraftsPerson = {
  bio: TCraftsPersonBio;
  id: number;
  name: string;
  profilePhoto: {
    fields: {
      description: string;
      title: string;
      file: TPhotoFile
    }
  }
}

type TCraftsPersonBio = {
  content: any[];
}