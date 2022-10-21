

//CSS styles
import iconLinkedIn from "../pages/imgs/icono-linkedin.png"

//Bootstrap
// import Button from 'react-bootstrap/Button'


export default function AboutUs () {
    return (
        <>

            <h4 style={{fontSize: "20px"}}>
                About Admins:
            </h4>

            <div style={{display: "flex",justifyContent: "space-around",marginLeft: "20%", marginRight: "20%" ,border: " 2px solid rgb(224, 224, 224)", borderRadius: "10px", marginBottom: "20%", padding:" 10px"}}>
                
                <a href="https://www.linkedin.com/in/lucas-ca%C3%B1o-0a5406223/" >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Lucas C</p>
                </a>
                <a href="https://www.linkedin.com/in/marchetti-lucas/" >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Omar</p>
                </a>
                <a href="https://www.linkedin.com/in/hector-dario-sol-87a262136/" >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Hector</p>
                </a>
                <a href="https://www.linkedin.com/in/hiram-gerez-b07171214/" >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Hiram</p>
                </a>
                <a href="https://www.linkedin.com/in/joel-aguilar/" >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Joel</p>
                </a>
                <a href="https://www.linkedin.com/in/marchetti-lucas/" >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Blaz</p>
                </a>
                <a href="https://www.linkedin.com/in/jhon-roa-fernandez/" >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Jhon</p>
                </a>
                <a href="https://www.linkedin.com/in/marchetti-lucas/" >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Lucas M</p>
                </a>
                
            </div>
        </>
    )
}