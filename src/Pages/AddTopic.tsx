import React, { useContext, useState } from 'react'
import { TopicContext } from '../App';
import EachCategorizedText from '../Component/EachCategorizedText';
import EButton from '../Component/EButton'
import useTopics from '../Hooks/useTopics';
import { ISplittedTopic, ISubmitTopic } from '../type';

export default function AddTopic() {
    const { userName } = useContext(TopicContext); 

    const [showReviewCard, setShowReviewCard] = useState<boolean>(false);
    const [content, setContent] = useState<string>('');
    const [contentToReview, setContentToReview] = useState<ISplittedTopic[]>([]);
    const [topicName, setTopicName] = useState<string>('');
    const {createTopics} = useTopics();

    const handleAddTopic = () => {
        let splittedArray = content.split(' ');
        let temp = "";
        let arr: ISplittedTopic[] = [];
        for (let i of splittedArray) {
            temp = temp + i;
            if (i.includes("?") || i.includes(".") || i.includes(",") || i.includes("/") || i.includes(";") || i.includes(":")) {
                arr.push({
                    content: temp,
                    answer: 0,
                    open: false
                })

                temp = "";
            }

        }
        setContentToReview(arr);
        setShowReviewCard(true);
    }

    const handleOpen = (index: number, open: boolean) => {
       
        let arr =  JSON.parse(JSON.stringify(contentToReview));
        console.log(index, open);
        for (let i = 0; i < arr.length; i++) {
            if (index === i) {
                arr[i].open = open;
            }
            else {
                arr[i].open = false;
            }
        }
        console.log(arr);
        setContentToReview(arr);
    }

    const handleChangeAnswer = (index: number, answer: number) => {
        setContentToReview([]);
        let arr = JSON.parse(JSON.stringify(contentToReview));
        for (let i = 0; i < arr.length; i++) {
            if (index === i) {
                arr[i].open = false;
                arr[i].answer = answer;
            }
        }
        setContentToReview(arr);
        
    }

    const handleSubmit = () => {
        let percentage = 0;
        let sumOfAll = 0;
        contentToReview.map((item) => {
            sumOfAll+=item.answer;
        })
        percentage = sumOfAll * 4 / contentToReview.length;
        let data: ISubmitTopic = {
            userName: userName,
            topicName: topicName,
            content:  content,
            percentage: ""+ percentage,
        }
        createTopics(data);
    }

    React.useEffect(() => {
        console.log("whwjhwhjkjwkhjkw",contentToReview);
    }, [contentToReview])

    return (
        <div className='add-topic'>
            <h1>Add Topic</h1>
            {
                showReviewCard ?

                    <div className='review-card'>
                        <div className='review-card-title'>
                            <h2>Review</h2>
                            <div className='review-card-header-buttons'>
                                <EButton buttonText='Cancel' onPress={() => setShowReviewCard(false)} />
                                {/* <EButton buttonText='Add Topic' onPress={() => setShowReviewCard(false)}/> */}
                            </div>
                        </div>
                        <div className='review-card-content'>
                            {
                                contentToReview.map((item, index) => {
                                    return <EachCategorizedText
                                        key={index}
                                        text={item.content}
                                        answer={item.answer}
                                        open={item.open}
                                        handleAnswer={handleChangeAnswer}
                                        handleOPening={handleOpen} 
                                        index={index} />
                                })
                            }

                        </div>

                        <EButton buttonText='Submit' onPress={() => handleSubmit()} />


                    </div>
                    :
                    <div className='add-topic-card'>
                        <div className='topic-name'>
                            <label htmlFor='topic-name' className='topic-name-label'>Topic Name</label>
                            <input value={topicName} onChange={(e) => setTopicName(e.target.value)} type="text" name="topic-name" id="topic-name" className='topic-name-input' />
                        </div>
                        <div className='topic-content-box'>
                            <label htmlFor='topic-content' className='topic-content-label'>Topic Name</label>
                            <textarea value={content} onChange={(e) => { setContent(e?.target?.value) }} name="topic-content" id="topic-content" className='topic-content' />
                        </div>

                        <EButton buttonText={"Continue"} onPress={() => { handleAddTopic() }} />

                    </div>
            }

        </div>
    )
}
