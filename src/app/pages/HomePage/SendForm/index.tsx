import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IFormFields } from './types';

// style components
import { Form, Note, Title, FormWrapper, Submit } from './components';

// components
import { TraineeForm } from './TraineeForm';
import { FileLoader } from './FileLoader';
import { Agreements } from './Agreements';
import { FieldTimeCall } from './TraineeForm/FieldTimeCall';

// data
import { listEnglishLevel } from './data/listEnglishLevel';
import { listPrimarySkill } from './data/listPrimarySkill';
import { listTimeForCall } from './data/listTimeForCall';

export const SendForm: React.FunctionComponent = () => {
	const [stateCountry, setCountry] = useState('');
	const [stateCity, setCity] = useState('');
	const [fileName, setFileName] = useState('');

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormFields>();

	const onSubmit = async ({
		englishLevel,
		firstName,
		lastName,
		email,
		country,
		city,
		phone,
		textArea,
		timeForCall,
	}: {
		[name: string]: string;
	}) => {
		const objectDto = {
			specialityId: '1',
			englishLevel,
			cv: 'this is a link to CV',
			internshipId: '1',
			timeForCall,
			userDto: {
				firstName,
				lastName,
				email,
				country,
				city,
				phone,
				otherInformation: textArea,
			},
		};

		const url = 'https://recruitment-platform.herokuapp.com/internship-request';

		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(objectDto),
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
			});
			const json = await response.json();
			console.log('Response:', json);

			// reset form
			reset();

			// reset fields fileLoader, select country and city
			setFileName('');
			setCountry('');
			setCity('');
		} catch (exception) {
			console.error('Exception:', exception);
		}
	};

	return (
		<FormWrapper>
			<Title>Submit your application</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<TraineeForm
					register={register}
					englishLevel={listEnglishLevel}
					primarySkill={listPrimarySkill}
					errorMessage={errors}
					setCountry={setCountry}
					setCity={setCity}
					country={stateCountry}
					city={stateCity}
				/>
				<Note size={12}>* Fields marked with * are required.</Note>
				<FieldTimeCall register={register} timeForCall={listTimeForCall} />
				<FileLoader
					register={register}
					errors={errors}
					setFileName={setFileName}
					fileName={fileName}
				/>
				<Agreements register={register} errors={errors} />
				<Submit>Submit</Submit>
			</Form>
		</FormWrapper>
	);
};
