import { TopicType } from "./topic-type"

export class PostModel {
    postId: number;
    postName: string;
    description: string;
    topictype: TopicType;
    topicId: number;
    username: string;
    voteCount: number;
    commentCount: number;
    duration: string;
    upVote: boolean;
    downVote: boolean

}