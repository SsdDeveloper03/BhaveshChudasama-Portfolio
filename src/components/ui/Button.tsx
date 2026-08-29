import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", type = "button", ...props },
  ref,
) {
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-sunrise text-white shadow-[0_12px_30px_rgba(255,122,0,0.22)] hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#ff912e] hover:shadow-[0_16px_44px_rgba(255,122,0,0.36)]",
    secondary:
      "border border-white/10 bg-white/[0.04] text-white backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-sunrise/50 hover:bg-sunrise/10 hover:shadow-[0_0_28px_rgba(255,122,0,0.14)]",
  };

  return (
    <button
      ref={ref}
      type={type}
      className={twMerge(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunrise disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
});

export { Button };
