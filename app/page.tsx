import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  // chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({});
  return (
    <div>
      {/** header */}
      <Header />
      <div className="p-5">
        {/** TEXTO */}
        <h2 className="text-xl font-bold">Olá, Giselle!</h2>
        <p>Terça-feira, 06 de agosto</p>
        {/** BUSCA */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/** BANNER */}
        <div className="relative h-[150px] w-full mt-6">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="Agende nos melhores com FSW Barber"
          />
        </div>
        {/** AGENDAMENTO */}
        <h2 className="text-xs font-bold uppercase text-gray-400 mb-3 mt-6">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/5788be0e-2307-4bb4-b603-d9dd237950a2-17l.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* DIREITA*/}
            <div className=" flex flex-col items-center justify-center px-6 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-xs font-bold uppercase text-gray-400 mb-3 mt-6">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
