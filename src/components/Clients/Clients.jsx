import React, {useState, useEffect} from 'react'

import { motion } from 'framer-motion';
import { urlFor, client } from "../../client";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const query = `*[_type == "clientLogo"]`;

    client.fetch(query).then((data) => setClients(data));
  }, []);

  return (
    <motion.div
      whileInView={{ x: [0, 0], y: [0, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-700 py-8"
    >
      <div className="grid gap-8 grid-col-2 md:grid-flow-col md:auto-cols-auto items-center justify-items-center">
        {clients.map((client, index) => (
          <div key={client._id} className="w-24 md:w-24 xl:w-28">
            <a href={client.clientLink} target="_blank" rel="noreferrer">
              <img src={urlFor(client.logoUrl).url()} />
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Clients