

//CSS styles
import "./AboutUs.css"

//Bootstrap
import Button from 'react-bootstrap/Button';

export default function AboutUs () {
    return (
        <>

            <h4 style={{fontSize: "20px"}}>
                About Admins:
            </h4>

            <div className="AboutUS">
                <Button variant="info">Lucas C</Button>{' '}
                <Button variant="info">Blas</Button>{' '}
                <Button variant="info">Hiram</Button>{' '}
                <Button variant="info">Omar</Button>{' '}
                <Button variant="info">Joel</Button>{' '}
                <Button variant="info">Jhon</Button>{' '}
                <Button variant="info">Hector</Button>{' '}
                <Button variant="info">Lucas M</Button>{' '}
            </div>
        </>
    )
}