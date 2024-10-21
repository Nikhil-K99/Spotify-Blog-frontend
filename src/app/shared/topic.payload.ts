import { TopicType } from "./topic-type";

export class TopicPayload{
    trackName?: string;
    artistName?: string;
    albumName?: string;
    pictureUrl: string;
    topicId: string;
    spotifyId: string;
    topicType: TopicType
}