import React, { useState } from 'react';
import Dropdown from '../dropdown-widget/Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'Vietnamese',
    value: 'vi'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text to translate</label>
          <input value={text} onChange={e => setText(e.target.value)} />
        </div>
        <Dropdown
          label="Select a language"
          selected={language}
          onSelectedChange={setLanguage}
          options={options}
        />
        <hr />
        <h3 className="ui header">Output</h3>
        <Convert text={text} language={language} />
      </div>
    </div>
  );
};

export default Translate;
