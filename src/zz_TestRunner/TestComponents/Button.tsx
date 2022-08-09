import React from "react";

interface ButtonProps {
    title : string;
    action: () => void;
}

export default function Button(props: ButtonProps) {
  let { action, title } = props;
  return <button onClick={action}>{title}</button>;
}
