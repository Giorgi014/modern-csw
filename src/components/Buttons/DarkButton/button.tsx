import type { ButtonHTMLAttributes} from "react";
import { clsx } from "clsx";
import "./button.scss";

type ButtonVariants = "contained" | "outlined";

type ButtonProbs = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  isLoading?: boolean;
};

export const Button = ({
  variant = "contained",
  children,
  isLoading,
  ...props
}: ButtonProbs) => {
  const isDisabled = isLoading || props.disabled

  return (
    <button
      {...props}
      className={clsx(
        "btn",
        {
          "btn-contained": variant === "contained",
          "btn-outlined": variant === "outlined",
          "btn-disabled": isDisabled
        },
        props.className
      )}
      disabled={isDisabled}
    >
      {children} {isLoading ? "..." : ""}
    </button>
  );
};
