export interface AlbumInterface {
  id: string;
  title: string;
  image: string;
  artists: AlbumArtistInterface[];
  releaseDate: string;
  trackIDs: string[];
}

export interface AlbumArtistInterface {
  id: string;
  name: string;
}
