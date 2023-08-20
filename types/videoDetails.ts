export interface VideoDetails {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: ResourceID;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
}

export interface ResourceID {
    kind: string;
    videoId: string;
}

export interface Thumbnails {
    default: Default;
    medium: Default;
    high: Default;
    standard: Default;
    maxres: Default;
}

export interface Default {
    url: string;
    width: number;
    height: number;
}
