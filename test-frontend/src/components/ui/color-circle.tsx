"use client";
import React from "react";
import styled from "styled-components";

const valueObjectRolesColor = ["#D2D2D2", "#4AAD5B", "#D73240", "#D3A710"];

interface StyledCircleProps {
  roleId: number; // Ajuste para o tipo exato de roleId
}
const StyledCircle = styled.div<StyledCircleProps>`
  border-radius: 50%;
  background-color: ${(props) => valueObjectRolesColor[props.roleId]};
  width: 0.75rem; /* Equivalente a w-3 */
  height: 0.75rem; /* Equivalente a h-3 */
  margin-right: 0.25rem; /* Equivalente a mr-1 */
`;

interface ColorCircleProps {
  roleId: number;
}

const ColorCircle: React.FC<ColorCircleProps> = (props) => {
  return <StyledCircle roleId={props.roleId} />;
};

export default ColorCircle;
