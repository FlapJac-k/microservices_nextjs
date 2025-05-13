import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

type Props = {
  label: string;
  type?: string;
  showLabel?: boolean;
} & UseControllerProps;

export default function Input(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });
  return (
    <div className="mb-3">
      {props.showLabel && (
        <div className="mb-2 block">
          <Label htmlFor={field.name} value={props.label} />
        </div>
      )}
      <TextInput
        {...props}
        {...field}
        type={props.type || "text"}
        placeholder={props.label}
        color={fieldState.error ? "fail" : !fieldState.isDirty ? "" : "success"}
      />
      {fieldState.error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {fieldState.error?.message}
        </p>
      )}
    </div>
  );
}
