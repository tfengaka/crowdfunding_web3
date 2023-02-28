import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import { CustomButton, Loading } from '../components';
import { FormField, FormGroup, Input, Label, TextEditor } from '../components/ hookform';
import { checkIfImage } from '../utils';
import { money } from '../assets';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function CreateCampaign() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { publishCampaign } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [story, setStory] = useState('');

  const handleCreateCampaign = (data) => {
    setIsLoading(true);
    const form = { ...data, description: story };
    checkIfImage(form.image, async (exists) => {
      if (exists) {
        await publishCampaign({ ...form, target: ethers.utils.parseEther(form.target) });
        toast.success('Campaign created successfully');
      } else {
        toast.error('Provide a valid image URL');
        alert('Provide a valid image URL');
        setValue('image', '');
      }
    });
    setIsLoading(false);
  };

  return (
    <div className="bg-[#1c1c24] flex flex-col justify-center items-center rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign 🚀
        </h1>
      </div>
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit(handleCreateCampaign)} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <FormGroup>
          <FormField>
            <Label label="Your Name" htmlFor="fullname" required />
            <Input
              control={control}
              label="Your Name"
              name="fullname"
              placeholder="John Doe"
              error={errors.fullname?.message}
            />
          </FormField>
          <FormField>
            <Label label="Campaign Title" htmlFor="title" required />
            <Input control={control} name="title" placeholder="Write a title" error={errors.title?.message} />
          </FormField>
        </FormGroup>
        <FormField>
          <Label label="Story" required />
          <TextEditor placeholder="Write your story......" value={story} onChange={setStory} />
        </FormField>

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain" />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
            You will get 100% of the raised amount
          </h4>
        </div>

        <FormGroup>
          <FormField>
            <Label label="Goal Amount (ETH)" htmlFor="target" required />
            <Input
              control={control}
              name="target"
              type="number"
              placeholder="0.50 ETH"
              error={errors.target?.message}
            />
          </FormField>
          <FormField>
            <Label label="End Date" htmlFor="deadline" required />
            <Input
              control={control}
              name="deadline"
              type="date"
              placeholder="End Date"
              error={errors.deadline?.message}
            />
          </FormField>
        </FormGroup>
        <FormField>
          <Label label="Campaign image" required />
          <Input
            control={control}
            name="image"
            placeholder="Place image URL of your nice campaign"
            error={errors.image?.message}
          />
        </FormField>

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton type="submit" title="Submit new campaign" styles="bg-[#1dc071]" />
        </div>
      </form>
    </div>
  );
}

export default CreateCampaign;
