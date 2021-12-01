import React, { useState } from 'react'

import {
    Carousel
} from 'react-bootstrap'

import {
    Purwadhika,
    UPH,
    SMAXav
} from '../assets'

const EduCarousel = () => {
    const [edu] = useState(
        [
            { 
                schoolImg: Purwadhika, 
                yearGrad: "2021",
                schoolName: "Purwadhika Digital Technology School, Web and Mobile Development Bootcamp",
            },
            {
                schoolImg: UPH, 
                yearGrad: "2020",
                schoolName: "Pelita Harapan University, Faculty of Science and Technology"
            },
            {
                schoolImg: SMAXav, 
                yearGrad: "2016",
                schoolName: "Xaverius 1 High School Jambi, Natural Science Program"
            }
        ]
    )

    return (
        <Carousel variant="dark" fade style={styles.carousel}>
            {edu.map((item, index) => {
                return(
                    <Carousel.Item interval={2000} key={index} style={styles.carItem}>
                        <img
                        style={styles.carImg}
                        src={item.schoolImg}
                        alt={item.schoolName}
                        />
                        <h3>{item.yearGrad}</h3>
                        <p>{item.schoolName}</p>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

const styles = {
    carousel: {
        width: '70vw',
        height: '80vh',
        margin: 'auto',
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        borderRadius: '20px'
    },
    carItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    carImg: {
        margin: '8vh 0 2vh',
        height: '50vh',
        borderRadius: '10px'
    }
}

export default EduCarousel;