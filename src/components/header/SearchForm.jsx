import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getSummoner } from "@modules/summoner";

const SearchFormWrap = styled.div`
  position: absolute;
  top: 53px;
  right: 261px;
  width: 260px;
  height: 32px;
  border-radius: 2px;
  background-color: #fff;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const FormInput = styled.input`
  font-family: "AppleSDGothicNeo-Regular";
  width: 220px;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 9px 0 8px 14px;
  font-size: 12px;
  color: #727272;
  box-sizing: border-box;
`;

const FormSubmitBtn = styled.button`
  font-family: "AppleSDGothicNeo-Regular";
  background: none;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 17px;
  color: #1ea1f7;
  padding: 0 12px 0 0;
  cursor: pointer;
`;

const SearchForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ summonerName }) => {
    if (!summonerName) return;
    dispatch(getSummoner(summonerName));
  };

  return (
    <SearchFormWrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput type="text" placeholder="소환사명,챔피언..." name="summonerName" ref={register} />
        <FormSubmitBtn type="submit">.GG</FormSubmitBtn>
      </Form>
    </SearchFormWrap>
  );
};

export default SearchForm;
