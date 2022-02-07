import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";

const Home = ({ heros }) => {
  return (
    <>
      <div className="container">
        <p className="display-4">Superhero Identity Manager</p>
        <div className="row">
          {heros.map((hero) => {
            return (
              <div className="col-4">
                <MDBCard
                  style={{ maxWidth: "22rem" }}
                  className="border border-2 my-2"
                >
                  <MDBCardBody>
                    <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                    <MDBCardText>Reveal Identity</MDBCardText>
                    <Link href={`/${hero._id}`}>
                      <MDBBtn className="mx-2">View Hero</MDBBtn>
                    </Link>
                    <Link href={`/${hero._id}/edit`}>
                      <MDBBtn>Edit Details</MDBBtn>
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await axios(`http://localhost:3000/api/hero`);
  return { props: { heros: res.data.hero } };
};

export default Home;
