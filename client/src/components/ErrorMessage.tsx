import { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <div className="text-center my-4 py-4 uppercase text-white font-bold bg-red-500">
      {children}
    </div>
  );
}
