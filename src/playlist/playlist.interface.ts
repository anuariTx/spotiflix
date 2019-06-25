import { SongInterface } from '@song/song.interface';

export interface PlaylistInterface {
  title: string;
  image: string;
  songs: SongInterface[];
}
