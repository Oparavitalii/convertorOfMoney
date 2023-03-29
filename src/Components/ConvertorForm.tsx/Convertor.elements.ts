import styled from "styled-components";

export const ConvertorWr = styled.section`
  height: 20%;
  margin-bottom: 100px;
`;
export const FormEl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const FormCount = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormChange = styled.div`
color:#21b690;
  &:hover {
    cursor: pointer;
  }
`;
export const Label = styled.label`
  padding-left: 15px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
  gap: 15px;
`;

export const Input = styled.input`
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 2px solid #21b690;
`;
export const Select = styled.select`
  outline: none;
  align-self: end;
  min-height: 24px;
  outline: none;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
export const Option = styled.option`
  outline: none;
`;

export const Button = styled.button`
 padding: 15px 30px;
  outline: none;
  background: transparent;
  border: none;
  border: 2px solid #21b690;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    
  }
`