import { Button, Container } from "@material-ui/core";
import './HomePage.css';

function HomePage(){
    return(
        <div className="p-homepage">
            <Container>
                <h1>Dog Book</h1>
                <p>Man's best friend</p>
                <p>
                <Button variant="contained" color="primary" href="#/breeds">Woof!</Button>
                    {/* <Link to="/cars">Enter</Link> */}
                </p>
            </Container>
        </div>
    );
}
export default HomePage;