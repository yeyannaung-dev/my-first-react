import { useState } from 'react';

import { EXAMPLES } from '../Data';

import TabButton from './TabButton';
import Example from './Example.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()

    function handleClick(topic) {
        setSelectedTopic(topic)
    }

    let tabContent = <p>Please select a topic.</p>
    if (selectedTopic) {
        tabContent = <Example {...EXAMPLES[selectedTopic]} />
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick("state")}>State</TabButton>
                    </>
                }>{tabContent}</Tabs>
        </Section>
    );
}