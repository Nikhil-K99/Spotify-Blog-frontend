import { TopicType } from "./topic-type"
import { TopicPayload } from "./topic.payload";


export class PostModel {
    postId: number;
    postName: string;
    description: string;
    topicType: TopicType;
    topicId: number;
    username: string;
    voteCount: number;
    commentCount: number;
    duration: string;
    upVote: boolean;
    downVote: boolean;
    topicData: TopicPayload;
}