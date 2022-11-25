import React, { PropsWithChildren, useState } from "react";

import { AddressObjectViewModel } from "@type/address";

import {
  RegistrationForm,
  registrationFormContext,
  RegistrationFormContext,
} from "../stores/registration";

export const RegistrationFormProvider = ({ children }: PropsWithChildren) => {
  const [formState, setFormState] = useState<RegistrationForm>({
    phone: "",
  } as RegistrationForm);

  const changeHandler = (
    field: string,
    value: string | [number, number] | boolean | null | AddressObjectViewModel
  ) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
  };

  const context: RegistrationFormContext<RegistrationForm> = {
    formState,
    setFormField: changeHandler,
  };

  return (
    <registrationFormContext.Provider value={context}>
      {children}
    </registrationFormContext.Provider>
  );
};
