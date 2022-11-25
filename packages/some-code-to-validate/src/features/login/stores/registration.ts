import { createContext } from "react";

import { AddressObjectViewModel } from "@type/address";

import { RegisterEntityV2 } from "../types";

export type RegistrationForm = RegisterEntityV2;

export type RegistrationFormContext<T> = {
  formState: T;
  setFormField: (
    field: string,
    value: string | [number, number] | boolean | null | AddressObjectViewModel
  ) => void;
};

export const registrationFormContext = createContext(
  {} as RegistrationFormContext<RegistrationForm>
);
