import React, {useState} from "react";
import {useForm} from "react-hook-form";
import { Redirect } from "react-router-dom";
import moment from "moment";

function FormSignUp(){

  const {register, handleSubmit} = useForm();
  const [error, setError] = useState();
  const [signUp, setSignUp] = useState(false);

  const onSubmit = (data)=>{
    const today = moment(new Date).format('YYYY-MM-DD');
    const birthdayUser = moment(data.birthday).format('YYYY-MM-DD');
    today > birthdayUser ?
      isSignUp(data)
    :
      setError('La date de naissance ne peut pas être supérieure ou égale à la date du jour, veuillez réessayer.')
  }

  const isSignUp = (data)=>{
    const nameUser = data.firstname;
    localStorage.setItem('user', nameUser);
    document.querySelector('.FormSignUp').classList.add('disappear');
    setTimeout(()=>{
      setSignUp(true);
    }, 1500);
  }

  return(
    <div className="FormSignUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="firstname">Prénom</label>
          <input className="form-control" type="text" id="firstname" required {...register('firstname')} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lastname">Nom</label>
          <input className="form-control" type="text" id="lastname" required {...register('lastname')} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-control" type="email" id="email" required {...register('email')} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="birthday">Date de naissance</label>
          <input className="form-control" type="date" id="birthday" required {...register('birthday')} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="tel">Téléphone</label>
          <input className="form-control" type="tel" pattern="[0-9]{10}" placeholder="Format: XXXXXXXXXX" id="tel" required {...register('tel')} />
        </div>
        <button className="btn btn-primary" type="submit">S'inscrire</button>
      </form>
      {error ? <div className="mt-3 alert alert-danger">{error}</div> : ""}
      {signUp === true ? <Redirect to={{pathname: "/dashboard"}} /> : null}
    </div>
  )
}

export default FormSignUp;