import { SubtitleLinkInterface } from '@interfaces/subtitle-link.interface';

export interface AlbumInterface {
  id: string;
  title: string;
  image: string;
  artists: SubtitleLinkInterface[];
  releaseDate: string;
  trackIDs: string[];
}
