import Link from "next/link";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const EditHero = ({ hero }) => {
  const [form, setForm] = useState({
    superHero: hero.superHero,
    realName: hero.realName,
  });

  const router = useRouter();
  const heroId = router.query.id;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Add a new hero</h1>
      <form onSubmit={handleForm}>
        <div className="row">
          <div className="col-md-6 col-sm-12 my-2">
            <MDBInput
              onChange={handleChange}
              label={`Superhero`}
              name={`superHero`}
              value={form.superHero}
              type={`text`}
            />
          </div>
          <div className="col-md-6 col-sm-12 my-2">
            <MDBInput
              onChange={handleChange}
              label={`Real Name`}
              name={`realName`}
              value={form.realName}
              type={`text`}
            />
          </div>
        </div>
        <div className="row ">
          <div className="col d-flex justify-content-center">
            <MDBBtn type={"submit"}>Submit</MDBBtn>
          </div>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  let { id } = params;
  let res = await axios(`http://localhost:3000/api/hero/${id}`);
  return { props: { hero: res.data.hero } };
};

export default EditHero;
