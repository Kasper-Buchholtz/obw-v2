import { CreditItem } from "../atoms/CreditItem";


type Credits = { name: string, role: string }[];

export const CreditsList = ({ credits }: { credits: Credits }) => {
    return (
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-4 text-white bg-black bg-opacity-75">
            <ul className="mt-4 space-y-10">
                {credits.map((credit: { name: string, role: string }) => (
                    <CreditItem key={credit.name} name={credit.name} role={credit.role} />
                ))}
            </ul>

        </div>
    );
};
