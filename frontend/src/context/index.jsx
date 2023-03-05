import React, { createContext, useContext } from 'react';

import { useAddress, useContract, useContractWrite, useMetamask } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

const StateContext = createContext();

export const ContextProviver = ({ children }) => {
  const navigate = useNavigate();
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
      navigate('/dashboard');
    } catch (error) {
      console.error('Contract call fail: ', error);
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns');
    const parserdCampaigns = campaigns.map((campaign, index) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: index,
    }));

    return parserdCampaigns;
  };

  const getMyCampaigns = async () => {
    const allCampaigns = await getCampaigns();
    const myCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);
    return myCampaigns;
  };

  return (
    <StateContext.Provider
      value={{ address, contract, connectMetamask, getMyCampaigns, getCampaigns, publishCampaign }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
