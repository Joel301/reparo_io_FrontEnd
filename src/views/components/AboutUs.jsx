

//CSS styles
import iconLinkedIn from "../pages/imgs/icono-linkedin.png"



export default function AboutUs () {
    return (
        <div style={{marginTop: "5px"}}>

            <h4 style={{fontSize: "20px"}}>
                Administradores:
            </h4>

            <div style={{backgroundColor: "rgb(234, 234, 234)",display: "flex",justifyContent: "space-around",marginLeft: "20%", marginRight: "20%" ,border: " 2px solid rgb(224, 224, 224)", borderRadius: "10px", marginBottom: "20%", padding:" 10px"}}>
                
                <a href="https://www.linkedin.com/in/lucas-ca%C3%B1o-0a5406223/" target="_blank" style={{textDecoration: "none", color: "black"}}>
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Lucas C</p>
                </a>
                <a href="#/omar" style={{textDecoration: "none", color: "black"}} >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Omar</p>
                </a>
                <a href="https://www.linkedin.com/in/hector-dario-sol-87a262136/" target="_blank" style={{textDecoration: "none", color: "black"}}>
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Hector</p>
                </a>
                <a href="https://www.linkedin.com/in/hiram-gerez-b07171214/" target="_blank" style={{textDecoration: "none", color: "black"}} >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Hiram</p>
                </a>
                <a href="https://www.linkedin.com/in/joel-aguilar/" target="_blank" style={{textDecoration: "none", color: "black"}} >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Joel</p>
                </a>
                <a href="#blaz" target="_blank" style={{textDecoration: "none", color: "black"}} >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Blaz</p>
                </a>
                <a href="https://www.linkedin.com/in/jhon-roa-fernandez/" target="_blank" style={{textDecoration: "none", color: "black"}} >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Jhon</p>
                </a>
                <a href="https://www.linkedin.com/in/marchetti-lucas/" target="_blank" style={{textDecoration: "none", color: "black"}} >
                        <img
                        src={iconLinkedIn}
                        alt="imageLinkedin"
                        />
                    <p>Lucas M</p>
                </a>
                
            </div>
        </div>
    )
}