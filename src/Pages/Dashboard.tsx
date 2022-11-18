import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopicContext } from '../App';
import EButton from '../Component/EButton'
import Topic from '../Component/Topic'

export default function Dashboard() {
    const navigate = useNavigate();
    const { topics } = useContext(TopicContext);
  return (
    <div className='dashboard'>
        <h1>Dashboard</h1>

    <div className='dashboard-card'>
    <EButton buttonText="Add Topic" onPress={() => navigate("/add-topic")} />

        <p>Topic</p>
        <div className='all-topic-list'>
            {/* <Topic/> */}
            {
                topics.map((topic, index) => {
                    return <Topic key={index} text={topic.topicName} percentage={topic.percentage}/>
                })
             
            }
        </div>

    </div>

    </div>
  )
}
