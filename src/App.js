import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchData from './Api';
import Accordian from './components/Accordian';
import Spinner from './components/Spinner';

const API_URL = 'https://api.myjson.com/bins/jw3rg';

const App = ({ data }) => {
  const initialLoading = (!Object.keys(data).length);

  const [accordianData, setData] = useState(data);
  const [loading, setLoading] = useState(initialLoading);

  const makeApiCall = async (url) => {
    const response = await fetchData(url);
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      makeApiCall(API_URL);
    }
  }, [loading, data]);


  const [showAnswer, setShowAnswer] = useState(null);

  const clickHandle = (e, currentState) => ((e, currentState)
    ? setShowAnswer(null)
    : setShowAnswer(e.target.id));

  return (!loading && data)
    ? (
      <>
        { accordianData.faqs.map(faq => (
          <Accordian
            key={`id-${faq.id}`}
            id={`id-${faq.id}`}
            heading={faq.question}
            details={faq.answer}
            data={faq}
            clickHandle={clickHandle}
            isOpen={(showAnswer === `id-${faq.id}`)}
            prefix="Q: "
          />
        ))
      }
      </>
    )
    : (<Spinner />);
};

App.propTypes = {
  data: PropTypes.shape({}),
};

App.defaultProps = {
  data: {},
};

export default App;
