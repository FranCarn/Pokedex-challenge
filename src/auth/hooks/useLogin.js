import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";

export const useLogin = (initialForm) => {
  const [formState, setFormState] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [wrongLogin, setWrongLogin] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const ResetForm = () => {
    setFormState(initialForm);
  };

  const lastPath = localStorage.getItem("lastPath");

  const loginSuccesfull = (userdata) => {
    login(userdata);
    navigate(lastPath, {
      replace: true,
    });
    ResetForm();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setWrongLogin(false);
    setLoading(true);
    if (formState === {}) return;
    try {
      const res = await axios.post(process.env.REACT_APP_LOGINURL, formState);
      if (res.data.token === process.env.REACT_APP_VALIDTOKEN) {
        loginSuccesfull(res.data);
      }
      return;
    } catch (error) {
      setWrongLogin(true);
      setLoading(false);
      ResetForm();
      return;
    }
  };

  return {
    ...formState,
    formState,
    loading,
    wrongLogin,
    ResetForm,
    onInputChange,
    onSubmit,
    loginSuccesfull,
  };
};

useLogin.propTypes = {
  initialForm: PropTypes.object.isRequired,
};
