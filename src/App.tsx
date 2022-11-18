import React, { createContext } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import AddTopic from './Pages/AddTopic';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import { ITopics } from './type';

export const TopicContext = createContext<{
 userName: string
 setUserName: (userNAme: string) => void;
 topics: ITopics[]
 setTopics: (topics: ITopics[]) => void;
}>({  
  userName: '',
  setUserName: () => {},
  topics: [],
  setTopics: () => {}
});

function App() {
  
  const [userName, setUserName] = React.useState<string>('');
  const [topics, setTopics] = React.useState<ITopics[]>([]);

  return (
    <>
    <TopicContext.Provider value={{userName, setUserName, topics, setTopics}}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-topic" element={<AddTopic />} />
      </Routes>
    </TopicContext.Provider>
    </>
  );
}

export default App;
