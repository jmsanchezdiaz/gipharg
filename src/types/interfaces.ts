

export interface GifType{
    id: string,
    username: string,
    images: {
        downsized: {
            url: string
        }
    },
    embed_url: string,

} 

export interface GifContextType {
    favourites: GifType[];
    isOnFavourite: (id: GifType['id']) => boolean;
    addToFavourites: (favouriteGif: GifType) => void;
    removeFromFavourites: (favouriteGifId: GifType['id']) => void;
}