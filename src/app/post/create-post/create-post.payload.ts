import { TopicType } from "src/app/shared/topic-type";

export class CreatePostPayload {
    postName: string; 
    description: string;
    topicType: TopicType;
    topicSpotifyId: string;
}