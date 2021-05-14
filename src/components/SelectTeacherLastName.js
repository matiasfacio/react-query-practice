import React from "react";
import { useHistory } from "react-router-dom";
import { Select } from "antd";
import useQueryAll from "../hooks/useQueryAll";
import styled from "styled-components";

function SelectTeacherLastName() {
  const { data, isLoading, isError } = useQueryAll();
  const { Option } = Select;
  const history = useHistory();

  function handleRouting(id) {
    setTimeout(() => {
      document.body.style.cssText = "transform: translateX(0vw); opacity: 0;";
      history.push(`/post/${id}`);
    }, 1500);
    document.body.style.cssText =
      "transform: translateX(-100vw); transition: transform 1s ease-in-out";
    return;
  }

  if (isError) return <p>there was an error fetching the data</p>;

  if (isLoading) return <p>Loading</p>;

  return (
    <SelectContainer>
      <h2>Select Teacher by Last Name</h2>
      <Select
        defaultValue="choose teacher"
        style={{ width: 170 }}
        onChange={handleRouting}
      >
        {data &&
          data.map((teacher, id) => {
            return (
              <Option key={id} value={teacher.id}>
                {teacher.name} {teacher.lastname}
              </Option>
            );
          })}
      </Select>
    </SelectContainer>
  );
}

export default SelectTeacherLastName;

const SelectContainer = styled.div`
  margin-bottom: 50px;
`;
