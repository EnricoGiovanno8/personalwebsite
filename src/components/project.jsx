import React from 'react'

import {
    PharmacyPorto,
    Kanye,
    Avanz,
    YummySA,
    IAMI
} from '../assets'

import {
    Image
} from 'react-bootstrap'

const Project = () => {
    return (
        <div>
            <div style={styles.container}>
                <h5>1. Pharmacy Website</h5>
                <Image style={styles.img} src={PharmacyPorto} />
                <p style={styles.text}>This project helps user to buy medicine, whether it's nonprescription
                    medicine (over the counter medicine) or prescription medicine through our website. In this website,
                    user can browse nonprescription medicine from our landing page, and we've added filter and sort
                    feature to help them find the medicine they need but first, the user must login to do any sort of transactions.
                    If they don't have an account, they can register from our register page. After they've logged in as user, they can
                    proceed the transaction and for the prescription medicine, they must go to user dashboard and click “Recipe Upload”
                    that will bring them to upload prescription page. As for the pharmacy's administrator they can log in as admin,
                    from admin dashboard they can open transaction to see all the users transactions and they can confirm or reject user's
                    transaction and they can serve user's order. On admin's dashboard, they can also access pharmacy's sales report where they
                    can see bought items per month, transactions per user and graph that shows how many transactions per month in 1 year. Admin
                    can also browse product  like user but, instead of button to do any sort of transactions, admin has button to view medicine
                    usage, add medicine, edit or delete medicine. From the dashboard, admin can view revenue. In it's development, we used React.js and
                    for the database we used SQL and we also used React Bootstrap for UI purposes.</p>
            </div>

            <div style={styles.container}>
                <h5>2. YummyCorp Smart Admin Web App</h5>
                <Image style={styles.img} src={YummySA} />
                <p style={styles.text}>Smart Admin Web App is a web application where YummyCorp manages all of the company
                    administrations purposes such as Partnership, Outlet, Sales Channel, Promotion and Cashier. The tech
                    stack that is mainly used in this web app development are NextJS, TailwindCSS, TypeScript, and Apollo
                    GraphQL.</p>
            </div>

            <div style={styles.container}>
                <h5>3. Isuzu Astra Motor Indonesia(IAMI) Dealer App</h5>
                <Image style={styles.img} src={IAMI} />
                <p style={styles.text}>This mobile-app is used by the IAMI dealer team to manage their prospective customer
                    information which can later be used to convert them into customers. After they become customers, this
                    app can also be used to manage their customers' orders. The tech stack that is mainly used in this mobile
                    app development are React Native, Typescript, TailwindCSS, TanStack Query, and .Net Razor Page.</p>
            </div>

            <div style={styles.container}>
                <h5>4. Avanz Equipment Website</h5>
                <p> Website URL:
                    <a style={{ textDecoration: 'none' }} href="https://enricogiovanno8.github.io/avanzequipment"> https://enricogiovanno8.github.io/avanzequipment</a>
                </p>
                <Image style={styles.img} src={Avanz} />
                <p style={styles.text}>This is a website that shows information about Avanz Equipment Indonesia. The tech stack that is
                    mainly used in this website development are React, Typescript, CSS and React Bootstrap.</p>
            </div>

            <div style={styles.container}>
                <h5>5. Kanye's Quote Generator</h5>
                <p> Website URL:
                    <a style={{ textDecoration: 'none' }} href="https://enricogiovanno8.github.io/kanyequotegenerator"> https://enricogiovanno8.github.io/kanyequotegenerator</a>
                </p>
                <Image style={styles.img} src={Kanye} />
                <p style={styles.text}>I made this on my first job interview test as a Web Developer. The interviewer told us to make
                    a simple website that can do CRUD. This website can generate random Kanye's quote, i got the data from https://api.kanye.rest/ and if you like the quote that you got you can save it in your
                    browser and a table of quotes that you saved will appear and it won't be gone even though you refresh the page. You can also edit and delete the quote that you saved.</p>
            </div>
        </div >
    )
}

const styles = {
    container: {
        textAlign: 'center',
        border: '1px solid rgb(211, 211, 211)',
        paddingTop: '5vh',
        borderRadius: '20px',
        marginBottom: '5vh',
    },
    img: {
        marginTop: '5vh',
        width: '80vw',
        border: '1px solid #D3D3D3',
        boxShadow: '10px 10px 10px grey',
        borderRadius: '20px'
    },
    text: {
        margin: '8vh 10vh 5vh',
        textAlign: 'justify'
    },
}

export default Project