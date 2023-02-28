import React, { createContext, useContext } from 'react';

import { useAddress, useContract, useContractWrite, useMetamask } from '@thirdweb-dev/react';

const StateContext = createContext();

export const ContextProviver = ({ children }) => {
  const { contract } = useContract('0x67074f2777BE4426eb4b930fE993C59fcACC5608');
  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');
  const address = useAddress();
  const connectMetamask = useMetamask();
  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address, // owner
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime() / 1000,
        form.image,
      ]);
      console.log('Contract call success: ', data);
    } catch (error) {
      console.error('Contract call fail: ', error);
    }
  };

  return (
    <StateContext.Provider value={{ address, connectMetamask, publishCampaign }}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
