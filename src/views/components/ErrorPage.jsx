import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";

export default function ErrorPage() {
    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Página no encontrada.</p>
                <p class="lead">
                    La página que buscas no existe.
                </p>
                <Link to='/'>
                    <Button class="btn btn-primary">
                        Volver a Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}


