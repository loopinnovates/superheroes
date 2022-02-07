import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

import Link from "next/link";
import { useRouter } from "next/router";

const HeroDetails = ({ heros }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const deleteHero = async () => {
    try {
      const deleteRes = await axios(
        `http://localhost:3000/api/hero/${heroId}`,
        { method: "DELETE" }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h1 className="display-3">Hero's Identity</h1>
      <MDBCard style={{ maxWidth: "22rem" }} className="border border-2 my-2">
        <MDBCardBody>
          <MDBCardTitle>{heros.superHero}</MDBCardTitle>
          <MDBCardText>{heros.realName}</MDBCardText>
          <MDBBtn className="btn btn-danger" onClick={deleteHero}>
            Delete Hero
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  return { props: { heros: res.data.hero } };
};

export default HeroDetails;
