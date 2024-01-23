"use client";

import { Avatar } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { testimonials } from "./constant";

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="border-none text-white bg-gradient-to-r from-secondary to-transparent bg-transparent rounded-3xl"
          >
            <CardHeader className="">
              <CardContent className="pt-4 px-0 font-light">
                {item.description}
              </CardContent>
              <CardTitle className="flex items-start gap-x-3">
                <Avatar className=" bg-white text-secondary flex justify-center items-center text-sm mb-3 h-10 w-10">
                  {item.avatar}
                </Avatar>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm font-light">
                    {item.title}
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
