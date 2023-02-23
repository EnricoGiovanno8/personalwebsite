import React from 'react'

import {
    HTML,
    CSS,
    JavaScript,
    ReactJS,
    ReactNative,
    MySQL,
    MongoDB,
    NextJS,
    TailwindCSS,
    Apollo,
    TypeScript
} from '../assets'

import {
    Image
} from 'react-bootstrap'

const Skill = () => {
    return (
        <div>
            <div style={{ ...styles.div, marginBottom: '5vh' }}>
                <Image style={styles.image} src={HTML} />
                <Image style={styles.image} src={CSS} />
                <Image style={styles.image} src={JavaScript} />
                <Image style={styles.image} src={TypeScript} />
                <Image style={styles.image} src={ReactJS} />
            </div>
            <div style={{ ...styles.div, marginBottom: '5vh' }}>
                <Image style={styles.image} src={ReactNative} />
                <Image style={styles.image} src={MySQL} />
                <Image style={{ height: '10vw' }} src={MongoDB} />
            </div>
            <div style={styles.div}>
                <Image style={{ height: '10vw' }} src={NextJS} />
                <Image style={{ height: '10vw' }} src={TailwindCSS} />
                <Image style={{ height: '10vw' }} src={Apollo} />
            </div>
        </div>
    )
}

const styles = {
    image: {
        width: '10vw',
        height: '10vw'
    },
    div: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
}

export default Skill