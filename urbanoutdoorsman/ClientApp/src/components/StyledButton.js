import React from "react";
import { Button } from "@mui/material";

const StyledButton = ({text, onClick}) => {
    return (
     <Button onClick={onClick}>{text}</Button>
    );
}

export default StyledButton;