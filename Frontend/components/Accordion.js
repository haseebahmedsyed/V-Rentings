import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { List } from 'react-native-paper';

const Accordion = () => {
    const [expanded, setExpanded] = useState(true);
    return (
        <List.Section title="Accordions">
            <List.Accordion
                title="Uncontrolled Accordion"
            // left={props => <List.Icon {...props} icon="folder" />}
            >
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>

            <List.Accordion
                title="Controlled Accordion"
                // left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>
        </List.Section>

    )
}

export default Accordion