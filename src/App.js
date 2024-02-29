import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModuleSelector from './components/ModuleSelector';
import QuestionView from './components/QuestionView';
import { setModules } from './features/modules/modulesSlice';
import HeroBanner from './components/HeroBanner';
import modulesData from './data.json';

const App = () => {
  const dispatch = useDispatch();
  const { currentModuleIndex, modules } = useSelector((state) => state.modules);

  useEffect(() => {
    // Directly set the modules data without fetching from a backend
    dispatch(setModules(modulesData.modules));
  }, [dispatch]);

  return (
    <div className="App">
       <HeroBanner />
      {currentModuleIndex === null ? (
        <ModuleSelector modules={modules} />
      ) : (
        <QuestionView />
      )}
    </div>
  );
};

export default App;


