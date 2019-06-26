import { SongInterface } from '@song/song.interface';
import { PlaylistInterface } from '@playlist/playlist.interface';
import { ArtistInterface } from '@artist/artist.interface';
import { AlbumInterface } from '@album/album.interface';

export interface UserInterface {
  name: string;
  image: string;
  country: string;
  email: string;
  favorites: {
    songs: SongInterface[];
    playlists: PlaylistInterface[];
    artists: ArtistInterface[];
    albums: AlbumInterface[];
  };
}
