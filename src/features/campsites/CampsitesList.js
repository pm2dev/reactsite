import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

const CampsiteList = () => {
    return(
        <Row className='ms-auto'>
            {CAMPSITES.map((campsite) => {
                console.log(campsite)
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite}/>
                    </Col>
                );
            })}
        </Row>
    )
}

export default CampsiteList;