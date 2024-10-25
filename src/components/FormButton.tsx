"use client";
import { cn } from "@/lib/utils";
import { CopyX, Loader2, Save } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const FormButton = ({
  label,
  showSaveIcon = true,
  danger,
  className,
}: {
  label: string;
  showSaveIcon?: boolean;
  danger?: boolean;
  className?: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("flex items-center gap-1 mt-2", className)}
      variant={danger ? "destructive" : "default"}
    >
      {pending ? (
        <Loader2 className="loader h-4 w-4" />
      ) : danger ? (
        <CopyX className="h-4-w-4" />
      ) : showSaveIcon ? (
        <Save className="h-4 w-4" />
      ) : (
        <></>
      )}
      {label}
    </Button>
  );
};

export default FormButton;
