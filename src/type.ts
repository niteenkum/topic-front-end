export interface ISplittedTopic{
    content: string;
    answer: number,
    open: boolean,
}

export interface ITopics {
          "topicName": string,
          "percentage": string,
}

export interface ISubmitTopic{
    userName: string;
    topicName: string,
    content:  string,
    percentage: string,
}