import React from "react";
import Service from "../../../components/molecules/service/Service";

export const Services = ({ services }) => {
  return (
    <div>
      {services.map((service) => (
        <Service service={service} />
      ))}
    </div>
  );
};

export default Services;
