import { SongInterface } from '../song/song.interface';
import { AlbumInterface } from '../album/album.interface';

export interface ArtistInterface {
  name: string;
  image: string;
  topSongs: SongInterface[];
  albums: AlbumInterface[];
}
