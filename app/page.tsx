import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/** header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Giselle!</h2>
        <p>Terça-feira, 06 de agosto</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative h-[150px] w-full mt-6">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="Agende nos melhores com FSW Barber"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
