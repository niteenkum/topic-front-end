import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopicContext } from "../App";
import { ISubmitTopic } from "../type";

export default function useTopics() {

    const { setTopics, topics } = useContext(TopicContext);
    const navigate = useNavigate();

    const getTopics = async (userNAme: string) => {
        axios.post("http://localhost:8000/topic/getAllTopics", { userName: userNAme }).then((res) => {
            setTopics(res.data?.topics);
            navigate("/dashboard");
        }
        );
    };

    const createTopics = (data: ISubmitTopic) => {
        axios.post("http://localhost:8000/topic/createTopics",  data ).then((res) => {
            let topic = topics;
            topic.push({
                topicName: data.topicName,
                percentage: data.percentage,
            }) 
            setTopics(topic);
            navigate("/dashboard");
        }
        );
    }


    return {
        getTopics,
        createTopics
    }

}