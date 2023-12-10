import Image from "next/image";

type typeEmptyProps = {
  label: string;
};

export const Empty = ({ label }: typeEmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center">
      <div className="relative h-32 w-32">
        <Image alt="Empty" fill src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center mt-6">{label}</p>
    </div>
  );
};
