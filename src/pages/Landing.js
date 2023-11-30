import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                {/*info*/}
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Meggings pok pok same literally fixie jianbing gentrify blackbird spyplane. 
                        Chambray meditation disrupt, gentrify cardigan keffiyeh tilde mumblecore before they sold out blog cornhole. 
                        Semiotics gentrify crucifix organic.
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img'/>
            </div>
        </Wrapper>
    ); 
};

export default Landing;