import React from 'react';
import './App.css'
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

import NavBar from './components/Navbar'
import EduCarousel from './components/EduCarousel'
import Skill from './components/Skill';
import Project from './components/Project'

import { Photo } from './assets';

const App = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={5} style={{ alignSelf: 'center' }}>
                        <Row><Col><h1 style={{ textAlign: 'right', color: 'gray' }}>Hi There,</h1></Col></Row>
                        <Row><Col><h1 style={{ textAlign: 'right' }}>I'm Enrico Giovanno</h1></Col></Row>
                    </Col>
                    <Col xs={12} md={4}><Image src={Photo} style={{ width: '100%', borderRadius: '20px', boxShadow: '10px 10px 10px grey' }} /></Col>
                </Row>
            </Container>
            <div style={{ borderBottom: '1px solid #D3D3D3' }}>
                <div style={styles.aboutMeDiv}>
                    <h3 id="about-me" style={{ margin: '5vh 0 0', textAlign: 'center', scrollMarginTop: '130px' }}>About Me</h3>
                    <p style={styles.aboutMe}>My friends usually call me Rico. I'm a Bachelor of Civil Engineering, but after graduating I've decided not to pursue a career in Civil Engineering. The reason is while I was finishing my study, the pandemic hit and I've started to realise that if I want to make an impact on society in this digital era, I've got to learn some digital skills.</p>
                    <p style={{ ...styles.aboutMe, margin: '0 10vh 5vh' }}>After doing some research, I've decided to take Full Stack Web and Mobile Development Bootcamp at Purwadhika Digital Technology School. Since then, I've been working as a Front End Developer for 1+ year, developing multiple web applications and mobile applications. The tech stacks that I specialized in developing web applications are Typescript, React JS, Next JS,
                        Tailwind CSS and Apollo Client. For mobile applications, React Native and Tan Stack Query are my go-to.</p>
                </div>
            </div>
            <div style={{ borderBottom: '1px solid #D3D3D3' }}>
                <div style={styles.educationDiv}>
                    <h3 id="education" style={{ margin: '5vh 0 2vh', textAlign: 'center', scrollMarginTop: '70px' }}>Education</h3>
                    <EduCarousel />
                </div>
            </div>
            <div style={{ borderBottom: '1px solid #D3D3D3' }}>
                <div style={styles.skillDiv}>
                    <h3 id="skill" style={{ margin: '5vh 0 5vh', textAlign: 'center', scrollMarginTop: '90px' }}>Skill</h3>
                    <Skill />
                </div>
            </div>
            <div style={{ borderBottom: '1px solid #D3D3D3' }}>
                <div style={styles.projectDiv}>
                    <h3 id="project" style={{ margin: '5vh 0 5vh', textAlign: 'center', scrollMarginTop: '90px' }}>Project</h3>
                    <Project />
                </div>
            </div>
            <iframe title='twitch' src="https://player.twitch.tv/?channel=xqc&parent=enricogiovanno8.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
            <div id="contact" style={styles.contact}>
                <h6><a style={styles.contactText} href="https://www.instagram.com/enrico_giovanno/"><i class="fab fa-instagram"></i> Instagram</a></h6>
                <h6><a style={styles.contactText} href="https://wa.me/+628119332809/"><i class="fab fa-whatsapp"></i> Whatsapp</a></h6>
                <h6><a style={styles.contactText} href="https://www.linkedin.com/in/enrico-giovanno-a4803717a/"><i class="fab fa-linkedin"></i> LinkedIn</a></h6>
                <h6><a style={styles.contactText} href="mailto:genrico.dev@gmail.com"><i class="far fa-envelope"></i> Email</a></h6>
                <h6><a style={styles.contactText} href="https://github.com/EnricoGiovanno8"><i class="fab fa-github"></i> GitHub</a></h6>
            </div>
        </div>
    )
}

const styles = {
    aboutMeDiv: {
        border: '1px solid #D3D3D3',
        boxShadow: '10px 10px 10px grey',
        margin: '8vh 10vh',
        borderRadius: '20px'
    },
    aboutMe: {
        margin: '2vh 10vh 2vh',
        textAlign: 'justify'
    },
    educationDiv: {
        margin: '8vh 10vh'
    },
    skillDiv: {
        margin: '8vh 10vh'
    },
    projectDiv: {
        margin: '8vh 10vh'
    },
    contact: {
        height: '15vh',
        backgroundColor: 'gray',
        padding: '0 10vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contactText: {
        color: 'white',
        textDecoration: 'none'
    }
}

export default App;