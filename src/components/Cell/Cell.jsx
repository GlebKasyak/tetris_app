import React from "react";

import { StyledCell } from "./StyleCell";
import { TETROMINOS } from "../helpers/tetrominos";

const Cell = ({ type }) => (
    <StyledCell type={ type } color={TETROMINOS[type].color} />
);

export default React.memo(Cell);