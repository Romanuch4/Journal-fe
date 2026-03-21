import type { HTMLInputAutoCompleteAttribute } from "react";

import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { InputText } from "primereact/inputtext";

const { fieldContext, formContext, useFieldContext } = createFormHookContexts();

type TextFieldProps = {
  label: string;
  placeholder: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
};

function TextField({ label, placeholder, autoComplete }: TextFieldProps) {
  const field = useFieldContext<string>();
  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <InputText
        id={field.name}
        value={field.state.value}
        onChange={(evt) => field.handleChange(evt.target.value)}
        type="text"
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </>
  );
}

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
  },
  formComponents: {},
});
